import Image from "next/image";
import Link from "next/link";
import Img from "../image/Img";
import { useState } from "react";
import Dropdown from "../dropdown/Dropdown";
import { INavbar } from "./INavbar";


export default function Navbar({items} : INavbar){

    const [dropdownLanguageTitle, setDropdownLanguageTitle] = useState({title: "English", icon: ""});

    const setLanguage = (language : {title: string, icon: string}) =>(
        setDropdownLanguageTitle(language)
    )

    return(
        <nav className="navbar navbar-expand-lg">
            <div className="navbar-container">
                <Link href="/" className="navbar-brand" >
                    <Img image="/menaps-logo.png" alt="Welcome | Menaps" width={148} height={30.15} />
                </Link>
                <div className="navBar-collapse">
                    <ul className="navbar-nav me-auto mb-6 mb-lg-0">
                        {items.map((item: any, index: number)=>{ return (
                            item.type === "dropdown" ? (
                               <Dropdown dropdownTitle = {item.dropdownTitle} items = {item.elements}/>
                            ) : (<li className="nav-item">
                            <Link className="nav-link navbar-items" href={item?.href}>{item?.title}</Link>
                          </li>)
                    )})}
                    </ul>
                </div>    

            </div>
        </nav>
    )
}