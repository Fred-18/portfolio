import Card from "../card/Card";
import styles from './Tools.module.css';
import {toolsContent} from "@/content/toolsContent";
import {cardContent} from "@/content/cardContent";

export default function Tools() {

    return (
        <>
            <h2 className={styles.Tools__title}>{toolsContent.Tools.title}</h2>
            <div className={styles.Tools__container}>
                {cardContent.Card.map((item)=>( <Card  title={item.title }images={item.images}/>
                ))}
            </div>
        </>
    )
}