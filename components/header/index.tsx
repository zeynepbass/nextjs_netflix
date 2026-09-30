import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";

import styles from "./styles.module.css";

const NAV_LINKS = [
  { href: "/#popular", label: "Popular" },
  { href: "/#top-rated", label: "Top Rated" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <FaPlayCircle aria-hidden />
          <span>NETFILMS</span>
        </Link>
        <nav aria-label="Main">
          <ul className={styles.links}>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={styles.link}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
