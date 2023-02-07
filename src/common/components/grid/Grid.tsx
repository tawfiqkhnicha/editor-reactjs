import { useEffect, useState } from "react"
import { IGrid } from "./IGrid"

export default function Grid({ data, children, style, elementsPerRow }: IGrid) {

    const [isOpen, setOpen] = useState(false)
    const gridClass = `col-md-${elementsPerRow}`;


    return (


        <div className={`row site-padding   ${style} `}  >
            {children}
        </div>

    )
}