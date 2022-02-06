import styles from "../styles/Links.module.scss";
import Link from "next/link";
import { Github, LinkedinSquare } from "@styled-icons/boxicons-logos";

function Links() {
  return (
    <ul className={styles.links}>
      <li className={styles.item}>
        <Link href="https://linkedin.com/in/oussama-el-zein" passHref>
          <a>
            <LinkedinSquare className={styles.linkedin} />
          </a>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="https://github.com/zeindev" passHref>
          <a>
            <Github className={styles.github} />
          </a>
        </Link>
      </li>
    </ul>
  );
}

export default Links;
