import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, BookmarkPlus } from 'lucide-react';
import { StockTicker } from '../StockTicker';
import { newsCategories, newsItems, NewsItem } from '../../data/newsData';

const formatDate = () => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date().toLocaleDateString('en-US', options);
};

const parseTimeAgo = (timeAgo: string): number => {
  const [value, unit] = timeAgo.split(' ');
  const multiplier = unit.startsWith('hour') ? 1 : unit.startsWith('day') ? 24 : 0;
  return parseInt(value) * multiplier;
};

export const NewsFeed = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredNewsItems = selectedCategory === 'All'
  ? newsItems.sort((a, b) => parseTimeAgo(a.timeAgo) - parseTimeAgo(b.timeAgo))
  : newsItems.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Header with Back Button */}
      <div className="flex justify-between items-center">
    <h1 className="text-2xl font-semibold text-gray-900">Market News</h1>
    <p className="text-gray-600">{formatDate()}</p>
  </div>

      {/* Stock Ticker Component */}
      <StockTicker />

      {/* Main News Content */}
      <div className="bg-white rounded-xl shadow-sm">
        {/* Categories */}
        <div className="border-b border-gray-200 p-4">
          <div className="flex space-x-2 overflow-x-auto no-scrollbar">
            {newsCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium whitespace-nowrap
                          ${selectedCategory === category ? 'bg-indigo-50 text-indigo-600' : 'bg-gray-100 text-gray-700'}
                          hover:bg-indigo-50 hover:text-indigo-600 transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* News Articles */}
        <div className="divide-y divide-gray-200">
          {filteredNewsItems.map((item: NewsItem) => (
            <article
              key={item.id}
              className="p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div className="flex-1">
                  {/* Category in its own row */}
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {item.category}
                    </span>
                  </div>

                  {/* Metadata row */}
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs text-gray-500">
                      {item.timeAgo}
                    </span>
                    <span className="text-xs text-gray-500">·</span>
                    <span className="text-xs text-gray-500">{item.source}</span>
                    <span className="text-xs text-gray-500">·</span>
                    <span className="text-xs text-gray-500">
                      {item.readTime}
                    </span>
                  </div>

                  <Link
                    to={`/news/${item.id}`}
                    state={item}
                    className="text-gray-900 font-medium hover:text-indigo-600 cursor-pointer"
                  >
                    {item.title}
                  </Link>
                  <div className="mt-2 flex items-center space-x-4">
                    <Link
                      to="/ai-assistant"
                      state={{ title: item.title }}
                      className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center"
                    >
                      Ask AI
                      <Brain className="w-4 h-4 ml-1" />
                    </Link>
                    <button className="text-sm text-gray-500 hover:text-gray-700 flex items-center">
                      <BookmarkPlus className="w-4 h-4 mr-1" />
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
    </div>
  );
};