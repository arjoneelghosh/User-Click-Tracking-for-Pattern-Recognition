
import React from 'react';
import { Button } from './ui/button';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden w-full h-[500px]">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-prime-dark via-prime/90 to-transparent"
        style={{ 
          backgroundImage: `url('https://m.media-amazon.com/images/G/01/digital/video/sonata/hero/superhero.jpg')`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          filter: 'brightness(0.5)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-prime via-prime/50 to-transparent" />
      
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight">
            Discover your next <span className="text-prime-accent">favorite</span> with AI
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
            Personalized recommendations powered by intelligent algorithms that understand your unique taste
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-prime-accent hover:bg-prime-accent/90 text-prime-dark font-medium" 
              size="lg"
            >
              Browse Now
            </Button>
            <Button 
              variant="outline" 
              className="border-white/40 text-white hover:bg-white/10" 
              size="lg"
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
