import styles from "../styles/Links.module.scss";
import Link from "next/link";
import { Github, LinkedinSquare } from "@styled-icons/boxicons-logos";
import { useState } from "react";
import { withRouter } from "next/router";

function Links({router}) {
  const [key, setKey] = useState("");
  const handleChange = (e) => {
    setKey(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/resumev2?key=${key}`);
  };
  return (
    <section className={styles.links}>
      <h3 className={styles.title}></h3>
        <h3 className={styles.item}>Resume</h3>
      <form className={styles.form}>
        <fieldset className={styles["form-item"]}>
          <label className={styles.label} htmlFor="name">
            Key:
          </label>
          <input
            className={styles.input}
            name="access-key"
            onChange={handleChange}
            value={key}
          />
        </fieldset>
        <button className={styles.button} type="submit" onClick={handleClick}>
          go
        </button>
      </form>
      <ul className={styles["item-container"]}>
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
    </section>
  );
}

export default withRouter(Links);
