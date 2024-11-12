import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Send, Bot, User } from 'lucide-react';
import botImage from '../../assets/ai-bot.jpg'; // Adjust the path as necessary

export const AIChat = () => {
  const location = useLocation();
  const { title } = location.state || { title: 'the article' };
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([
    {
      sender: 'bot',
      text: "Hello! I'm your AI investment assistant. What can I help you with today?",
    },
  ]);
  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (title) {
      setMessage(`Hi, could you give me a summary of this article: ${title}?`);
    } else {
      setMessage('');
    }
  }, [title]);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [conversation]);

  const handleSend = async () => {
    if (message.trim() === '') return;

    // Add user message to conversation
    const formattedMessage = message.replace(
      new RegExp(`(${title})`, 'gi'),
      '<strong>$1</strong>'
    );

    setConversation((prev) => [
      ...prev,
      { sender: 'user', text: formattedMessage },
    ]);

    // Clear the message input
    setMessage('');

    // Call backend API
    try {
      const response = await fetch('https://backend-bc3415.onrender.com/api/chat/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: 'user123', // Replace with actual user ID if available
          message: message,
          context: 'investment',
        }),
      });
      const data = await response.json();

      // Add bot response to conversation
      setConversation((prev) => [
        ...prev,
        { sender: 'bot', text: data.response },
      ]);
    } catch (error) {
      console.error('Error calling backend API:', error);
    }

  };

  return (
    <div className="flex flex-col h-[calc(100vh-11rem)] bg-white rounded-xl shadow-sm">
      <div className="p-4 border-b border-gray-200 flex items-center space-x-4">
        <img
          src={botImage}
          alt="AI Assistant"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-900">AI Investment Assistant</h2>
          <p className="text-sm text-gray-600">Ask me anything about your investments or market trends</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {conversation.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start space-x-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}
            ref={index === conversation.length - 1 ? lastMessageRef : null}
          >
            {msg.sender === 'bot' && (
              <div className="flex-shrink-0">
                <Bot className="w-8 h-8 text-indigo-600 bg-indigo-50 rounded-lg p-1" />
              </div>
            )}
            <div className={`flex-1 ${msg.sender === 'user' ? 'text-right' : ''}`}>
              <div className={`rounded-lg p-4 ${msg.sender === 'bot' ? 'bg-gray-50' : 'bg-indigo-50'} animate-fade-in`}>
                <p className="text-gray-900" dangerouslySetInnerHTML={{ __html: msg.text }}></p>
              </div>
            </div>
            {msg.sender === 'user' && (
              <div className="flex-shrink-0">
                <User className="w-8 h-8 text-gray-600 bg-gray-50 rounded-lg p-1" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <textarea
            className="flex-1 border border-gray-300 rounded-lg p-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            rows={3}
          />
          <button className="text-indigo-600 hover:text-indigo-700" onClick={handleSend}>
            <Send className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};