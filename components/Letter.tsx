import MarkDown from "markdown-to-jsx";
import styles from "../styles/Letter.module.scss";
import { processAddress, formatLetterDate } from "../shared/utils";

function Letter({ letter }) {
  const addressLines = processAddress(letter.employerAddress);
  const address = addressLines.map((line, i) => {
    return <p key={i}>{line}</p>;
  });
  const greeting = letter.recruiterPosition
    ? `Dear ${letter.recruiterName}, ${letter.recruiterPosition},`
    : `Dear ${letter.recruiterName},`;
  return (
    <article className={styles.letter}>
      <div className={styles.date}>
        {formatLetterDate(letter.coverLetterDate)}
      </div>
      <div className={styles.address}>{address}</div>
      <div className={styles.title}>{letter.coverLetterTitle}</div>
      <div className={styles.greeting}>{greeting}</div>
      <MarkDown className={styles.paragraphs}>{letter.coverLetter}</MarkDown>
      <div className={styles.signature}>
        <p>Sincerely, </p>
        <div className={styles["signature-area"]} />
        <p>{letter.name}</p>
        <p>Enclosure: Resume (2 pages)</p>
      </div>
    </article>
  );
}

export default Letter;