// frontend-bc3415/src/components/dashboard/PortfolioOverview.tsx
import { TrendingUp, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";
import profile from "../../assets/profile.jpeg";
import { StockTicker } from "../StockTicker";
import { newsItems } from "../../data/newsData";

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
};

export const PortfolioOverview = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Greeting Section */}
      <div className="p-6">
        <div className="flex items-center gap-4">
          <img
            src={profile}
            alt="Profile"
            className="w-20 h-20 rounded-lg object-cover shadow-lg"
          />
          <div>
            <h1 className="text-4xl">
              <span className="text-[#092C9F]">{getGreeting()}</span>,
              <span className="text-[#092C9F] font-bold"> Prof</span>
            </h1>
            <p className="text-gray-600 mt-1">
              Here's what's happening with your portfolio today!
            </p>
          </div>
        </div>
      </div>

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

      {/* Portfolio Stats */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Portfolio Overview
          </h2>
          <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-sm">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>Last year</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">Total Value</p>
              <DollarSign className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-2">$124,567.89</p>
            <div className="flex items-center mt-2">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600">+2.4%</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">Today's Gain/Loss</p>
              <TrendingUp className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-2">+$1,234.56</p>
            <div className="flex items-center mt-2">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600">+1.2%</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">Available Cash</p>
              <DollarSign className="w-5 h-5 text-emerald-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-2">$15,678.90</p>
            <button className="text-sm text-emerald-600 mt-2 hover:text-emerald-700">
              Add funds →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
