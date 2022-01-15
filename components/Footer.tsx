import styles from "../styles/Footer.module.scss";
import { Leaf } from "styled-icons/entypo";

function Footer() {
  return (
    <section className={styles.footer}>
      <section className={styles['item-container']}>
        <div className={styles.item}>
          <Leaf className={styles.leaf}/>
        </div>
        <div className={styles.item}>Built with Nextjs and Contentful</div>
      </section>
    </section>
  );
}

export default Footer;
