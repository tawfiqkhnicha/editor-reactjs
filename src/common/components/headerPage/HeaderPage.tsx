import { useState } from "react"
import { IHeaderPage } from "./IHeaderPage"

export default function HeaderPage({ HeaderTitle, styleHeaderPage, content, styleContentPage }: IHeaderPage) {

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