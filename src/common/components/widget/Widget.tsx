import Link from "next/link"
import Img from "../image/Img"
import { IWidget } from "./IWidget"

export default function Widget({children, size, className}: IWidget){

    return(
        <div className={`col-12 col-sm-12 col-md-${size} col-lg-${size} col-xl-${size} mx-auto mb-4 ${className ? className: ""}`}>
            {children}
        </div>
    )
}
