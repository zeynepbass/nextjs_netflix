import Image from "next/image";

import { tmdbImage } from "@/lib/tmdb/image";

import styles from "./styles.module.css";

interface BackdropProps {
  path: string | null;
}

export function Backdrop({ path }: BackdropProps) {
  return (
    <div className={styles.backdrop} aria-hidden>
      {path && (
        <Image
          src={tmdbImage(path, "w1280")}
          alt=""
          fill
          preload
          sizes="100vw"
          className={styles.image}
        />
      )}
    </div>
  );
}
