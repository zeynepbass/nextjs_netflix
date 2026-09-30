import Image from "next/image";
import Link from "next/link";

import { MovieMeta } from "@/components/movie-meta";
import type { Movie } from "@/lib/tmdb";
import { tmdbImage } from "@/lib/tmdb/image";

import styles from "./styles.module.css";

const POSTER_SIZES = "(min-width: 90rem) 200px, (min-width: 48rem) 22vw, 45vw";

export function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link href={`/movie/${movie.id}`} className={styles.card}>
      <div className={styles.poster}>
        {movie.poster_path ? (
          <Image src={tmdbImage(movie.poster_path, "w500")} alt="" fill sizes={POSTER_SIZES} />
        ) : (
          <span className={styles.fallback} aria-hidden>
            {movie.title}
          </span>
        )}
      </div>
      <h3 className={styles.title}>{movie.title}</h3>
      <MovieMeta releaseDate={movie.release_date} voteAverage={movie.vote_average} size="sm" />
    </Link>
  );
}

export function MovieCardSkeleton() {
  return (
    <div className={styles.card} aria-hidden>
      <div className={`skeleton ${styles.poster}`} />
      <div className={`skeleton ${styles.titleSkeleton}`} />
    </div>
  );
}
