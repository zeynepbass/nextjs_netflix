import { FaStar } from "react-icons/fa";

import { formatRating, formatRuntime, releaseYear } from "@/lib/format";

import styles from "./styles.module.css";

interface MovieMetaProps {
  releaseDate: string;
  voteAverage: number;
  runtime?: number | null;
  size?: "sm" | "md";
}

export function MovieMeta({ releaseDate, voteAverage, runtime = null, size = "md" }: MovieMetaProps) {
  const year = releaseYear(releaseDate);
  const rating = formatRating(voteAverage);
  const duration = formatRuntime(runtime);

  return (
    <ul className={`${styles.meta} ${styles[size]}`}>
      {rating && (
        <li className={styles.rating}>
          <FaStar aria-hidden />
          <span>
            {rating}
            <span className={styles.srOnly}> out of 10</span>
          </span>
        </li>
      )}
      {year && <li>{year}</li>}
      {duration && <li>{duration}</li>}
    </ul>
  );
}
