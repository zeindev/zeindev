import styles from "../styles/ResumeHeader.module.scss";

export default function ResumeHeader({ resume }) {
  return (
    <section className={styles['resume-header']}>
      <h1 className={styles.name}>{resume.name}</h1>
      <section className={styles['section-container']}>
        <h3 className={styles.subtitle}>{resume.position}</h3>
        <section className={styles['item-container']}>
          <h3 className={styles.item}>{resume.phone}</h3>
          <h3 className={styles.item}>{`${resume.city} ${resume.province}`}</h3>
          <h3 className={styles.item}>{resume.website}</h3>
          <h3 className={styles.item}>{resume.email}</h3>
        </section>
      </section>
    </section>
  )
}

