import Link from "next/link"
import { useState } from "react"
import Img from "../image/Img"
import { IDropdown } from "./IDropdown"

export default function Dropdown ({breakpoint, style, dropdownTitle, items}: IDropdown){

    const [isOpen, setOpen] = useState(false)

 

    const [language, setLanguage] = useState({
        title: "English",
        icon: "/en.png"
    });

    const handleLanguage  = (lang: {title: string, icon: string})=>{  
        if(style === "lang"){
            setLanguage(()=> ({...language, title: lang.title, icon: lang.icon}))
        }
    }

    const handleDropdown = (state: boolean) =>{
            if( breakpoint && breakpoint > 1000){
                setOpen(state);
            }
    }

    const handleClick = () =>{
        if( breakpoint && breakpoint <= 1000){
            setOpen(!isOpen);
        }
        

    }


    return(
        <li className="dropdown "  onClick={() =>handleClick()} >
             {
              style === "lang" ? (<a className={`text-decoration-none dropdown-toggle ${ breakpoint && breakpoint <= 1000 ? "mobile-nav-item-font text-reset " :  "navbar-items"}   `}  onMouseEnter={()=>handleDropdown(true)} >
                     <Img image={language.icon} alt={language.title} width={18} height={12} marginRight = {true}/> {language.title} 
              </a>
                    
              ) : 
              <a className={` dropdown-toggle text-decoration-none ${ breakpoint && breakpoint <= 1000 ? "mobile-nav-item-font text-reset " :  "navbar-items"}   `} onMouseEnter={()=>handleDropdown(true)} > 
              { dropdownTitle} 
              </a>
            }
    
            { isOpen &&(
                <ul className={`dropDown-menu`} onMouseLeave={()=>handleDropdown(false)}>
                    {items.map((item: any, index: number) =>{
                        return <li key={index} >   
                        <Link className="dropdown-item navbar-items" href={item.href} onClick={()=> handleLanguage(item)}>  {style === "lang" && <Img image={item.icon} alt={item.title} width={18} height={12} marginRight = {true}/>} {item.title}</Link></li>
                    })}
                </ul>
            )

                 }
        </li>

        
    )
}