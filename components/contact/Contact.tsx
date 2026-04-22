import { contactContent } from "@/content/contactContent";
import styles from "../contact/Contact.module.css";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <div className={styles.contact__title}>
        {contactContent.Contact.contactTitle}
      </div>

      <section className={styles.contact__section}>
        <article className={styles.contact__information__and__icone__section}>
          <p className={styles.contact__information}>
            {contactContent.Contact.contactInformation}
          </p>

          <div className={styles.contact__icon__and__text}>
            <div className={styles.contact__icon__and__text__group}>
              <a
                href={contactContent.Contact.contactGithub}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={styles.contact__icons__desing}
                  src="/assets/icons/github.png"
                  alt="github icon"
                  width={70}
                  height={70}
                />
              </a>
            </div>

            <div className={styles.contact__icon__and__text__group}>
              <a
                href={contactContent.Contact.contactLinkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={styles.contact__icons__desing}
                  src="/assets/icons/linkedin.png"
                  alt="linkedin icon"
                  width={70}
                  height={70}
                />
              </a>
            </div>
            <div className={styles.contact__icon__and__text__group}>
              <a
                href={contactContent.Contact.contactEmail}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={styles.contact__icons__desing}
                  src="/assets/icons/courrier.png"
                  alt="mail icon"
                  width={70}
                  height={70}
                />
              </a>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

/* TODO:
   4 Ajouter la section copyright 
   6 Ajouter mes etapes récente dans ma biographie(voir gpt si nécessaire)
   7 Retravailer la navbar
   8 Retrouver le moyen de remtre mon icone de tortue \
   9 Refacto le code css  

/* © 2025 Fred Nobre. All rights reserved.  
This portfolio and its contents are the intellectual property of Fred Nobre.  
Do not reproduce without permission.
 */
