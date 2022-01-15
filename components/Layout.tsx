import Head from "next/head";
import Footer from "../components/Footer";
import styles from "../styles/Layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Head>
      <link href="http://fonts.cdnfonts.com/css/sofia-pro" rel="stylesheet"/>
      </Head>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
