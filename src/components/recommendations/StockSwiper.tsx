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
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Stock Recommendations</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {mockStocks.map((stock) => (
          <div key={stock.symbol} className="bg-gradient-to-br from-gray-50 to-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img
              src={stock.image}
              alt={stock.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{stock.symbol}</h3>
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
                        stock.change >= 0 ? 'text-green-600' : 'text-red-600'
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

              <button className="w-full py-2 px-4 bg-indigo-100 text-indigo-600 rounded-lg hover:bg-indigo-200 transition-colors">
                Add to Portfolio
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="py-3 px-6 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2">
          <DollarSign className="w-5 h-5" />
          Create Portfolio
        </button>
      </div>
    </div>
  );
};