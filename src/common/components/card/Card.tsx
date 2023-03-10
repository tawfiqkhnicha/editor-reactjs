import { useState } from "react"
import CardHeader from "react-bootstrap/esm/CardHeader"
import Button from "../button/Button"
import { ICard } from "./ICard"

export default function Card({ HeaderTitle, styleHeaderPage, content, styleContentPage, cardStyle, bottomTitle }: ICard) {

   

    return (
        <section className={` ${cardStyle ? cardStyle : ""} `}>

            {HeaderTitle && <div className={` ${styleHeaderPage ? styleHeaderPage : "card-title HeaderPage"} `} >
                <div dangerouslySetInnerHTML={{ __html: HeaderTitle }} />
            </div>
            }
            <article className={` card-content ${styleContentPage ? styleContentPage : ""} `}>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </article>
            {bottomTitle && <div className={` ${styleHeaderPage ? styleHeaderPage : "card-title HeaderPage"} `} >
                <div dangerouslySetInnerHTML={{ __html: bottomTitle }} />
            </div>
            }
        </section>


    )
}