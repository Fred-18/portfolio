import styles from './Project.module.css';
import BigCard from "../bigCard/BigCard";
import {bigCardContent} from "@/content/bigCardContent";

export default function Project() {
    return (
        <>
            <h2 className={styles.Project__title}>Project</h2>
            <section className={styles.Project__container}>
                <div className={styles.bigCard__items}>
                    {bigCardContent.BigCard.map((item)=>(<BigCard key={item.id} description={item.p} link={item.link} techno={item.span} title={item.title}/>))}
                </div>
            </section>
        </>
    )
}