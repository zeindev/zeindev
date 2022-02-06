import Head from "next/head";
import styles from "../styles/Layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Head>
        <link
          href="https://fonts.cdnfonts.com/css/sofia-pro"
          rel="stylesheet"
        />
      </Head>
      <main>
        <div className={styles.bg}/>
        {children}
      </main>
    </div>
  );
}
