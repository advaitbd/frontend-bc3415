import React, { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';

export const AIChat = () => {
  const [message, setMessage] = useState('');

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)] bg-white rounded-xl shadow-sm">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">AI Investment Assistant</h2>
        <p className="text-sm text-gray-600">Ask me anything about your investments or market trends</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <Bot className="w-8 h-8 text-indigo-600 bg-indigo-50 rounded-lg p-1" />
          </div>
          <div className="flex-1">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-900">
                Hello! I'm your AI investment assistant. I can help you with market analysis,
                portfolio recommendations, and answering any questions about your investments.
                What would you like to know?
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-3 justify-end">
          <div className="flex-1">
            <div className="bg-indigo-50 rounded-lg p-4 ml-12">
              <p className="text-gray-900">
                Can you analyze my portfolio's performance and suggest any rebalancing?
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <User className="w-8 h-8 text-white bg-indigo-600 rounded-lg p-1" />
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <Bot className="w-8 h-8 text-indigo-600 bg-indigo-50 rounded-lg p-1" />
          </div>
          <div className="flex-1">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-900">
                I've analyzed your portfolio and noticed a few things:
              </p>
              <ul className="mt-2 space-y-2 list-disc list-inside text-gray-700">
                <li>Your tech allocation is slightly above target (35% vs 30%)</li>
                <li>Energy sector is underweight (8% vs 15% target)</li>
                <li>Cash position is higher than optimal (12% vs 5% target)</li>
              </ul>
              <p className="mt-3 text-gray-900">
                Would you like me to suggest specific trades to rebalance your portfolio?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};