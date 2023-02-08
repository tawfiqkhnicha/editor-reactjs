import { IIcon } from "./IIcon";

export default function Icon({icon, text}: IIcon){
    return (
       
        <div className="d-flex align-items-center  w-auto   ">
           {icon &&  
            <img className="icon" src={icon} /> }
           {text && 
            <p className="text-start card-content  m-0">{text}</p> 
            }
        </div>
    )
}