import Img from "../image/Img";
import { FooterItems } from "@/helpers/footer/FooterItems";
import Link from "next/link";
import Widget from "../widget/Widget";
import Section from "../Section/Section";
import Grid from "../grid/Grid";

export default function Footer(){
    return (


      
<footer className="text-start text-lg-start text-muted  mt-auto ">

  <Section fullWidth={false} background={true}>
          <Grid className="p-5">
          {FooterItems.map(item =>{
            return <Widget size={3}>

{             item.type === "social" ? 
              <>
                <div className="mb-4">
                    <Img image="/menaps-white-logo.png" alt="Welcome | Menaps" width={148} height={30.15} />
                </div>
                {item.items.map(ele =>{
                    
                    return  <a href={ ele.href} target='_blank' className="widget-item-font text-reset text-decoration-none" > <i className={ele.icon}></i></a>

                })}
             </>
            :
            <>
             <h2 className="mb-4 widget-title">
            {item.title}
            </h2>
            {item.items.map(ele =>{
                return <>
                {item.type === "contact" ? <p className="widget-item-font">
                      <i className={`${ele.icon} marginRight`}></i> <span> {ele.title} </span></p>
                    : <p className="footer-link"> <Link href={ele.href} className="text-reset text-decoration-none widget-item-font"> {ele.title}</Link> </p>

                }
                </> 
                    
            })}
            </>
            }
      </Widget>
        })}   
            
          </Grid>
  </Section>
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
