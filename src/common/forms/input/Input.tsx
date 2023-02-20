import { IInput } from "./IInput";

export default function Input({id,placeholder, type, background}: IInput){
    return(
        <input type={type} className={`input form-control ${background ? "backgroundColor" : ""}`} placeholder={placeholder} />
    )
}