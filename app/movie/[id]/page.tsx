import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

import { MovieDetails } from "@/components/movie-details";
import { parseId } from "@/lib/format";
import { tmdb } from "@/lib/tmdb";
import { tmdbImage } from "@/lib/tmdb/image";

interface MoviePageProps {
  params: Promise<{ id: string }>;
}

const getMovie = cache(async (id: string) => {
  const movieId = parseId(id);
  return movieId === null ? null : tmdb.getMovie(movieId);
});

export async function generateMetadata({ params }: MoviePageProps): Promise<Metadata> {
  const movie = await getMovie((await params).id);
  if (!movie) return { title: "Movie not found" };

  return {
    title: movie.title,
    description: movie.overview,
    openGraph: {
      title: movie.title,
      description: movie.overview,
      images: movie.backdrop_path ? [tmdbImage(movie.backdrop_path, "w1280")] : [],
    },
  };
}

export default async function MoviePage({ params }: MoviePageProps) {
  const movie = await getMovie((await params).id);
  if (!movie) notFound();

  return <MovieDetails movie={movie} />;
}
