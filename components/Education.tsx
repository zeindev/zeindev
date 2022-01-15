import styles from '../styles/Education.module.scss';
import cn from 'classnames';
function Education({ items }) {
  return (
    <section className={styles.education}>
      <h1 className={styles.title}>Education</h1>
      {items.map((item, i) => (
        <section className={styles['item-container']} key={i}>
          <section className={cn(styles['item-container'], styles['space-between'])}>
            <h3 className={styles.item}>{item.title}</h3>
            <h3 className={styles.item}>{item.startYear + ' - ' + item.endYear}</h3>
          </section>
          <section className={cn(styles['item-container'], styles['left'])}>
            <h3 className={styles.item}>{item.institution + ','}</h3>
            <h3 className={styles.item}>{item.location}</h3>
          </section>
        </section>
      ))}
    </section>
  );
}

export default Education;
