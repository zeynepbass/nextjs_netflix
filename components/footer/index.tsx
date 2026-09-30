import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>&copy; {new Date().getFullYear()} Netfilms</p>
        <p>
          Movie data and images provided by{" "}
          <a href="https://www.themoviedb.org" target="_blank" rel="noreferrer">
            TMDB
          </a>
          . This product is not endorsed or certified by TMDB.
        </p>
      </div>
    </footer>
  );
}
