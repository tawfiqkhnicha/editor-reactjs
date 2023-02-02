import Link from "next/link"
import { useState } from "react"
import { IDropdown } from "./IDropdown"

export default function Dropdown ({dropdownTitle, items}: IDropdown){

    const [isOpen, setOpen] = useState(false)

    const toggleDropdown = (visibility : boolean) =>{
        setOpen(visibility)
    }

    return(
        <div className="dropdown">
            <a className="btn dropdown-toggle navbar-items" onMouseEnter={()=>toggleDropdown(true)} onMouseLeave={()=>toggleDropdown(false)}> {dropdownTitle}</a>
            { isOpen && (
                <ul className="dropDown-menu">
                    {items.map((item: any, index: number) =>{
                        return <li key={index} > <Link className="dropdown-item navbar-items" href={item.href}>{item.title}</Link></li>
                    })}
                </ul>
            )


            }
        </div>

        
    )
}