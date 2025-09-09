import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Discover Movies
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          Click on any movie to get personalized recommendations
        </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-prime-accent hover:bg-prime-accent/90 text-prime-dark font-medium" 
              size="lg"
            >
              Browse Now
            </Button>
            <Button 
              className="bg-prime-accent hover:bg-prime-accent/90 text-prime-dark font-medium" 
              size="lg"
              onClick={handleHowItWorksClick}
            >
              How It Works
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;