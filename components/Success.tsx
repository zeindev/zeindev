import styles from "../styles/Success.module.scss";
import { withRouter } from 'next/router';

function Success({ router }) {
  setTimeout(() => {
    router.push('/');
  }, 4000)
  return (
    <section className={styles.success}>
      <h1 className={styles.title}>Access Key Requested</h1>
      <h3 className={styles.subtitle}>Success</h3>
      <p className={styles.item}>An access key will be sent to your email as soon as this request is processed.</p>
    </section>
  );
}

export default withRouter(Success);
