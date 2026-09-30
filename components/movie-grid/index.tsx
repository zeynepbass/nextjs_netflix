import { MovieCard, MovieCardSkeleton } from "@/components/movie-card";
import type { Movie } from "@/lib/tmdb";

import styles from "./styles.module.css";

interface MovieGridProps {
  id: string;
  title: string;
  movies: Movie[];
}

export function MovieGrid({ id, title, movies }: MovieGridProps) {
  const headingId = `${id}-title`;

  return (
    <section id={id} className={styles.section} aria-labelledby={headingId}>
      <h2 id={headingId} className={styles.title}>
        {title}
      </h2>
      {movies.length > 0 ? (
        <ul className={styles.grid}>
          {movies.map((movie) => (
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.empty}>No movies to show here yet.</p>
      )}
    </section>
  );
}

export function MovieGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className={styles.section} aria-hidden>
      <div className={`skeleton ${styles.titleSkeleton}`} />
      <div className={styles.grid}>
        {Array.from({ length: count }, (_, index) => (
          <MovieCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
