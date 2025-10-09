import styles from './Project.module.css';
import BigCard from "../bigCard/BigCard";
import {bigCardContent} from "@/content/bigCardContent";
import {projectContent} from "@/content/projectContent";

export default function Project() {
    return (
        <>
            <h2 className={styles.Project__title}>Project</h2>
            <p className={styles.Project__message}>{projectContent.Project.p}</p>
            <section className={styles.Project__container}>
                <div className={styles.bigCard__items}>
                    {bigCardContent.BigCard.map((item) => (
                        <BigCard  projectId={""} key={item.projectId} projectDescription={item.projectDescription} projectLink={item.projectLink} projectTechno={item.projectTechnology}
                                 projectTitle={item.projectTitle}/>))}
                </div>
            </section>
        </>
    )
}