

export interface IComponent {
    type: string,
    icon?: string
    id: number
    category: "ATOMIC" | "CONTAINER",
    props?: {
        [key: string]: unknown;
    };
    childrens?: Array<IComponent> ;
}