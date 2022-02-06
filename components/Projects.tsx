import styles from "../styles/Projects.module.scss";
import Markdown from "markdown-to-jsx";
import ShowcaseSlide from "../components/ShowcaseSlide";
import cn from "classnames";
import { useState } from 'react';

const Collapse = ({ collapsed, item }) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);
  return (
    <>
      <button
        className="collapse-button"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? 'Show' : 'Hide'} content
      </button>
      <div
        className={cn(styles['collapse-content'], styles[`${isCollapsed ? 'collapsed' : 'expanded'}`] )}
        aria-expanded={isCollapsed}
      >
        <ShowcaseSlide slideshow={item.slideshow}/>
      </div>
    </>
  );
};

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
          {item.slideshow && <Collapse collapsed item={item}></Collapse> }
        </section>
      ))}
    </section>
  );
}

export default Projects;
