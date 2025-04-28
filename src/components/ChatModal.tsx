//Chatbot default setup which aims to integrate deepseek v3 via openrouter's API integration to the react based chatbot
import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { Button } from './ui/button';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{ user: boolean; text: string }[]>([
    { user: false, text: "Hello! I'm your PrimeVision AI assistant. How can I help you discover new content today?" }
  ]);

  const handleSendMessage = () => {
    if (message.trim() === '') return;
    
    // Add user message to chat
    setChatHistory([...chatHistory, { user: true, text: message }]);
    
    // Simulate AI response for now
    setTimeout(() => {
      let response = "I'm just a demo assistant. In a real implementation, I would connect to an AI API to provide personalized recommendations.";
      
      if (message.toLowerCase().includes('recommend')) {
        response = "Based on your viewing history, you might enjoy 'The Expanse', 'The Boys', or 'Fleabag'. These shows have been popular with viewers who have similar tastes.";
      } else if (message.toLowerCase().includes('genre')) {
        response = "We have many genres including Action, Comedy, Drama, Sci-Fi, Thriller, Romance, Horror, and Documentary. Which one interests you the most?";
      }
      
      setChatHistory(prev => [...prev, { user: false, text: response }]);
    }, 1000);
    
    setMessage('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-prime-dark/70 backdrop-blur-sm p-4">
      <div className="bg-prime-light rounded-lg w-full max-w-md h-[600px] max-h-[80vh] flex flex-col shadow-xl animate-scale-in">
        <div className="py-3 px-4 border-b border-gray-800 flex justify-between items-center">
          <h3 className="font-medium text-white">PrimeVision Assistant</h3>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 w-8 p-0 text-gray-400 hover:text-white" 
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {chatHistory.map((chat, index) => (
            <div 
              key={index} 
              className={`flex ${chat.user ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  chat.user 
                    ? 'bg-prime-accent text-prime-dark' 
                    : 'bg-prime-dark/50 text-gray-200'
                }`}
              >
                {chat.text}
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t border-gray-800">
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask for recommendations..."
              className="flex-1 bg-prime-dark rounded-lg px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-prime-accent"
            />
            <Button 
              className="bg-prime-accent hover:bg-prime-accent/90 text-prime-dark" 
              size="icon"
              onClick={handleSendMessage}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
