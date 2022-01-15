import Head from "next/head";
import Footer from "../components/Footer";
import styles from "../styles/Layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Head>
        <style>@import url('http://fonts.cdnfonts.com/css/sofia-pro');</style>
      </Head>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
