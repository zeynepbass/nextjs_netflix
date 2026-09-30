export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  popularity: number;
  genre_ids: number[];
}

export interface MovieDetails extends Omit<Movie, "genre_ids"> {
  genres: Genre[];
  runtime: number | null;
  tagline: string | null;
}

export interface MovieSource {
  getGenres(): Promise<Genre[]>;
  getPopularMovies(): Promise<Movie[]>;
  getTopRatedMovies(): Promise<Movie[]>;
  getMoviesByGenre(genreId: number): Promise<Movie[]>;
  getMovie(movieId: number): Promise<MovieDetails | null>;
}
