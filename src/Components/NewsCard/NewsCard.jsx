import { format } from "date-fns"
import style from "./NewsCard.module.scss"


export function NewsCard ({title, date, author, image, content}) {
    return (
        <>
       
        <div className={style.cardStyle}>
            <div>
                <h1>{title}</h1>
                <p className={style.textRed}>{format(new Date(date), 'dd/MM-yy')} - by {author}</p>
                <img src={image} alt="" />
                <p>{content}</p>
            </div>
        </div>
    </>
    )
}