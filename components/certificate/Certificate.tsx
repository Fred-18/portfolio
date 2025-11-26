import styles from './Certificate.module.css';
import {certificateContent} from "@/content/certificateContent";
import CertificationItems from "../certificationItem/CertificationItems";

export default function Certificate() {
    return (
        <>
            <h2 className={styles.certificate__title}>Certificates</h2>
            <section className={styles.certificate__section}>{certificateContent.map((value)=>(
            <CertificationItems key={value.id} id={""} title={value.title} date={value.date} school={value.school} image={value.image}/>
            ))}
            </section>
        </>
    )
}