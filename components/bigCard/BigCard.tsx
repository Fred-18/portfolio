 import {BigCardItem} from "../../Type/type";

export default function BigCard({title,techno,link,description}: BigCardItem){

    return(
        <>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <span>{techno}</span>
                <link href={link}/>
            </div>
        </>
    )
}