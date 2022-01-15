import styles from "../styles/Home.module.scss";
import cn from "classnames";
import Link from "next/link";

function Home() {
  return (
    <section className={styles.home}>
      <h1 className={styles.name}>Oussama El Zein</h1>
      <div className={styles["item-container"]}>
        <h3 className={styles.item}>Welcome</h3>
        <img className={styles.image} src="/images/oussama.jpg" />
      </div>
    </section>
  );
}

export default Home;
