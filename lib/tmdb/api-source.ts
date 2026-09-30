import type { Genre, Movie, MovieDetails, MovieSource } from "./types";

const API_URL = "https://api.themoviedb.org/3";
const REVALIDATE_SECONDS = 60 * 60;

interface PaginatedResponse<T> {
  results: T[];
}

export function createApiSource(apiKey: string): MovieSource {
  async function request<T>(path: string, params: Record<string, string> = {}): Promise<T | null> {
    const url = new URL(`${API_URL}${path}`);
    url.search = new URLSearchParams({ api_key: apiKey, ...params }).toString();

    const response = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } });

    if (response.status === 404) return null;
    if (!response.ok) throw new Error(`TMDB request to ${path} failed with status ${response.status}`);

    return response.json() as Promise<T>;
  }

  async function list(path: string, params?: Record<string, string>) {
    const data = await request<PaginatedResponse<Movie>>(path, params);
    return data?.results ?? [];
  }

  return {
    async getGenres() {
      const data = await request<{ genres: Genre[] }>("/genre/movie/list");
      return data?.genres ?? [];
    },
    getPopularMovies: () => list("/movie/popular"),
    getTopRatedMovies: () => list("/movie/top_rated"),
    getMoviesByGenre: (genreId) =>
      list("/discover/movie", { with_genres: String(genreId), sort_by: "popularity.desc" }),
    getMovie: (movieId) => request<MovieDetails>(`/movie/${movieId}`),
  };
}
