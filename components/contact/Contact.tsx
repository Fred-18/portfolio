import styles from "../contact/Contact.module.css";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      {/* TITLE */}
      <div className={styles.contact__title}>Let's Connect there</div>

      <section className={styles.contact__section}>
        {/* LEFT SIDE */}
        <article className={styles.contact__name__and__icon__section}>
          <p className={styles.contact__name}>
            Feel free to connect with me on these platforms, or contact me
            <br />
            directly via email or phone.
          </p>

          <div className={styles.contact__icon__and__text}>
            {/* GITHUB */}
            <div className={styles.contact__icon__and__text__group}>
              <a
                href="https://github.com/Fred-18"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={styles.contact__icons}
                  src="/assets/icons/github.png"
                  alt="github icon"
                  width={70}
                  height={70}
                />
              </a>
            </div>

            {/* LINKEDIN */}
            <div className={styles.contact__icon__and__text__group}>
              <a
                href="https://www.linkedin.com/in/fred-nobre-software-developer-fullstack-cdi-paris/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={styles.contact__icons}
                  src="/assets/icons/linkedin.png"
                  alt="linkedin icon"
                  width={70}
                  height={70}
                />
              </a>
            </div>
          </div>
        </article>

        {/* SEPARATOR */}
        <div className={styles.contact__separation} aria-hidden="true"></div>

        {/* RIGHT SIDE */}
        <article className={styles.contact__email__and__phone__section}>
          <div className={styles.contact__email__and__phone__group}>
            {/* EMAIL */}
            <a
              href="mailto:fred.nobre@gmail.com"
              className={styles.contact__text__mail}
            >
              GMAIL: fred.nobre@gmail.com
            </a>

            {/* PHONE */}
            <a href="tel:0617548782" className={styles.contact__text__phone}>
              Tel: 06 17 54 87 82
            </a>
          </div>
        </article>
      </section>
    </>
  );
}
