import styles from "../styles/ResumeAccess.module.scss";
import { useState } from "react";
import { withRouter } from "next/router";

function ResumeAccess({router}) {
  const [key, setKey] = useState("");
  const handleChange = (e) => {
    setKey(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/resume?key=${key}`);
  };
  return (
    <section className={styles.links}>
      <h3 className={styles.title}></h3>
        <h3 className={styles.subtitle}>Resume</h3>
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
    </section>
  );
}

export default withRouter(ResumeAccess);
