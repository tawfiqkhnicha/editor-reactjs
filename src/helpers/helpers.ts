import { IComponent } from "@/admin/helpers/interfaces/IComponent";
import React from "react";
import { useDispatch } from "react-redux";


export function groupArray(array: any, rows: number): any {

    let talents = [...Array(array.length / rows)]
    const talentsRow = talents.map((row, idx) => array.slice(idx * rows, idx * rows + rows));
    return talentsRow;

}

export function findNestedItem(obj: IComponent, id: string, component: IComponent): any {
    if (obj.id === id) {//first element in  page
        obj.childrens?.push(component)
        return
    } else {
        obj.childrens?.map((item: IComponent) => {

            return findNestedItem(item, id, component)
        }
        )
    }
}

export function addProps(obj: IComponent, id: string, props: any): any {

    console.log({objId: obj.id, id: id})

    if (obj.id === id) {
      
        obj.props = JSON.parse(JSON.stringify(props))
        return
    } else {
        obj.childrens?.map((item: IComponent) => {

            return addProps(item, id, props)
        }
        )
    }
}

export function deleteNestedItem(arr: IComponent[], id: string) {

    arr.map((item, index) => {
        if (item.id === id) {

                        
                return   arr.splice(index, 1);
            
            
        } else if (item.childrens) {
            return deleteNestedItem(item.childrens, id)
        }
    })

    console.log(arr);


}

export function formatObject(obj: any){

    const initialObject = JSON.parse(JSON.stringify(obj))
    const formatedObj = {}
    Object.keys(initialObject).map((item, index)=>{
        Object.assign(formatedObj, {[item]: obj[item].value} );   
    })
    return formatedObj
}