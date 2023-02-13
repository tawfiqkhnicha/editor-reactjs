import { useEffect, useState } from "react";
import { IIcon } from "./IIcon";

export default function Icon({icon, text, textColor, desktopHeight, desktopWidth, mobileHeight, mobileWidth}: IIcon){

    const [screenWidth, setScreenWidth] = useState(0)

    

    const handleWindowResize = () => {
        setScreenWidth(window.innerWidth);
      }
   

    useEffect(() => {


        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    
      },)
    return (
       
        <div className="d-flex align-items-center  w-auto ">
           {icon &&  
            <img className="icon" src={icon} width={ screenWidth > 600 ? desktopWidth : mobileWidth} height={ screenWidth > 600 ? desktopHeight : mobileHeight}/> }
           {text && 
            <p className={`text-start card-content  m-0 ${textColor ? textColor : ""}`}>{text}</p> 
            }
        </div>
    )
}