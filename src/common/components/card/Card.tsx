import { useState } from "react"
import Button from "../button/Button"
import { ICard } from "./ICard"

export default function Card({ HeaderTitle, styleHeaderPage, content, styleContentPage, cardStyle }: ICard) {

    const [isOpen, setOpen] = useState(false)

    const toggleDropdown = (visibility: boolean) => {
        setOpen(visibility)
    }

    return (
        <section className={` ${cardStyle ? cardStyle : ""} `}>

            <div className={` left-border  ${styleHeaderPage ? styleHeaderPage : "card-title"} `} >
                <div dangerouslySetInnerHTML={{ __html: HeaderTitle }} />
            </div> 
            <article className={` card-content ${styleContentPage ? styleContentPage : ""} `}>
                <div dangerouslySetInnerHTML={{ __html: content }} />

            </article>
        </section>


    )
}