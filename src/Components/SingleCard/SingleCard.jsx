import { format } from "date-fns";


export function SingleCard ({title, date, author, image, content}) {
    return (
    <>
        <section className={style.singleCardStyle}>
            <img src={image} alt="" />
            <h1>{title}</h1>
            <p className={style.textRed}>{format(new Date(date), 'dd/MM-yy')} - by{author}</p>
            <p>{content}</p>
        </section>
    </>
    )
}