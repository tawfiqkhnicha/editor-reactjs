import Img from "../image/Img";
import { FooterItems } from "@/helpers/footer/FooterItems";
import Link from "next/link";
import Widget from "../widget/Widget";

export default function Footer(){
    return (


            
<footer className="text-start text-lg-start text-muted  mt-auto ">
  <section className="footer ">
    <div className="container text-start text-md-start my-5">
      <div className="row mt-3">
    
        {FooterItems.map(item =>{
            return  <Widget title={item.title} items={item.items} type={item.type}/>
        })}  
        
      </div>
    </div>
  </section>

  <div className="copyright">
     <p className="copyright-text mt-2"> &copy; {new Date().getFullYear()} by Menaps - All Right Reserved </p>
  </div>
</footer>
  
    )
}

    {/**

 <footer className="footer">
            <div className="footer-widgets">
                <div className="row gx-5">
                    <div className="col">
                        
                    </div>

                </div>
                
            </div>
            <div className="copyright">
                <p className="copyright-text"> &copy; {new Date().getFullYear()} by Menaps - All Right Reserved </p>
            </div>
        </footer>

*/} 
