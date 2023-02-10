import Link from "next/link"
import {  useState, useRef, useEffect } from "react"
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
  
    const handleClick = () =>{
        if( breakpoint && breakpoint <= 1000){
            setOpen(!isOpen);
        }
        

    }
     const closeDropdown = ()=> {
        if( breakpoint && breakpoint > 1000){
            setOpen(false);
    }
     }

     const openDropdown=()=> {
        if( breakpoint && breakpoint > 1000){
            setOpen(true);
    }
     }

     function useOutsideAlerter(ref: any) {
        useEffect(() => {
         
          function handleClickOutside(event: any) {
          //  closeDropdown()
          console.log("test")

            if (ref.current && !ref.current.contains(event.target)) {
            }
          }
          document.addEventListener("mouseleave", handleClickOutside);
          return () => {
            document.removeEventListener("mouseleave", handleClickOutside);
          };
        }, [ref]);
      }
    

     const wrapperRef = useRef(null);
     useOutsideAlerter(wrapperRef);
    
    return(

        <>
        {breakpoint && breakpoint > 1000 ? 
          <li  ref={wrapperRef} className="nav-item dropdown menu-li nav-item  menu-li" >
          {
           style === "lang" ? (<a  className="nav-link  dropdown-toggle text-decoration-non d-flex align-items-center navbar-items " href="#" data-bs-toggle="dropdown" >
                  <Img image={language.icon} alt={language.title} width={18} height={12} marginRight = {true}/> {language.title} 
           </a>
                 
           ) : 
           <a className={` nav-link dropdown-toggle text-decoration-none  d-flex align-items-center navbar-items `} href="#" data-bs-toggle="dropdown"  > 
           { dropdownTitle} 
           </a>
         }
  
             <ul  className={`dropdown-menu`}   >
                 {items.map((item: any, index: number) =>{
                     return <li  key={index} >   
                     <Link className="dropdown-item " href={item.href} onClick={()=> handleLanguage(item)}>  {style === "lang" && <Img image={item.icon} alt={item.title} width={18} height={12} marginRight = {true}/>} {item.title}</Link></li>
                 })}
             </ul>
         
     </li> : 
      <li  ref={wrapperRef} className="nav-item dropdown menu-li" onMouseEnter={()=>openDropdown()}  onClick={() =>handleClick()} >
      {
       style === "lang" ? (<a className={`text-decoration-none dropdown-toggle d-flex align-items-center ${ breakpoint && breakpoint <= 1000 ? "mobile-nav-item-font text-reset " :  " "}   `}  >
              <Img image={language.icon} alt={language.title} width={18} height={12} marginRight = {true}/> {language.title}  
       </a>
             
       ) : 
       <a className={` dropdown-toggle text-decoration-none ${ breakpoint && breakpoint <= 1000 ? "mobile-nav-item-font text-reset " :  "navbar-items"}   `}  > 
       { dropdownTitle} 
       </a>
     }

    { isOpen &&(
         <ul  className={`dropDown-menu`}   onMouseLeave={()=> closeDropdown()}>
             {items.map((item: any, index: number) =>{
                 return <li className="menu-li" key={index} >   
                 <Link className="dropdown-item navbar-items" href={item.href} onClick={()=> handleLanguage(item)}>  {style === "lang" && <Img image={item.icon} alt={item.title} width={18} height={12} marginRight = {true}/>} {item.title}</Link></li>
             })}
         </ul>
     )}
     
 </li>
    }
      
        </>
    

      
  
       

        
    )
}

   
    
{/* 

  <li className="nav-item dropdown">
        <a className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">  Hover me  </a>
         <ul className="dropdown-menu">
           <li><a className="dropdown-item" href="#"> Submenu item 1</a></li>
           <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
           <li><a className="dropdown-item" href="#"> Submenu item 3 </a></li>
         </ul>
     </li>



          <li  ref={wrapperRef} className="nav-item dropdown menu-li " onMouseEnter={()=>openDropdown()}  onClick={() =>handleClick()} >
        {
         style === "lang" ? (<a className={`text-decoration-none dropdown-toggle ${ breakpoint && breakpoint <= 1000 ? "mobile-nav-item-font text-reset " :  "navbar-items"}   `}  >
                <Img image={language.icon} alt={language.title} width={18} height={12} marginRight = {true}/> {language.title} 
         </a>
               
         ) : 
         <a className={` dropdown-toggle text-decoration-none ${ breakpoint && breakpoint <= 1000 ? "mobile-nav-item-font text-reset " :  "navbar-items"}   `}  > 
         { dropdownTitle} 
         </a>
       }

      { isOpen &&(
           <ul  className={`dropDown-menu`}   onMouseLeave={()=> closeDropdown()}>
               {items.map((item: any, index: number) =>{
                   return <li className="menu-li" key={index} >   
                   <Link className="dropdown-item navbar-items" href={item.href} onClick={()=> handleLanguage(item)}>  {style === "lang" && <Img image={item.icon} alt={item.title} width={18} height={12} marginRight = {true}/>} {item.title}</Link></li>
               })}
           </ul>
       )}
       
   </li>




         <li  ref={wrapperRef} className="nav-item dropdown menu-li nav-item  menu-li" >
        {
         style === "lang" ? (<a  className="nav-link  dropdown-toggle text-decoration-non" href="#" data-bs-toggle="dropdown" >
                <Img image={language.icon} alt={language.title} width={18} height={12} marginRight = {true}/> {language.title} 
         </a>
               
         ) : 
         <a className={` nav-link dropdown-toggle text-decoration-none `} href="#" data-bs-toggle="dropdown"  > 
         { dropdownTitle} 
         </a>
       }

      
           <ul  className={`dropdown-menu mt-5`}   >
               {items.map((item: any, index: number) =>{
                   return <li  key={index} >   
                   <Link className="dropdown-item " href={item.href} onClick={()=> handleLanguage(item)}>  {style === "lang" && <Img image={item.icon} alt={item.title} width={18} height={12} marginRight = {true}/>} {item.title}</Link></li>
               })}
           </ul>
       
   </li>
*/}