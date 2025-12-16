import styles from "./softSkills.module.css";
import SoftSkillsList from "../Helpers/softskillsHelpers";
export default function SoftSkills() {
  return (
    <>
      <div className={styles.SoftSkills__container}>
        <h3 className={styles.SoftSkills__title}>SoftSkills</h3>
        <section className={styles.SoftSkills__section}>
          <SoftSkillsList />
        </section>
      </div>
    </>
  );
}
