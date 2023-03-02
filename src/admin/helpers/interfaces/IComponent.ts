

export interface IComponent {
    type: string,
    id: number
    category: "ATOMIC" | "CONTAINER",
    props?: {
        [key: string]: unknown;
    };
    childrens?: Array<IComponent> ;
}