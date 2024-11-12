import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import botImage from '../../assets/ai-bot.jpg'; // Adjust the path as necessary

export const NewsDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, content, category, timeAgo, image, excerpt } = location.state || {};

  return (
    <div className="container mx-auto p-4 pt-0">
      {/* Header with Back Button */}
      <div className="flex justify-between items-center mb-4">
        <button className="text-gray-700 hover:text-gray-900" onClick={() => navigate(-1)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-2xl font-semibold text-gray-900">Article Details</h1>
        <div></div> {/* Empty div to balance the layout */}
      </div>

      <div className="bg-blue-500 text-white rounded-lg shadow-lg overflow-hidden mb-4">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-64 object-cover opacity-50" />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 p-4 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs">{category}</span>
              <div className="flex space-x-2">
                <button className="bg-red-500 text-white p-2 rounded-full shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v16h16V4H4zm4 4h8v8H8V8z" />
                  </svg>
                </button>
                <button className="bg-green-500 text-white p-2 rounded-full shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-semibold">{title}</h4>
              <p className="text-sm text-gray-300">Published on: {timeAgo}</p>
              <div className="flex items-center mt-2">
                <img src={botImage} alt="Author" className="w-10 h-10 rounded-full" />
                <p className="ml-2">
                  Alessia Monks<br />
                  <span className="text-gray-300 text-xs">Author</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4">
        <p className="text-gray-700 mb-4">{excerpt}</p>
        <figure className="overflow-hidden rounded-lg mb-4">
          <img src={image} alt={title} className="w-full h-auto" />
        </figure>
        <h5 className="text-xl font-semibold mb-3">Best class template with details</h5>
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
};