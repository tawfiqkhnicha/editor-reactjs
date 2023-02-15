import { IHotspot2 } from "./IHotspot2";

export default function hotspot2({className}: IHotspot2){


    return(
        
        <div className={`position-relative ${className ? className : ""}`} >
             
            <img className="world-map" src="schema-notre-empreinte.png" />
            <span className="highlight-spot-map center-y center-x  tunisie-map" data-toggle="tooltip" data-placement="top" title="Tunisie"></span>           
            <span className="highlight-spot-map center-y center-x  maroc-map" data-toggle="tooltip" data-placement="top" title="Maroc"></span>           
            <span className="highlight-spot-map center-y center-x  portugal-map" data-toggle="tooltip" data-placement="top" title="Portugal"></span>           
            <span className="highlight-spot-map center-y center-x  france-map" data-toggle="tooltip" data-placement="top" title="France"></span>           
            <span className="highlight-spot-map center-y center-x  india-map" data-toggle="tooltip" data-placement="top" title="India"></span>           



        </div>
    )
}