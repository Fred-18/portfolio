import {BigCardProps} from "../../Type/type";
import styles from "../bigCard/BigCard.module.css"
import Bubble from "../bubble/Bubble";

export default function BigCard({
                                    projectTitle,
                                    projectTechno,
                                    projectLink,
                                    projectDescription,
                                    projectId
                                }: BigCardProps) {

    return (
        <>
            <section className={styles.bigCardContainer}>
                <h3 className={styles.bigCard__title}>{projectTitle}</h3>
                <h6 className={styles.bigCard__descriptionTitle}>Description :</h6>
                <p className={styles.bigCard__description}> {projectDescription}</p>
                <h6 className={styles.bigCard__toolsTitle}>Tools :</h6>
                <section className={styles.bubbleContainer}>{projectTechno.map((tech, i) =>
                    <Bubble key={`${projectId}-${i}`} projectId={projectId} projectTechno={tech}/>)}
                </section>
                <a href={projectLink} className={styles.bigCard__link} target="_blank">GITHUB link</a>
            </section>
        </>
    )
}