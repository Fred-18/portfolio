import { professionalExperienceContent } from "@/content/professionalExperienceContent";
import ProfessionalExperienceItem from "../professionalExperienceItem/ProfessionalExperienceItem";
import styles from "./professionalExperience.module.css";

export default function ProfessionalExperience() {
  return (
    <>
      <div className={styles.professionalExperience__container}>
        <h3 className={styles.professionalExperience__title}>
          Professional Experience
        </h3>
        <section className={styles.professionalExperience__section}>
          {professionalExperienceContent.map((value) => (
            <ProfessionalExperienceItem
              key={value.id}
              id={""}
              companyName={value.companyName}
              dates={value.dates}
              missions={value.missions}
            />
          ))}
        </section>
      </div>
    </>
  );
}
