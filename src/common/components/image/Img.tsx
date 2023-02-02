import Image from "next/image";
import { IImg } from "./IImg";

export default function Img({image, alt, width, height} : IImg){

    return(
        <Image
            src={image}
            alt={alt}
            width={width}
            height={height}
        />
    )

}