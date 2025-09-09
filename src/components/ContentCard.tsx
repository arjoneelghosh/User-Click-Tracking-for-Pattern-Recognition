
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
      className="card-hover relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800"
      onClick={() => onClick(content)}
    >
      <div className="aspect-[2/3] relative">
        <img 
          src={content.imageUrl} 
          alt={content.title} 
          className="w-full h-full object-cover rounded-t-lg"
        />
        <div className="absolute top-2 right-2">
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">Watched</span>
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-bold text-white text-sm mb-2 leading-tight">{content.title}</h3>
        <div className="flex items-center space-x-2 text-xs text-gray-400 mb-2">
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400">★</span>
            <span>{content.rating}</span>
          </div>
          <span>📅</span>
          <span>{content.year}</span>
        </div>
        <div className="text-xs text-gray-500 mb-2">
          <div>👤 Director Name</div>
          <div>🎬 Actor Name</div>
        </div>
        <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded">{content.genre}</span>
      </div>
    </div>
  );
};

export default ContentCard;
