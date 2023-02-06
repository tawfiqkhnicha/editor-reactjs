import { useState } from "react"
import { IScrollComponent } from "./IScrollComponent"

export default function ScrollComponent({content, styleContentPage }: IScrollComponent) {

    const [isOpen, setOpen] = useState(false)

    const toggleDropdown = (visibility: boolean) => {
        setOpen(visibility)
    }

    return (
        <div className="item site-padding">
            <div className="meta mx-5">
                <img
                    className="image"
                    src="/imagine.svg"   
                />
            </div>
            <div className="sub-item-container"dangerouslySetInnerHTML={{ __html: content.content }}     /> 
        </div>

    )
}