import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
export default function Header() {
  return (
    <>
      <Head>
        <title>Trekkie</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <title>Trekkie</title>
      </Head>
      <header className={styles.header}>
        <a href="http://localhost:3000" className={styles.title}>
          Trekkie
        </a>
        <div className={styles.description}>Esportes ao ar livre</div>
        <nav className={styles.nav}>
          <ul className={styles.navlist}>
            <li className={styles["nav-bar-option"]}>Sobre nós</li>
            <li className={styles["nav-bar-option"]}>Dúvidas</li>
            <li className={styles["nav-bar-option"]}>Suporte</li>
          </ul>
        </nav>

        <div className={styles["user-area"]}>
          <Link
            className={`${styles["user-button"]} ${styles["user-button-sign"]}`}
            href="sigin"
          >
            sign in
          </Link>
          <button
            className={`${styles["user-button"]} ${styles["user-button-log"]}`}
          >
            sign up
          </button>
        </div>
      </header>
    </>
  );
}
