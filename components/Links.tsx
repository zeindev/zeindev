import styles from "../styles/Links.module.scss";
import Link from "next/link";
import { Github, LinkedinSquare } from "@styled-icons/boxicons-logos";
import { useState } from "react";
import { withRouter } from "next/router";

function Links({ router }) {
  const [key, setKey] = useState("");
  const handleChange = (e) => {
    setKey(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/resumev2?key=${key}`);
  };
  return (
    <ul className={styles.links}>
      <li className={styles.item}>
        <Link href="https://linkedin.com/in/oussama-el-zein" passHref>
          <a>
            <LinkedinSquare className={styles.github} />
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

export default withRouter(Links);
