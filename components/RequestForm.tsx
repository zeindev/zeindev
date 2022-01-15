import styles from "../styles/RequestForm.module.scss";

function RequestForm() {
  return (
    <section className={styles["request-form"]}>
      <h1 className={styles.title}>Valid Access Key Required</h1>
      <h3 className={styles.subtitle}>Request a key</h3>
      <form
        className={styles.form}
        name="Key Request"
        method="POST"
        action="success"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="Key Request" />
        <fieldset className={styles["form-item"]}>
          <label className={styles.label}>Name:</label>
          <input className={styles.input} type="text" name="name" />
        </fieldset>
        <fieldset className={styles["form-item"]}>
          <label className={styles.label}>Email:</label>
          <input className={styles.input} type="email" name="email" />
        </fieldset>
        <fieldset className={styles["form-item"]}>
          <label className={styles.label}>Message:</label>
          <textarea className={styles.textarea} name="message" />
        </fieldset>
        <button className={styles.button} type="submit">
          Send Request
        </button>
      </form>
    </section>
  );
}

export default RequestForm;
