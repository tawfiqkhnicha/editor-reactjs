import Link from "next/link"
import Img from "../image/Img"
import { IWidget } from "./IWidget"

export default function Widget(props: IWidget){

    return(
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">

            {props.type === "social" ? 
              <>
                <div className="mb-4">
                    <Img image="/menaps-white-logo.png" alt="Welcome | Menaps" width={148} height={30.15} />
                </div>
                {props.items.map(item =>{
                    return  <a href={item.href} target='_blank' className="widget-item-font text-reset text-decoration-none" > <i className={item.icon}></i></a>

                })}
             </>
            :
            <>
             <h2 className="mb-4 widget-title">
            {props.title}
            </h2>
            {props.items.map(ele =>{
                return <>
                {props.type === "contact" ? <p className="widget-item-font">
                      <i className={`${ele.icon} marginRight`}></i> <span> {ele.title} </span></p>
                    : <p className="footer-link"> <Link href={ele.href} className="text-reset text-decoration-none widget-item-font"> {ele.title}</Link> </p>

                }
                </> 
                    
            })}
            </>
            }

           
      </div>
    )
}