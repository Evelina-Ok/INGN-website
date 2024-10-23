import { format } from "date-fns"
import style from "./NewsCard.module.scss"
import { NavLink } from "react-router-dom"


export function NewsCard ({title, date, author, image, content, slug}) {
    return (
        <>
       
        <div className={style.cardStyle}>
            <div className={style.cardStyling}>
                <h1>{title}</h1>
                <p className={style.textRed}>{format(new Date(date), 'dd/MM-yy')} - by {author}</p>
                <img src={image} alt="" />
                <p>{content}</p>
                <NavLink to={`./SingleNews/${slug}`}>Read more</NavLink>
            </div>
        </div>
    </>
    )
} 