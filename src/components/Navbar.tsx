import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 bg-prime/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-prime-accent rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>
              </svg>
            </div>
            <span className="text-white font-bold text-2xl">Mock Recommendation Engine</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;