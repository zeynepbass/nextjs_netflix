import Link from "next/link";

import type { Genre } from "@/lib/tmdb";

import styles from "./styles.module.css";

interface GenreNavProps {
  genres: Genre[];
  activeGenreId?: number;
}

export function GenreNav({ genres, activeGenreId }: GenreNavProps) {
  const items = [{ href: "/", label: "All", active: activeGenreId === undefined }].concat(
    genres.map(({ id, name }) => ({ href: `/genre/${id}`, label: name, active: id === activeGenreId })),
  );

  return (
    <nav aria-label="Genres">
      <ul className={styles.list}>
        {items.map(({ href, label, active }) => (
          <li key={href}>
            <Link href={href} className="chip" aria-current={active ? "page" : undefined}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function GenreNavSkeleton() {
  return (
    <div className={styles.list} aria-hidden>
      {Array.from({ length: 8 }, (_, index) => (
        <div key={index} className={`skeleton ${styles.chipSkeleton}`} />
      ))}
    </div>
  );
}
