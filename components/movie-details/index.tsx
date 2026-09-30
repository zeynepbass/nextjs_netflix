import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

import { Backdrop } from "@/components/backdrop";
import { MovieMeta } from "@/components/movie-meta";
import type { MovieDetails as MovieDetailsType } from "@/lib/tmdb";
import { tmdbImage } from "@/lib/tmdb/image";

import styles from "./styles.module.css";

export function MovieDetails({ movie }: { movie: MovieDetailsType }) {
  return (
    <article className={styles.details}>
      <Backdrop path={movie.backdrop_path} />
      <div className={`container ${styles.layout}`}>
        <div className={styles.poster}>
          {movie.poster_path && (
            <Image
              src={tmdbImage(movie.poster_path, "w780")}
              alt={`${movie.title} poster`}
              fill
              preload
              sizes="(min-width: 48rem) 320px, 60vw"
            />
          )}
        </div>
        <div className={styles.body}>
          <h1 className={styles.title}>{movie.title}</h1>
          {movie.tagline && <p className={styles.tagline}>{movie.tagline}</p>}
          <MovieMeta
            releaseDate={movie.release_date}
            voteAverage={movie.vote_average}
            runtime={movie.runtime}
          />
          {movie.genres.length > 0 && (
            <ul className={styles.genres} aria-label="Genres">
              {movie.genres.map((genre) => (
                <li key={genre.id}>
                  <Link href={`/genre/${genre.id}`} className="chip">
                    {genre.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {movie.overview && <p className={styles.overview}>{movie.overview}</p>}
          <Link href="/" className="button button-secondary">
            <FaArrowLeft aria-hidden />
            Back to Browse
          </Link>
        </div>
      </div>
    </article>
  );
}

export function MovieDetailsSkeleton() {
  return (
    <div className={styles.details} aria-busy>
      <div className={`container ${styles.layout}`}>
        <div className={`skeleton ${styles.poster}`} />
        <div className={styles.body}>
          <div className={`skeleton ${styles.titleSkeleton}`} />
          <div className={`skeleton ${styles.lineSkeleton}`} />
          <div className={`skeleton ${styles.lineSkeleton}`} />
          <div className={`skeleton ${styles.lineSkeleton}`} />
        </div>
      </div>
    </div>
  );
}
