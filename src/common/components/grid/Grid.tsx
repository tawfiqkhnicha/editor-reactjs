import { useEffect, useState } from "react"
import { IGrid } from "./IGrid"

export default function Grid({ children , className}: IGrid) {


    return (
        <div className={`row   m-0   ${className}`}  >
            {children}
        </div>
    )
}