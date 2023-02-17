import { useState } from "react"
import Button from "../button/Button"
import { ICard } from "./ICard"

export default function Card({ HeaderTitle, styleHeaderPage, content, styleContentPage, cardStyle, action }: ICard) {

    const [isOpen, setOpen] = useState(false)

    const toggleDropdown = (visibility: boolean) => {
        setOpen(visibility)
    }

    return (
        <section className={` ${cardStyle ? cardStyle : ""} `}>

            <div className={` ${styleHeaderPage ? styleHeaderPage : "card-title HeaderPage"} `} >
                <div dangerouslySetInnerHTML={{ __html: HeaderTitle }} />
            </div> 
            <article className={` card-content ${styleContentPage ? styleContentPage : ""} `}>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </article>
            {action && 
            
            <div className="d-flex justify-content-center align-items-center">
                  <Button href={action?.href} title={action?.title}/>  
            </div>
            }
        </section>


    )
}