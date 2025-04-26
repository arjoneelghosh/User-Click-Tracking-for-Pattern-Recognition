
import React from 'react';
import ContentCard, { Content } from './ContentCard';

interface ContentGridProps {
  contents: Content[];
  onContentSelect: (content: Content) => void;
}

const ContentGrid: React.FC<ContentGridProps> = ({ contents, onContentSelect }) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-xl font-semibold mb-4">Recommended For You</h2>
      {contents.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {contents.map((content) => (
            <ContentCard key={content.id} content={content} onClick={onContentSelect} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center py-16 text-gray-400 bg-prime-light/20 rounded-lg">
          <p>No recommendations found. Try a different genre.</p>
        </div>
      )}
    </div>
  );
};

export default ContentGrid;
