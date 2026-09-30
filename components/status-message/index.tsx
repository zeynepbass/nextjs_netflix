import styles from "./styles.module.css";

interface StatusMessageProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export function StatusMessage({ title, description, children }: StatusMessageProps) {
  return (
    <section className={`container ${styles.status}`}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      {children}
    </section>
  );
}
