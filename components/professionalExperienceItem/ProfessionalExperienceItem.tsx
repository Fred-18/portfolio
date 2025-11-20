import styles from "./professionalExperienceItem.module.css";
import { IProfessionalExperience } from "@/interface/iProfessionalExperience";

export default function ProfessionalExperienceItem({
  companyName,
  dates,
  missions
}: IProfessionalExperience) {
  return (
    <>
      <article className={styles.professionalExperience__container}>
        <h4 className={styles.professionalExperience__card__compagnyName}>
          {companyName}
        </h4>
        <time className={styles.professionalExperience__card__dates}>
          {dates}
        </time>
        <p className={styles.professionalExperience__card__missions}>
          {missions}
        </p>
      </article>
    </>
  );
}
