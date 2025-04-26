
import React from 'react';

interface GenreSelectorProps {
  selectedGenre: string;
  onGenreSelect: (genre: string) => void;
}

const GenreSelector: React.FC<GenreSelectorProps> = ({ selectedGenre, onGenreSelect }) => {
  const genres = [
    "All",
    "Action",
    "Comedy",
    "Drama",
    "Sci-Fi",
    "Thriller",
    "Romance",
    "Horror",
    "Documentary"
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-xl font-semibold mb-4">Browse by Genre</h2>
      <div className="flex gap-2 pb-2 overflow-x-auto scrollbar-none">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => onGenreSelect(genre)}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
              selectedGenre === genre
                ? "bg-prime-accent text-prime-dark font-medium"
                : "bg-prime-light/50 hover:bg-prime-light text-gray-300"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreSelector;
