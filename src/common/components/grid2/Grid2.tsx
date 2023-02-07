import { useEffect, useState } from "react"
import { IGrid2 } from "./IGrid2"

export default function Grid2({ data, children, style, lengthelement }: IGrid2) {

     
    let gridClass = `col-md-${lengthelement}`;
    useEffect(() => {


        if (lengthelement=="0") {
            gridClass = `col-${lengthelement}`;
        }
    }, [])


    return (

        <div className="row site-padding">
            {data && data.map((item, index) => (
                <div key={index} className={gridClass}  >
                    {item.year}
                </div>
            ))}
        </div>

    )
}