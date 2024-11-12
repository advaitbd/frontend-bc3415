import { Trophy, Gift, Award } from "lucide-react";

export const PointsOverview = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Rewards & Points
        </h2>
        <div className="flex items-center space-x-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <span className="text-lg font-bold text-gray-900">2,450 pts</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-900">Trading NFT Badge</h3>
              <p className="text-sm text-gray-600 mt-1">Level: Gold Trader</p>
            </div>
            <Award className="w-16 h-16 text-yellow-500" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">This Month</span>
              <Gift className="w-4 h-4 text-indigo-600" />
            </div>
            <p className="text-lg font-semibold text-gray-900">+450 pts</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Total Earned</span>
              <Trophy className="w-4 h-4 text-yellow-500" />
            </div>
            <p className="text-lg font-semibold text-gray-900">2,450 pts</p>
          </div>
        </div>

        <button className="w-full mt-4 py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          Redeem Points
        </button>
      </div>
    </div>
  );
};
