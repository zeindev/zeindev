import styles from "../styles/Projects.module.scss";
import Markdown from "markdown-to-jsx";
import { formatDate } from "../shared/utils";
import cn from "classnames";

function Projects({ items }) {
  return (
    <section className={styles.projects}>
      <h1 className={styles.title}>Personal Projects</h1>
      {items.map((item, i) => (
        <section className={styles["item-container"]} key={i}>
          <section className={cn(styles['sub-item-container'], styles['space-between'])}>
            <h3 className={styles.item}>{item.title}</h3>
          </section>
          <section className={styles['sub-item-container']}>
            <Markdown className={styles.tasks}>{item.tasks}</Markdown>
          </section>
        </section>
      ))}
    </section>
  );
}

export default Projects;
