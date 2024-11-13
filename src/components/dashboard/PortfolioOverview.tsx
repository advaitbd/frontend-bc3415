import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import {
  getPortfolioByUserId,
  getPortfolioRebalanceSuggestion,
  acceptPortfolioRebalance,
} from "../../services/portfolioService";
import type { Portfolio, PortfolioSuggestion } from "../../services/portfolio";
import profile from "../../assets/profile.jpeg";
import { StockTicker } from "../StockTicker";
import { PortfolioStats } from "../PortfolioStats";
import { newsItems } from "../../data/newsData";
import Confetti from "react-confetti";

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
};

export const PortfolioOverview = () => {
  const navigate = useNavigate();
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<PortfolioSuggestion | null>(
    null,
  );
  const [showConfetti, setShowConfetti] = useState(false);
  const [acceptedSuggestion, setAcceptSuggestion] = useState(false);
  const { user, userId } = useAuth();

  useEffect(() => {
    if (userId) {
      fetchPortfolioData();
    }
  }, [userId]);

  const fetchPortfolioData = async () => {
    try {
      setIsLoading(true);
      const data = await getPortfolioByUserId(userId!);
      setPortfolio(data[0]);
    } catch (error) {
      console.error("Failed to fetch portfolio:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const checkForRebalanceSuggestion = async () => {
    try {
      setIsLoading(true);
      const suggestion = await getPortfolioRebalanceSuggestion(
        portfolio!.portfolio_id,
      );
      setSuggestion(suggestion);
    } catch (error) {
      console.error("Failed to fetch suggestion:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAcceptRebalance = async () => {
    const originalPortfolio = portfolio;
    setPortfolio({
      ...portfolio!,
      composition: suggestion!.suggested_composition,
    });
    setSuggestion(null);
    setShowConfetti(true);
    setAcceptSuggestion(true);

    try {
      await acceptPortfolioRebalance(portfolio!.portfolio_id);
    } catch (error) {
      console.error("Failed to accept rebalance:", error);
      setPortfolio(originalPortfolio);
    } finally {
      setTimeout(() => setShowConfetti(false), 1000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Display Confetti when rebalance is accepted */}
      {showConfetti && <Confetti />}

      {/* Greeting Section */}
      <div className="p-6">
        <div className="flex items-center gap-4">
          <img
            src={profile}
            alt="Profile"
            className="w-20 h-20 rounded-lg object-cover shadow-lg"
          />
          <div>
            <h1 className="text-2xl">
              <span className="text-[#092C9F]">{getGreeting()}</span>,
              <span className="text-[#092C9F] font-bold"> {user?.name}</span>
            </h1>
            <p className="text-gray-600 mt-1">
              Here's what's happening with your portfolio today!
            </p>
          </div>
        </div>
      </div>

      {/* Portfolio Stats Component */}
      <PortfolioStats
        portfolio={portfolio}
        isLoading={isLoading}
        suggestion={suggestion}
        onAcceptRebalance={handleAcceptRebalance}
        onCheckRebalance={checkForRebalanceSuggestion}
      />

      {/* Stock Ticker */}
      <StockTicker />

      {/* Latest News Preview */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Latest News</h2>
          <button
            onClick={() => navigate("/news")}
            className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center"
          >
            View All News →
          </button>
        </div>
        <div className="space-y-4">
          {newsItems.slice(0, 3).map((news) => (
            <div
              key={news.id}
              className="border-b border-gray-100 last:border-0 pb-4 last:pb-0"
            >
              <div className="flex items-center space-x-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {news.category}
                </span>
                <span className="text-xs text-gray-500">{news.timeAgo}</span>
                <span className="text-xs text-gray-500">·</span>
                <span className="text-xs text-gray-500">{news.source}</span>
              </div>
              <h3 className="text-gray-900 font-medium hover:text-indigo-600 cursor-pointer">
                {news.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
