import { iSoftSkills } from "@/interface/iSoftSkills";
import styles from "./softSkillsItems.module.css";

export default function SoftSkills__items({ skills }: iSoftSkills) {
  return <div className={styles.SoftSkills__items}>{skills}</div>;
}
