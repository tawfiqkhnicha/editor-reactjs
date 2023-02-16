import { useState } from "react"
import Button from "../button/Button"
import { ICardBlog } from "./ICardBlog"

export default function CardBlog({ imgsrc, Cardtitle, content ,href  }: ICardBlog) {

    const [isOpen, setOpen] = useState(false)

    const toggleDropdown = (visibility: boolean) => {
        setOpen(visibility)
    }

    return (
        <div className="card"  >
            <img className="card-img-top" src= {imgsrc}  alt="Card image cap" />
            <div className="card-body">
                <h5 className="  categoryTitle">{Cardtitle}</h5>
                <p className="  categoryContent">{content}</p>
                <a href={href} className="btn btn-primary">READ MORE »</a>
            </div>
        </div>


    )
}