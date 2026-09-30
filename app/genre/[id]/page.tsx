import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GenreNav } from "@/components/genre-nav";
import { Hero } from "@/components/hero";
import { MovieGrid } from "@/components/movie-grid";
import { parseId } from "@/lib/format";
import { tmdb } from "@/lib/tmdb";

interface GenrePageProps {
  params: Promise<{ id: string }>;
}

async function findGenre(id: string) {
  const genreId = parseId(id);
  if (genreId === null) return null;

  const genres = await tmdb.getGenres();
  const genre = genres.find((item) => item.id === genreId);

  return genre ? { genre, genres } : null;
}

export async function generateMetadata({ params }: GenrePageProps): Promise<Metadata> {
  const result = await findGenre((await params).id);
  return { title: result ? `${result.genre.name} Movies` : "Genre not found" };
}

export default async function GenrePage({ params }: GenrePageProps) {
  const result = await findGenre((await params).id);
  if (!result) notFound();

  const { genre, genres } = result;
  const movies = await tmdb.getMoviesByGenre(genre.id);
  const [featuredMovie] = movies;

  return (
    <>
      {featuredMovie && <Hero movie={featuredMovie} />}
      <div className="container content">
        <GenreNav genres={genres} activeGenreId={genre.id} />
        <MovieGrid id="genre" title={`${genre.name} Movies`} movies={movies} />
      </div>
    </>
  );
}
