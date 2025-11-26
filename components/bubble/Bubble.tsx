import styles from "../bubble/Bubble.module.css"
import {BubbleProps} from "../../Type/type";
export default function Bubble({projectId,projectTechno}:BubbleProps){
    return(
        <>
            <div className={styles.bubblesContainer}>
            <section className={styles.bubblesContent}>{projectTechno}{projectId}</section>
            </div>
        </>
    )
}