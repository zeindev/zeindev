import styles from "../styles/Hobbies.module.scss";

function Hobbies({hobbies}) {
  return (
    <section className={styles.hobbies}>
      <h1 className={styles.title}>Interests and Hobbies</h1>
      <section className={styles['item-container']}>
          <p className={styles.item}>{hobbies}</p>
      </section>
    </section>
  );
}

export default Hobbies;
