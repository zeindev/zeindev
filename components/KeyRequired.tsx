import styles from "../styles/KeyRequired.module.scss";
import Link from "next/link";

function KeyRequired() {
  return (
    <section className={styles['key-required']}>
      <h1 className={styles.title}>Access Key Required</h1>
      <h3 className={styles.subtitle}>Error</h3>
      <section className={styles['item-container']}>
        <Link href="/request">
          <button className={styles.button}>Request an access key</button>
        </Link>
      </section>
    </section>
  );
}

export default KeyRequired;
