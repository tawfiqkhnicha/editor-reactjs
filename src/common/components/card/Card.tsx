import { useState } from "react"
import Button from "../button/Button"
import { ICard } from "./ICard"

export default function Card({ HeaderTitle, styleHeaderPage, content, styleContentPage }: ICard) {

    const [isOpen, setOpen] = useState(false)

    const toggleDropdown = (visibility: boolean) => {
        setOpen(visibility)
    }

    return (
        <section className={` ${styleHeaderPage ? styleHeaderPage : ""} `}>

            <div className="left-border">
                <div dangerouslySetInnerHTML={{ __html: HeaderTitle }} />
            </div> 
            <article className={` ${styleContentPage ? styleContentPage : ""} `}>
                <div dangerouslySetInnerHTML={{ __html: content }} />

            </article>
            
        
        </section>


    )
}