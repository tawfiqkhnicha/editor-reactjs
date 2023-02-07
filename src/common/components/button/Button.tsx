import Link from "next/link";
import { IButton } from "./IButton";

export default function Button({title, variant, href, action}: IButton){
    return (
        <>
          {variant === "button" ? <button className="btn main-btn animated-button">
                {title}
            </button> : <Link href={href} className="btn main-btn animated-button">  {title} </Link>}
        </>
   
    )
}