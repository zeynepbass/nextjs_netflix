import genresFixture from "./fixtures/genres.json";
import moviesFixture from "./fixtures/movies.json";
import type { Genre, Movie, MovieSource } from "./types";

const genres: Genre[] = genresFixture.genres;
const movies = moviesFixture.results as Movie[];

const byDescending = (key: "popularity" | "vote_average") => (a: Movie, b: Movie) => b[key] - a[key];

export const fixtureSource: MovieSource = {
  getGenres: async () => genres,
  getPopularMovies: async () => [...movies].sort(byDescending("popularity")),
  getTopRatedMovies: async () => [...movies].sort(byDescending("vote_average")),
  getMoviesByGenre: async (genreId) =>
    movies.filter((movie) => movie.genre_ids.includes(genreId)).sort(byDescending("popularity")),
  async getMovie(movieId) {
    const movie = movies.find(({ id }) => id === movieId);
    if (!movie) return null;

    const { genre_ids, ...rest } = movie;
    return {
      ...rest,
      genres: genres.filter(({ id }) => genre_ids.includes(id)),
      runtime: null,
      tagline: null,
    };
  },
};
