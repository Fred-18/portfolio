import styles from "../certificationItem/CertificationItems.module.css";
import { iCertificate } from "../../interface/iCertificate";

export default function CertificationItems({
  title,
  date,
  school,
  image
}: iCertificate) {
  return (
    <>
      <article className={styles.certificate__container}>
        <h4 className={styles.certificate__card__title}>{title}</h4>
        <time className={styles.certificate__card__date}>{date}</time>
        <span className={styles.certificate__card__school}>{school}</span>
        <img
          src={image}
          alt="Certification"
          className={styles.certificate__card__image}
        />
      </article>
    </>
  );
}
