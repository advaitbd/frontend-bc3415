// src/pages/StockDetailPage.tsx
import { useParams } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Activity,
  Users,
  Clock,
} from "lucide-react";

// Mock data for the chart
const mockChartData = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(
    Date.now() - (30 - i) * 24 * 60 * 60 * 1000,
  ).toLocaleDateString(),
  price: Math.random() * 20 + 160, // Random price between 160 and 180
}));

// Mock stock details (you should replace this with real API data)
const mockStockDetails = {
  AAPL: {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 178.72,
    change: 2.45,
    marketCap: "2.8T",
    volume: "55.3M",
    peRatio: "28.5",
    dividend: "0.82%",
    about:
      "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide.",
    recommendation: "Strong Buy",
    image:
      "https://images.unsplash.com/photo-1611174743420-3d7df880ce32?auto=format&fit=crop&q=80&w=400&h=300",
  },
  // Add other stocks as needed
};

export const StockDetailPage = () => {
  const { symbol } = useParams<{ symbol: string }>();
  const stock = mockStockDetails[symbol as keyof typeof mockStockDetails];

  if (!stock) {
    return <div>Stock not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Stock Info */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <img
              src={stock.image}
              alt={stock.name}
              className="w-full h-48 object-cover rounded-lg mb-6"
            />

            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900">
                {stock.symbol}
              </h1>
              <p className="text-xl text-gray-600">{stock.name}</p>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-3xl font-bold text-gray-900">
                  ${stock.price}
                </p>
                <div className="flex items-center">
                  {stock.change >= 0 ? (
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                  )}
                  <span
                    className={
                      stock.change >= 0 ? "text-green-600" : "text-red-600"
                    }
                  >
                    {stock.change}%
                  </span>
                </div>
              </div>
              <button className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Trade
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 text-gray-500 mr-2" />
                  <span className="text-gray-600">Market Cap</span>
                </div>
                <span className="font-semibold">${stock.marketCap}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Activity className="w-5 h-5 text-gray-500 mr-2" />
                  <span className="text-gray-600">Volume</span>
                </div>
                <span className="font-semibold">{stock.volume}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-gray-500 mr-2" />
                  <span className="text-gray-600">P/E Ratio</span>
                </div>
                <span className="font-semibold">{stock.peRatio}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-gray-500 mr-2" />
                  <span className="text-gray-600">Dividend Yield</span>
                </div>
                <span className="font-semibold">{stock.dividend}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Chart and About */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Price Performance
            </h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mockChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="price"
                    stroke="#4f46e5"
                    fill="#e0e7ff"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              About {stock.name}
            </h2>
            <p className="text-gray-600 leading-relaxed">{stock.about}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
