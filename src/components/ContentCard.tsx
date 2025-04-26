
import React from 'react';

export interface Content {
  id: string;
  title: string;
  imageUrl: string;
  genre: string;
  rating: number;
  year: number;
}

interface ContentCardProps {
  content: Content;
  onClick: (content: Content) => void;
}

const ContentCard: React.FC<ContentCardProps> = ({ content, onClick }) => {
  return (
    <div 
      className="card-hover relative overflow-hidden rounded-md"
      onClick={() => onClick(content)}
    >
      <div className="aspect-[2/3] relative">
        <img 
          src={content.imageUrl} 
          alt={content.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-prime-dark/90 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 w-full p-3">
            <div className="flex justify-between items-center mb-1">
              <span className="text-prime-accent font-medium text-sm">{content.rating}/10</span>
              <span className="text-gray-300 text-sm">{content.year}</span>
            </div>
            <h3 className="font-medium text-white leading-tight">{content.title}</h3>
            <span className="text-xs text-gray-300">{content.genre}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
