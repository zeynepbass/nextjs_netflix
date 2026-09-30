import Link from "next/link";
import { FaInfoCircle } from "react-icons/fa";

import { Backdrop } from "@/components/backdrop";
import { MovieMeta } from "@/components/movie-meta";
import type { Movie } from "@/lib/tmdb";

import styles from "./styles.module.css";

export function Hero({ movie }: { movie: Movie }) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Backdrop path={movie.backdrop_path} />
      <div className={`container ${styles.content}`}>
        <h1 id="hero-title" className={styles.title}>
          {movie.title}
        </h1>
        <MovieMeta releaseDate={movie.release_date} voteAverage={movie.vote_average} />
        <p className={styles.overview}>{movie.overview}</p>
        <Link href={`/movie/${movie.id}`} className={`button button-primary ${styles.cta}`}>
          <FaInfoCircle aria-hidden />
          More Info
        </Link>
      </div>
    </section>
  );
}

export function HeroSkeleton() {
  return (
    <section className={styles.hero} aria-busy>
      <div className={`container ${styles.content}`}>
        <div className={`skeleton ${styles.titleSkeleton}`} />
        <div className={`skeleton ${styles.lineSkeleton}`} />
        <div className={`skeleton ${styles.lineSkeleton}`} />
        <div className={`skeleton ${styles.ctaSkeleton}`} />
      </div>
    </section>
  );
}
