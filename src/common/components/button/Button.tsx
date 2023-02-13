import Link from "next/link";
import { IButton } from "./IButton";

export default function Button({title, href, action, animated, className}: IButton){
    return (
        <>
            <div className={`master-button ${className ? className : ""}`}>
                <Link href={href} className={`text-decoration-none ${animated ? "animated-link" : ""}`}>  {title} 
                {animated && <span className="hover-effect" ></span>}
                </Link>
            </div> 
        </>
   
    )
}