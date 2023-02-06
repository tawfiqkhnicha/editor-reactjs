import React, { useState } from "react"
import { IContentOurOrigins } from "./IContentOurOrigins"
import Image from "next/image";
export default function ContentOurOrigins({ content, styleContentPage }: IContentOurOrigins) {

    const [isOpen, setOpen] = useState(false)

    const toggleDropdown = (visibility: boolean) => {
        setOpen(visibility)
    }

    return (

        <article className={` ${styleContentPage ? styleContentPage : ""} `}>
            
    <div className="row">
    <div  className="col-12"  style={{
      position: "absolute",
      top: "58%",
      left: "38%",
      transform: "translate(-50%, -50%)",
      width: "15px",
      zIndex:10,
    }}> 
        <img    className="flech"  src="/Fleche.png" /> 
    </div>
    <div  className="col-12">
        <div className="row">
        {content.map((element, index) => (
            <React.Fragment key={index}>
                <div className="col-6">
                    {index % 2 === 0 ? (
                        <div>
                            <div >
                                <strong>{element.year}</strong>
                            </div>
                            <div > 
                                {element.content.map((item: string, i: number) => (
                                    <ul className="bullet-before" style={{ margin: 0, maxWidth: "40%" }}>
                                        <li style={{ margin: 0 }} key={i} dangerouslySetInnerHTML={{ __html: item }} />
                                    </ul>
                                ))}
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <div className="col-6">
                    {index % 2 !== 0 ? (
                        <div>
                            <div className=" ">
                                <strong>{element.year}</strong>
                            </div>
                            <div className=" my-3">
                                {element.content.map((item: string, i: number) => (
                                    <ul className="bullet-before" style={{ margin: 0, maxWidth: "40%" }}>
                                        <li style={{ margin: 0 }} key={i} dangerouslySetInnerHTML={{ __html: item }} />
                                    </ul>
                                ))}
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </React.Fragment>
        ))}
        </div>
    </div>
    </div>
</article>


    )
}