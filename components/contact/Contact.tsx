import styles from "../contact/Contact.module.css";
export default function Contact() {
  return (
    <>
      <div className={styles.contact__container}>baababa</div>;
      <section className={styles.contact__section}>
        <article className={styles.contact__name__and__icon__section}>
          <p>fredNobre</p>
          <img
            className={styles.contact__icons}
            src="./assets/icons/courrier.png"
            alt="courrier icon"
          />
          <img
            className={styles.contact__icons}
            src="./assets/icons/github.png"
            alt="courrier icon"
          />
          <img
            className={styles.contact__icons}
            src="./assets/icons/linkedin.png"
            alt="courrier icon"
          />
        </article>
        <article className={styles.contact__name__and__icon__section}>
          <p>fredNobre</p>
          <img
            className={styles.contact__icons}
            src="./assets/icons/courrier.png"
            alt="courrier icon"
          />
          <img
            className={styles.contact__icons}
            src="./assets/icons/github.png"
            alt="courrier icon"
          />
          <img
            className={styles.contact__icons}
            src="./assets/icons/linkedin.png"
            alt="courrier icon"
          />
        </article>
      </section>
    </>
  );
}
