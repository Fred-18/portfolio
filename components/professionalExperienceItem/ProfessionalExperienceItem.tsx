import styles from "./professionalExperienceItem.module.css";
import { IProfessionalExperience } from "@/interface/iProfessionalExperience";

export default function ProfessionalExperienceItem({
  companyName,
  dates,
  missions
}: IProfessionalExperience) {
  return (
    <>
      <article className={styles.professionalExperienceItem__container}>
        <h4 className={styles.professionalExperience__card__title}>
          COMPANY NAME :
        </h4>

        <h5 className={styles.professionalExperience__card__companyName}>
          {companyName}
        </h5>
        <h5 className={styles.professionalExperience__card__title}>
          TIME PERIODE :
        </h5>
        <time className={styles.professionalExperience__card__dates}>
          {dates}
        </time>
        <h4 className={styles.professionalExperience__card__title}>
          MISSIONS :
        </h4>
        <p className={styles.professionalExperience__card__missions}>
          {missions}
        </p>
      </article>
    </>
  );
}
