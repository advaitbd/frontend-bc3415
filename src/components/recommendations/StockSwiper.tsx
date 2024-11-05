import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ThumbsUp, ThumbsDown, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

const mockStocks = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 178.72,
    change: 2.45,
    marketCap: '2.8T',
    recommendation: 'Strong Buy',
    image: 'https://images.unsplash.com/photo-1611174743420-3d7df880ce32?auto=format&fit=crop&q=80&w=400&h=300',
  },
  {
    symbol: 'TSLA',
    name: 'Tesla, Inc.',
    price: 238.45,
    change: -1.23,
    marketCap: '756.4B',
    recommendation: 'Buy',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=400&h=300',
  },
  {
    symbol: 'NVDA',
    name: 'NVIDIA Corporation',
    price: 456.78,
    change: 5.67,
    marketCap: '1.1T',
    recommendation: 'Strong Buy',
    image: 'https://images.unsplash.com/photo-1611174743420-3d7df880ce32?auto=format&fit=crop&q=80&w=400&h=300',
  },
];

export const StockSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  const handleSwipe = (dir: 'left' | 'right') => {
    setDirection(dir);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % mockStocks.length);
      setDirection(null);
    }, 300);
  };

  const currentStock = mockStocks[currentIndex];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Stock Recommendations</h2>

      <div className="relative overflow-hidden">
        <div
          className={`transform transition-transform duration-300 ${
            direction === 'left'
              ? '-translate-x-full opacity-0'
              : direction === 'right'
              ? 'translate-x-full opacity-0'
              : 'translate-x-0 opacity-100'
          }`}
        >
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg overflow-hidden">
            <img
              src={currentStock.image}
              alt={currentStock.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{currentStock.symbol}</h3>
                  <p className="text-gray-600">{currentStock.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">
                    ${currentStock.price}
                  </p>
                  <div className="flex items-center justify-end">
                    {currentStock.change >= 0 ? (
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                    )}
                    <span
                      className={`${
                        currentStock.change >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {currentStock.change}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Market Cap</p>
                  <p className="text-lg font-semibold text-gray-900">
                    ${currentStock.marketCap}
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Recommendation</p>
                  <p className="text-lg font-semibold text-green-600">
                    {currentStock.recommendation}
                  </p>
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => handleSwipe('left')}
                  className="p-4 bg-red-100 rounded-full text-red-600 hover:bg-red-200 transition-colors"
                >
                  <ThumbsDown className="w-6 h-6" />
                </button>
                <button
                  onClick={() => handleSwipe('right')}
                  className="p-4 bg-green-100 rounded-full text-green-600 hover:bg-green-200 transition-colors"
                >
                  <ThumbsUp className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        {mockStocks.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${
              index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};