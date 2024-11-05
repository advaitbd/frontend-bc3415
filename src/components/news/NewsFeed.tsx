import React from 'react';
import { ExternalLink } from 'lucide-react';

const newsCategories = [
  'All',
  'Technology',
  'Energy',
  'Real Estate',
  'Crypto',
  'Markets',
];

export const NewsFeed = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="border-b border-gray-200 p-4">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {newsCategories.map((category) => (
            <button
              key={category}
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="divide-y divide-gray-200">
        {[1, 2, 3].map((item) => (
          <article key={item} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-start space-x-4">
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=100&h=100"
                alt="News thumbnail"
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Technology
                  </span>
                  <span className="text-xs text-gray-500">2 hours ago</span>
                </div>
                <h3 className="mt-1 text-lg font-medium text-gray-900">
                  AI-Powered Trading Platforms Show Promise in Recent Market Tests
                </h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  New research shows that AI-powered trading platforms are outperforming traditional
                  methods in volatile market conditions...
                </p>
                <div className="mt-2 flex items-center space-x-4">
                  <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center">
                    Read more
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </button>
                  <button className="text-sm text-gray-500 hover:text-gray-700">
                    Save for later
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="p-4 border-t border-gray-200">
        <button className="w-full py-2 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
          Load more news
        </button>
      </div>
    </div>
  );
};