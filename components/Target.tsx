import { withRouter } from "next/router";
import styles from "../styles/Target.module.scss";

function Target({ target, router }) {
  return (
    <section className={styles.target}>
      <div className={styles.item}>
        Built for <span className={styles.bold}>{target}</span> with Nextjs and
        Contentful.
      </div>
      <div className={styles.item}>
        <span className={styles.bold}>
          zein.dev/resume?key={router.query.key}
        </span>
      </div>
    </section>
  );
}

export default withRouter(Target);
