// frontend-bc3415/src/components/news/StockTicker.tsx
import { TrendingUp, TrendingDown, ArrowRight } from "lucide-react";
import { marketSnapshot } from "../data/newsData";

export const StockTicker = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Market Snapshot</h2>
        <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center">
          View All
          <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      <div className="relative">
        <div className="flex space-x-4 overflow-x-auto no-scrollbar pb-2">
          {marketSnapshot.map((stock) => (
            <div
              key={stock.symbol}
              className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors min-w-[160px]"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">{stock.symbol}</span>
                {stock.change >= 0 ? (
                  <TrendingUp className="w-4 h-4 text-green-500" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-500" />
                )}
              </div>
              <p className="text-lg font-bold">${stock.price}</p>
              <span
                className={`text-sm ${
                  stock.change >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {stock.change > 0 ? "+" : ""}
                {stock.change}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
