import styles from "../styles/Experience.module.scss";
import Markdown from "markdown-to-jsx";
import { formatDate } from "../shared/utils";
import cn from "classnames";

function Experience({ items }) {
  return (
    <section className={styles.experience}>
      <h1 className={styles.title}>Experience</h1>
      {items.map((item, i) => (
        <section className={styles["item-container"]} key={i}>
          <section className={cn(styles['sub-item-container'], styles['space-between'])}>
            <h3 className={styles.item}>{item.position}</h3>
            <h3 className={styles.item}>
              {formatDate(item.startDate) +
                " - " +
                (item.endDate ? formatDate(item.endDate) : "Current")}
            </h3>
          </section>
          <section className={cn(styles['sub-item-container'], styles['left'])}>
            <h3 className={styles.item}>{item.employer + ","}</h3>
            <h3 className={styles.item}>{item.location}</h3>
          </section>
          <section className={styles['sub-item-container']}>
            <Markdown className={styles.tasks}>{item.tasks}</Markdown>
          </section>
        </section>
      ))}
    </section>
  );
}

export default Experience;
