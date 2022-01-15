import styles from "../styles/Summary.module.scss";

function Summary({summary}) {
  return (
    <section className={styles.summary}>
      <h1 className={styles.title}>Summary</h1>
      <section className={styles['item-container']}>
          <p className={styles.item}>{summary}</p>
      </section>
    </section>
  );
}

export default Summary;
