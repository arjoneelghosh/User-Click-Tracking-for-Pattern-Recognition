import React from 'react';

const Navbar: React.FC = () => {
  const categories = [
    "Home",
    "Movies",
    "TV Shows",
    "Categories",
    "My List"
  ];

  return (
    <div className="sticky top-0 z-50 bg-prime-dark/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-prime-accent font-bold text-2xl">PrimeVision</span>
            <span className="text-xs bg-prime-accent text-prime-dark px-1 rounded">AI</span>
          </div>
          
          <div className="hidden md:flex space-x-6">
            {categories.map((category) => (
              <button 
                key={category} 
                className="text-gray-300 hover:text-prime-accent font-medium transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;