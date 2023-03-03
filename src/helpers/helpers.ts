import { IComponent } from "@/admin/helpers/interfaces/IComponent";
import React from "react";
import { useDispatch } from "react-redux";


export function groupArray(array: any, rows: number): any {

    let talents = [...Array(array.length / rows)]
    const talentsRow = talents.map((row, idx) => array.slice(idx * rows, idx * rows + rows));
    return talentsRow;

}

export function findNestedItem(obj: IComponent, id: number, component: IComponent): any {
    if (obj.id === id) {
        obj.childrens?.push(component)
        return
    } else {
        obj.childrens?.map((item: IComponent) => {

            return findNestedItem(item, id, component)
        }
        )
    }
}


export function deleteNestedItem(arr: IComponent[], id: number) {

    arr.map((item, index) => {
        if (item.id === id) {

            if(index === 0){
                
                return    arr.shift()
            }else{                
                return   arr.splice(index, index);
            }
            
        } else if (item.childrens) {
            return deleteNestedItem(item.childrens, id)
        }
    })

    console.log(arr);


}
