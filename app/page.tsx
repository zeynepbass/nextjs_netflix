import { GenreNav } from "@/components/genre-nav";
import { Hero } from "@/components/hero";
import { MovieGrid } from "@/components/movie-grid";
import { tmdb } from "@/lib/tmdb";

const SECTION_LIMIT = 12;

export default async function HomePage() {
  const [genres, popularMovies, topRatedMovies] = await Promise.all([
    tmdb.getGenres(),
    tmdb.getPopularMovies(),
    tmdb.getTopRatedMovies(),
  ]);

  const [featuredMovie] = popularMovies;

  return (
    <>
      {featuredMovie && <Hero movie={featuredMovie} />}
      <div className="container content">
        <GenreNav genres={genres} />
        <MovieGrid id="popular" title="Popular on Netfilms" movies={popularMovies.slice(0, SECTION_LIMIT)} />
        <MovieGrid id="top-rated" title="Top Rated" movies={topRatedMovies.slice(0, SECTION_LIMIT)} />
      </div>
    </>
  );
}
