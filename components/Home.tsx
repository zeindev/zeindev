import styles from "../styles/Home.module.scss";
import Links from "../components/Links";
import ResumeAccess from "../components/ResumeAccess";
import Footer from "../components/Footer";
function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.header}>
        <h1 className={styles.name}>Oussama El Zein</h1>
        <Links />
      </div>
      <div className={styles["item-container"]}>
        <h3 className={styles.item}>Welcome</h3>
        <img className={styles.image} src="/images/oussama.jpg" alt="Oussama" />
      </div>
      <ResumeAccess />
      <Footer />
    </section>
  );
}

export default Home;
