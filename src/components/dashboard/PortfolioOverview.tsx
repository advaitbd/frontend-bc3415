import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

export const PortfolioOverview = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Portfolio Overview</h2>
        <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-sm">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
          <option>Last year</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
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

      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium text-gray-900">Quick Actions</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex items-center justify-center p-3 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <span className="text-sm font-medium">Buy Stock</span>
          </button>
          <button className="flex items-center justify-center p-3 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <span className="text-sm font-medium">Sell Stock</span>
          </button>
          <button className="flex items-center justify-center p-3 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <span className="text-sm font-medium">Transfer Funds</span>
          </button>
          <button className="flex items-center justify-center p-3 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
            <span className="text-sm font-medium">View Reports</span>
          </button>
        </div>
      </div>
    </div>
  );
};