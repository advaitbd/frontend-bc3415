import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { useOnboarding } from "../../contexts/OnboardingContext";
import { useState } from "react";
import { BudgetRange } from "../auth/BudgetForm";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
const budgetRanges: BudgetRange[] = [
  {
    id: "starter",
    name: "Starter",
    range: "$500 - $5,000",
    lowerLimit: 500,
    upperLimit: 5000,
    description: "Perfect for beginning your investment journey",
  },
  {
    id: "growth",
    name: "Growth",
    range: "$5,000 - $25,000",
    lowerLimit: 5000,
    upperLimit: 25000,
    description: "Build your wealth with a substantial portfolio",
  },
  {
    id: "premium",
    name: "Premium",
    range: "$25,000+",
    lowerLimit: 25000,
    upperLimit: 25000,
    description: "Maximize opportunities with significant capital",
  },
];

const mockStocks = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 178.72,
    change: 2.45,
    marketCap: "2.8T",
    recommendation: "Strong Buy",
    image:
      "https://streetfins.com/wp-content/uploads/2023/05/merlin_168487071_758ee693-dee1-4a5d-bb72-61d989164577-superJumbo.jpg",
  },
  {
    symbol: "TSLA",
    name: "Tesla, Inc.",
    price: 238.45,
    change: -1.23,
    marketCap: "756.4B",
    recommendation: "Buy",
    image:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=400&h=300",
  },
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    price: 456.78,
    change: 5.67,
    marketCap: "1.1T",
    recommendation: "Strong Buy",
    image:
      "https://images.unsplash.com/photo-1611174743420-3d7df880ce32?auto=format&fit=crop&q=80&w=400&h=300",
  },
];

export const StockSwiper = () => {
  const { onboardingData } = useOnboarding();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [addedStocks, setAddedStocks] = useState<Record<string, boolean>>({
    AAPL: true,
    TSLA: true,
    NVDA: true
  });

  const portfolioValue = onboardingData.budget.customAmount
    ? parseInt(onboardingData.budget.customAmount)
    : budgetRanges.find((budget) => budget.id === onboardingData.budget.range)
        ?.upperLimit || 0;
  const { userId } = useAuth();
  console.log(portfolioValue);
  const handleCreatePortfolio = async () => {
    setIsLoading(true);

    const portfolioData = {
      user_id: userId,
      composition: {
        AAPL: 0.1,
        TSLA: 0.6,
        NVDA: 0.3,
      },
      current_value: portfolioValue ? portfolioValue : 10000, // Example portfolio value
      forecasted_value: portfolioValue ? portfolioValue : 10000, // Example forecasted value
    };

    try {
      const response = await fetch(`${BASE_URL}/api/portfolio/portfolio/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any authentication headers if needed
        },
        body: JSON.stringify(portfolioData),
      });

      if (!response.ok) {
        throw new Error("Failed to create portfolio");
      }
      navigate("/dashboard");
    } catch (error) {
      console.error("Error creating portfolio:", error);
      alert("Failed to create portfolio");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Stock Recommendations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {mockStocks.map((stock) => (
          <Link to={`/stock-picks/${stock.symbol}`} key={stock.symbol}>
            <div
              key={stock.symbol}
              className="bg-gradient-to-br from-gray-50 to-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={stock.image}
                alt={stock.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {stock.symbol}
                    </h3>
                    <p className="text-gray-600">{stock.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">
                      ${stock.price}
                    </p>
                    <div className="flex items-center justify-end">
                      {stock.change >= 0 ? (
                        <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                      )}
                      <span
                        className={`${
                          stock.change >= 0 ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {stock.change}%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Market Cap</p>
                    <p className="text-lg font-semibold text-gray-900">
                      ${stock.marketCap}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Recommendation</p>
                    <p className="text-lg font-semibold text-green-600">
                      {stock.recommendation}
                    </p>
                  </div>
                </div>

                <button 
                  onClick={(e) => {
                    e.preventDefault(); // Prevent Link
                    setAddedStocks(prev => ({
                      ...prev, 
                      [stock.symbol]: !prev[stock.symbol]
                    }));
                  }}
                  className={`w-full py-2 px-4 rounded-lg transition-colors ${
                    addedStocks[stock.symbol]
                      ? "bg-green-100 text-green-600 hover:bg-green-200"
                      : "bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
                  }`}
                >
                  {addedStocks[stock.symbol] ? "Added in Portfolio" : "Add to Portfolio"}
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleCreatePortfolio}
          disabled={isLoading}
          className="py-3 px-6 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
        >
          <DollarSign className="w-5 h-5" />
          {isLoading ? "Creating..." : "Create Portfolio"}
        </button>
      </div>
    </div>
  );
};
