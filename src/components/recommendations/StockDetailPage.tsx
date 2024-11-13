// src/pages/StockDetailPage.tsx
import { useParams } from "react-router-dom";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Activity,
  Users,
  Clock,
} from "lucide-react";
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { useNavigate } from 'react-router-dom';



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
  const navigate = useNavigate();

  if (!stock) {
    return <div>Stock not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <button className="text-gray-700 hover:text-gray-900" onClick={() => navigate(-1)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
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
              <StockChart data={defaultData} />
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

// Add defaultData (you'll need to replace this with actual historical data)
const defaultData = [
  { x: new Date('2024-03-03'), open: 180.20, high: 178.35, low: 174.80, close: 177.15, volume: 2345000 },
  { x: new Date('2024-03-04'), open: 177.50, high: 179.90, low: 176.25, close: 178.40, volume: 1987000 },
  { x: new Date('2024-03-05'), open: 178.60, high: 180.15, low: 177.30, close: 179.25, volume: 2156000 },
  { x: new Date('2024-03-06'), open: 182.00, high: 181.45, low: 178.20, close: 180.90, volume: 2567000 },
  { x: new Date('2024-03-07'), open: 180.75, high: 182.30, low: 179.50, close: 181.15, volume: 2234000 },
  { x: new Date('2024-03-08'), open: 183.20, high: 183.75, low: 180.40, close: 182.60, volume: 2789000 },
  { x: new Date('2024-03-09'), open: 182.40, high: 184.20, low: 181.15, close: 183.45, volume: 2456000 }
];


// Add missing StockChart component
const StockChart: React.FC<{ data: typeof defaultData }> = ({ data }) => {
  const options = {
    chart: {
      type: 'candlestick',
      height: 200
    },
    xaxis: {
      type: 'datetime',
      tooltip: {
        enabled: false, // Disable the x-axis tooltip
      }
    },
    yaxis: {
      tooltip: {
        enabled: false,
      }
    }
  };

  const series = [{
    data: data.map(d => ({
      x: new Date(d.x).getTime(),
      y: [d.open, d.high, d.low, d.close]
    }))
  }];

  return (
    <div className="w-full h-[200px]">
      <Chart
        options={options}
        series={series}
        type="candlestick"
        height={200}
      />
    </div>
  );
};