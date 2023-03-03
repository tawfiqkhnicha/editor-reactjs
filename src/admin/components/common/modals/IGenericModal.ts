import { IComponent } from "@/admin/helpers/interfaces/IComponent";

export interface IGenericModal{
    id: number ,
    modal: boolean,
    toggle: ()=> void,
    className?: string,
    closeBtn: React.ReactNode,
    data?: IComponent[], 
    confirmBtn: ()=>void,
}