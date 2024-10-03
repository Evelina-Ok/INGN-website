import { format } from "date-fns"
import style from "./NewsCard.module.scss"

export function NewsCard ({title, date, author, content, image}) {
    return (
        <div className={style.cardStyle}>
            <div>
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
        </div>

    )
}