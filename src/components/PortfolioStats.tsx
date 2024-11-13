import { useState } from "react";
import {
  TrendingUp,
  DollarSign,
  ChevronDown,
  ChevronUp,
  RefreshCw,
} from "lucide-react";
import type { Portfolio, PortfolioSuggestion } from "../services/portfolio";

interface PortfolioStatsProps {
  timeframe: string;
  onTimeframeChange: (timeframe: string) => void;
  portfolio: Portfolio | null;
  isLoading: boolean;
  suggestion: PortfolioSuggestion | null;
  onAcceptRebalance: () => Promise<void>;
  onCheckRebalance: () => Promise<void>; // Add this new prop
}

const generatePieChartPath = (
  startAngle: number,
  endAngle: number,
  radius: number,
): string => {
  const start = {
    x: Math.cos(startAngle) * radius,
    y: Math.sin(startAngle) * radius,
  };
  const end = {
    x: Math.cos(endAngle) * radius,
    y: Math.sin(endAngle) * radius,
  };
  const largeArcFlag = endAngle - startAngle <= Math.PI ? "0" : "1";

  return `M 0 0 L ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y} Z`;
};

const PieChart = ({
  composition,
  totalValue,
}: {
  composition: Record<string, number>;
  totalValue: number;
}) => (
  <div className="relative w-full max-w-[18rem] h-72 mx-auto">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <p className="text-3xl font-bold text-gray-900">
          ${totalValue.toLocaleString()}
        </p>
        <p className="text-sm text-gray-600">Total Value</p>
      </div>
    </div>
    <svg viewBox="-1 -1 2 2" className="transform -rotate-90 drop-shadow-lg">
      {
        Object.entries(composition).reduce(
          (acc, [asset, allocation], index, array) => {
            const startAngle = acc.currentAngle;
            const endAngle = startAngle + allocation * Math.PI * 2;

            const hue = (index * 137.5 + 60) % 360;
            const color = `hsl(${hue}, 85%, 65%)`;

            acc.paths.push(
              <g key={asset}>
                <path
                  d={generatePieChartPath(startAngle, endAngle, 0.95)}
                  fill={color}
                  stroke="white"
                  strokeWidth="0.02"
                  className="transition-all duration-300 hover:opacity-90 cursor-pointer"
                  style={{
                    filter: "drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.1))",
                  }}
                />
                <title>
                  {asset}: {(allocation * 100).toFixed(2)}%
                </title>
              </g>,
            );
            acc.currentAngle = endAngle;
            return acc;
          },
          { paths: [], currentAngle: 0 } as {
            paths: JSX.Element[];
            currentAngle: number;
          },
        ).paths
      }
    </svg>
  </div>
);

const CompositionLegend = ({
  composition,
  totalValue,
}: {
  composition: Record<string, number>;
  totalValue: number;
}) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
    {Object.entries(composition).map(([asset, allocation], index) => {
      const hue = (index * 137.5 + 60) % 360;
      return (
        <div
          key={asset}
          className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div
              className="w-4 h-4 rounded-full shadow-sm"
              style={{ backgroundColor: `hsl(${hue}, 85%, 65%)` }}
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900">{asset}</span>
                <span className="text-gray-900 font-semibold">
                  {Math.round(allocation * 100)}%
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                ${(totalValue * allocation).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

export const PortfolioStats = ({
  portfolio,
  isLoading,
  suggestion,
  onAcceptRebalance,
  onCheckRebalance,
}: PortfolioStatsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isViewingSuggestion, setIsViewingSuggestion] = useState(false);

  const renderCompositionSection = () => (
    <div className="space-y-6">
      {suggestion && (
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-medium text-blue-900">
                Rebalance Suggestion Available
              </h4>
              <p className="text-sm text-blue-700">
                Expected Return: +
                {Math.ceil(suggestion.expected_return * 10) / 10}%
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:space-x-4">
              <button
                onClick={() => setIsViewingSuggestion(!isViewingSuggestion)}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                {isViewingSuggestion ? "View Current" : "View Suggested"}
              </button>
              {isViewingSuggestion && (
                <button
                  onClick={onAcceptRebalance}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full sm:w-auto"
                >
                  Accept Rebalance
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col lg:grid lg:grid-cols-1 gap-8">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4 text-center lg:text-left">
            {isViewingSuggestion ? "Suggested Portfolio" : "Current Portfolio"}
          </h3>
          <PieChart
            composition={
              isViewingSuggestion
                ? suggestion?.suggested_composition || portfolio!.composition
                : portfolio!.composition
            }
            totalValue={portfolio!.current_value}
          />
          <CompositionLegend
            composition={
              isViewingSuggestion
                ? suggestion?.suggested_composition || portfolio!.composition
                : portfolio!.composition
            }
            totalValue={portfolio!.current_value}
          />
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600">Current Value</p>
            <p className="text-lg font-semibold text-gray-900">
              ${portfolio!.current_value.toLocaleString()}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Forecasted Value</p>
            <p className="text-lg font-semibold text-green-600">
              ${portfolio!.forecasted_value.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Portfolio Overview
          </h2>

          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent expansion toggle
                onCheckRebalance();
              }}
              disabled={isLoading}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-xs font-medium"
              title="Check for portfolio rebalancing opportunities"
            >
              <RefreshCw
                className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`}
              />
              {isLoading ? "Checking..." : "Check Rebalance"}
            </button>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-600 text-sm">Total Value</span>
              <DollarSign className="w-5 h-5 text-indigo-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">
              ${portfolio?.current_value.toLocaleString()}
            </p>
            <div className="flex items-center mt-2 text-sm text-green-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span>+2.5% ($3,042)</span>
            </div>
          </div>

          {portfolio?.forecasted_value &&
            portfolio?.current_value &&
            portfolio.forecasted_value > portfolio.current_value && (
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-600 text-sm">
                    Forecasted Growth
                  </span>
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  +$
                  {(
                    portfolio.forecasted_value - portfolio.current_value
                  ).toLocaleString()}
                </p>
                <div className="flex items-center mt-2 text-sm text-green-600">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span>
                    +
                    {(
                      ((portfolio.forecasted_value - portfolio.current_value) /
                        portfolio.current_value) *
                      100
                    ).toFixed(2)}
                    %
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Projected for next quarter
                </p>
              </div>
            )}
        </div>
      </div>

      {isExpanded && (
        <div className="border-t border-gray-200 p-6">
          {isLoading ? (
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
            </div>
          ) : portfolio ? (
            renderCompositionSection()
          ) : (
            <p className="text-gray-600 text-center">
              No portfolio data available
            </p>
          )}
        </div>
      )}
    </div>
  );
};
