import styles from "../styles/Skills.module.scss";

function Skills({items}) {
  return (
    <section className={styles.skills}>
      <h1 className={styles.title}>Skills</h1>
      <ul className={styles['item-container']}>
        {items.map((item, i) => <li className={styles.item} key={i}>{item.description}</li>)}
      </ul>
    </section>
  );
}

export default Skills;
