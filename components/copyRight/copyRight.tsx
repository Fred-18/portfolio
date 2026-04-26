import styles from "./copyRight.module.css";
import { copyRightContent } from "@/content/copyRightContent";
export default function CopyRight() {
  return (
    <>
      <footer className={styles.copyRight__container}>
        <p className={styles.copyRight__text}>
          &copy; {new Date().getFullYear()} {copyRightContent.copyrightText}
        </p>
      </footer>
    </>
  );
}
