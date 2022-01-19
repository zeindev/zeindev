import { withRouter } from "next/router";
import styles from "../styles/Target.module.scss";

function Target({ target, router }) {
  return (
    <section className={styles.target}>
      <div className={styles.item}>
        {target} key: {router.query.key}
      </div>
    </section>
  );
}

export default withRouter(Target);
