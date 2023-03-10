import Link from "next/link";
import { useRef, useState } from "react";
import { IButton } from "./IButton";

export default function Button({ title, href, action, animated, className, variant }: IButton) {

    const btn = useRef(null)
    let x, y;

    const [coordonate, setCoordonate] = useState({ x: 0, y: 0 })

    const handleMouseOver = (e: any) => {
        if (btn.current) {
            x = e.pageX - btn.current['offsetLeft'];
            y = e.pageY - btn.current['offsetTop'];

            setCoordonate({ x: x, y: y })
        }

    }
    return (
        <>
            <div ref={btn} className={`master-button  ${className ? className : ""}`} onMouseOver={() => handleMouseOver(event)}>
                {variant === "button" ? <div className="pointer" onClick={action}>
                    {title}
                </div> : <Link href={href} className={`text-decoration-none ${animated ? "animated-link" : ""}`}>  {title}
                    {animated && <span className="hover-effect" style={{ top: coordonate.y, left: coordonate.x }}></span>}
                </Link>}

            </div>
        </>

    )
}