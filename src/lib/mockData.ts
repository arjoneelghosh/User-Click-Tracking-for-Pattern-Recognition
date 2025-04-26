
import { Content } from '../components/ContentCard';

// Sample movie posters
const moviePosters = [
  'https://m.media-amazon.com/images/M/MV5BZmQ3OTZkNDUtNTU0Mi00ZjE4LTgyNTUtY2E4NWRmNDUxMzkyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDItZjcxYTU4ZTMzMDZmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BNmUxNTlmODgtOTMwMS00MmU3LWE4OTMtY2UxYjE3ZWE1ZGJlXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BNGFmMjY4NGEtY2E1Yi00MTIxLTkwNjQtNDc2MzJlOTU2ZGU4XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BMDA4NjQzN2ItZDhhNC00ZjVlLWFjNTgtMTEyNDQyOGNjMDE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BNTA2YTI0MjAtNzg5OS00Mzg3LWE1NzktZWQwZjQ2ZDY3NDdmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BYTVhN2M3MjgtY2ZiNi00YTNmLWIyMTMtNWQ0ODNkZTI0OGQ1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMDI@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
];

// Sample content data
const mockContents: Content[] = [
  {
    id: '1',
    title: 'The Boys',
    imageUrl: moviePosters[0],
    genre: 'Action',
    rating: 8.7,
    year: 2019,
  },
  {
    id: '2',
    title: 'Good Omens',
    imageUrl: moviePosters[1],
    genre: 'Comedy',
    rating: 8.1,
    year: 2019,
  },
  {
    id: '3',
    title: 'Fallout',
    imageUrl: moviePosters[2],
    genre: 'Sci-Fi',
    rating: 8.5,
    year: 2024,
  },
  {
    id: '4',
    title: 'Upload',
    imageUrl: moviePosters[3],
    genre: 'Comedy',
    rating: 7.9,
    year: 2020,
  },
  {
    id: '5',
    title: 'The Marvelous Mrs. Maisel',
    imageUrl: moviePosters[4],
    genre: 'Comedy',
    rating: 8.7,
    year: 2017,
  },
  {
    id: '6',
    title: 'Rick and Morty',
    imageUrl: moviePosters[5],
    genre: 'Animation',
    rating: 9.2,
    year: 2013,
  },
  {
    id: '7',
    title: 'Game of Thrones',
    imageUrl: moviePosters[6],
    genre: 'Drama',
    rating: 9.2,
    year: 2011,
  },
  {
    id: '8',
    title: 'The Imitation Game',
    imageUrl: moviePosters[7],
    genre: 'Drama',
    rating: 8.0,
    year: 2014,
  },
  {
    id: '9',
    title: 'Breaking Bad',
    imageUrl: moviePosters[8],
    genre: 'Thriller',
    rating: 9.5,
    year: 2008,
  },
  {
    id: '10',
    title: 'Parasite',
    imageUrl: moviePosters[9],
    genre: 'Thriller',
    rating: 8.5,
    year: 2019,
  },
  {
    id: '11',
    title: 'Money Heist',
    imageUrl: moviePosters[10],
    genre: 'Thriller',
    rating: 8.2,
    year: 2017,
  },
  {
    id: '12',
    title: 'The Mandalorian',
    imageUrl: moviePosters[11],
    genre: 'Sci-Fi',
    rating: 8.7,
    year: 2019,
  },
  {
    id: '13',
    title: 'Arrival',
    imageUrl: moviePosters[12],
    genre: 'Sci-Fi',
    rating: 7.9,
    year: 2016,
  },
  {
    id: '14',
    title: 'Gravity',
    imageUrl: moviePosters[13],
    genre: 'Sci-Fi',
    rating: 7.7,
    year: 2013,
  },
  {
    id: '15',
    title: 'Gladiator',
    imageUrl: moviePosters[14],
    genre: 'Action',
    rating: 8.5,
    year: 2000,
  },
  {
    id: '16',
    title: 'Interstellar',
    imageUrl: moviePosters[15],
    genre: 'Sci-Fi',
    rating: 8.7,
    year: 2014,
  },
  {
    id: '17',
    title: 'V for Vendetta',
    imageUrl: moviePosters[16],
    genre: 'Action',
    rating: 8.2,
    year: 2005,
  },
  {
    id: '18',
    title: 'The Social Network',
    imageUrl: moviePosters[17],
    genre: 'Drama',
    rating: 7.8,
    year: 2010,
  },
];

// Simulates filtering content by genre
export const getContentsByGenre = (genre: string): Content[] => {
  if (genre === 'All') return mockContents;
  return mockContents.filter((content) => content.genre === genre);
};

// Simulates getting recommended content based on a selected content
export const getRecommendations = (selectedContent: Content): Content[] => {
  // Simple recommendation algorithm - same genre with different id
  return mockContents
    .filter((content) => content.id !== selectedContent.id)
    .filter((content) => content.genre === selectedContent.genre)
    .slice(0, 6);
};

// Simulates getting recommendation influence data
export const getRecommendationInfluence = (selectedContent: Content) => {
  const relatedContents = mockContents
    .filter((content) => content.id !== selectedContent.id)
    .filter((content) => content.genre === selectedContent.genre)
    .slice(0, 3);
  
  return relatedContents.map((content) => ({
    name: content.title,
    score: Math.floor(70 + Math.random() * 20), // Random score between 70-90
  }));
};

// Simulates getting genre influence data
export const getGenreInfluence = (genre: string) => {
  const genreContents = mockContents
    .filter((content) => content.genre === genre)
    .slice(0, 3);
  
  return genreContents.map((content) => ({
    name: content.title,
    score: Math.floor(70 + Math.random() * 20), // Random score between 70-90
  }));
};
