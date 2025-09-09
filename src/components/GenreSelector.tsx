
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

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
    <div className="container mx-auto px-4 py-6 border-b border-gray-800">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">All Movies</h2>
          <p className="text-gray-400">150 movies</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-400">Genre:</span>
          <Select value={selectedGenre} onValueChange={onGenreSelect}>
            <SelectTrigger className="w-32 bg-prime-light border-gray-700 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-prime-light border-gray-700">
              {genres.map((genre) => (
                <SelectItem key={genre} value={genre} className="text-white hover:bg-gray-700">
                  {genre}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default GenreSelector;
