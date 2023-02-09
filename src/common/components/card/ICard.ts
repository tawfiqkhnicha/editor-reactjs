export interface ICard {
    HeaderTitle: string  ,  
    styleHeaderPage?:string  , 
    styleContentPage?: string  ,
    content: string,
    cardStyle?: string,
    action?: {
        href? : string,
        action?: ()=> void
        title?: string
    }

    

}