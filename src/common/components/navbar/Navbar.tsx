import Image from "next/image";
import Link from "next/link";
import Img from "../image/Img";
import { useEffect, useState } from "react";
import Dropdown from "../dropdown/Dropdown";
import { INavbar } from "./INavbar";
import Button from "../button/Button";



function NavBarContent({ items, screenWidth }: any ) {
  return (
    <>
     {items.map((item: any, index: number) => {
      return (
        item.type === "dropdown" ? (
          <Dropdown breakpoint={screenWidth} style={item.style} dropdownTitle={item.dropdownTitle} items={item.elements} />
        ) : item.type === "linkBtn" ? (
          screenWidth > 1000 &&
          <Button title={item.title} href={item.href} variant="btnLink" animated={true} />
        ) : (
          screenWidth <= 1000 ?      <div className="mobile-nav-item">
                        <Link className={`${screenWidth <= 1000 ? "text-reset text-decoration-none mobile-nav-item-font" : "nav-link navbar-items"} `}href={item?.href}>{item?.title}</Link>
                  </div>  :    <Link className={`${screenWidth <= 1000 ? "text-reset text-decoration-none mobile-nav-item-font" : "nav-link navbar-items"} `}href={item?.href}>{item?.title}</Link>


        
        )
      )
    })}
    </>
   
  )
}


export default function Navbar({ items }: INavbar) {

  const [isOpen, setToggleMenu] = useState(false)

  const [screenWidth, setScreenWidth] = useState(0)

  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth);
  }

  const handleMenu = () => {
    setToggleMenu(!isOpen);
  }

  useEffect(() => {


    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    if(screenWidth > 1000){
      setToggleMenu(false)
    }

    

    return () => window.removeEventListener('resize', handleWindowResize);

  },  )

  return (

    <nav className="navbar navbar-expand-lg site-padding">
      <div className="navbar-container">
        <Link href="/" className="navbar-brand" >
          <Img image="/menaps-logo.png" alt="Welcome | Menaps" width={148} height={30.15} />
        </Link>

        {
          screenWidth <= 1000 &&
          <button className="btn" onClick={handleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>}
        <div className={`${screenWidth <= 1000 && isOpen  ? "mobile-nav-item-container d-flex " : screenWidth <= 1000 && !isOpen ? "mobile-nav-item-container d-none" : "navbar-items-container d-flex"}`} >
          {screenWidth <= 1000 &&
            <div className="mobile-nav-header">
              <Img image="/menaps-white-logo.png" alt="Welcome | Menaps" width={148} height={30.15} />
            </div>
          }
         {screenWidth <= 1000 ? 
          <div className={ "mobile-nav-content dropdown-item-border"}> 
           <NavBarContent items={items} screenWidth= {screenWidth}/>
          </div> :  <NavBarContent items={items} screenWidth= {screenWidth}/>

        } 
         
            </div>
            </div>
      {isOpen && screenWidth <= 1000 && <div className="mobile-nav-container">
        <button className="btn close-btn"><i className="bi bi-x-lg" onClick={handleMenu}></i></button>
      </div>}

    </nav>

  )
  {/*
 <nav className="navbar navbar-expand-lg">
      <div className="navbar-container">
        <Link href="/" className="navbar-brand" >
          <Img image="/menaps-logo.png" alt="Welcome | Menaps" width={148} height={30.15} />
        </Link>

        {
          screenWidth <= 600 &&
          <button className="btn" onClick={handleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>
        }
        
        <div className="navbar-items-container">
          
          {items.map((item: any, index: number)=>(
                <Link key={index} className="text-reset text-decoration-none" href={item?.href}>{item?.title}</Link>

          )

              
              )}
        </div>


      </div>
    </nav>


     <div className="mobile-nav-item-container">
        <div className="mobile-nav-header">
          <Img image="/menaps-white-logo.png" alt="Welcome | Menaps" width={148} height={30.15} />
        </div>
        <div className="mobile-nav-content dropdown-item-border">

          {items.map((item: any, index: number) => {
            return (
              item.type === "dropdown" ? (
                <Dropdown breakpoint="mobile" style={item.style} dropdownTitle={item.dropdownTitle} items={item.elements} />
              ) : item.type === "linkBtn" ? "" : (<div className="mobile-nav-item">
                <Link href={item.href} className="text-reset text-decoration-none mobile-nav-item-font"> {item.title}</Link>
              </div>)
            )
          })}

        </div>
      </div>


        {items.map((item: any, index: number) => {
              return (
                item.type === "dropdown" ? (
                  <Dropdown style={item.style} dropdownTitle={item.dropdownTitle} items={item.elements} />
                ) : item.type === "linkBtn" && screenWidth > 1000  ? (
                  <Button title={item.title} href={item.href} variant="btnLink" animated={true} />
                ) : (
                  <Link className={`${screenWidth <= 1000 ? "text-reset text-decoration-none mobile-nav-item-font" : "nav-link navbar-items"} `}href={item?.href}>{item?.title}</Link>
                )
              )
            })}

*/}

}