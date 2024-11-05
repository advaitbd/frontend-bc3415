import React, { useState } from 'react';
import { Send, CheckCircle, XCircle } from 'lucide-react';

export const NFTTransfer = () => {
  const [recipientAddress, setRecipientAddress] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleTransfer = () => {
    setShowConfirmation(true);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Transfer NFT Badge</h2>

      {!showConfirmation ? (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg mb-6">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1635360394882-06df07611189?auto=format&fit=crop&q=80&w=100&h=100"
                alt="NFT Badge"
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-medium text-gray-900">Gold Trader Badge</h3>
                <p className="text-sm text-gray-600">Points: 2,450</p>
                <p className="text-sm text-gray-600">Level: Gold</p>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Recipient Address
            </label>
            <input
              type="text"
              value={recipientAddress}
              onChange={(e) => setRecipientAddress(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter wallet address"
            />
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              Warning: This action cannot be undone. Your points and badge will be transferred
              to the recipient.
            </p>
          </div>

          <button
            onClick={handleTransfer}
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2"
          >
            <Send className="w-4 h-4" />
            <span>Transfer NFT</span>
          </button>
        </div>
      ) : (
        <div className="text-center py-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Transfer Complete!</h3>
          <p className="text-gray-600 mb-6">
            Your NFT badge has been successfully transferred.
          </p>
          <button
            onClick={() => setShowConfirmation(false)}
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};