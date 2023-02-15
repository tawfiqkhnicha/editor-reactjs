import Button2 from "../button2/Button2"
import Card from "../card/Card"
import Grid from "../grid/Grid"
import Section from "../Section/Section"
import Widget from "../widget/Widget"

export default function Carousel(){
    return (<>

<div className=" sliderstyle  "  >
      <img className="Silhouette-image" src="/Silhouette-Home.png" alt="First slide" />
        <Grid className="slider-container">
         
          <Widget size={6} className="" >
          </Widget>
          <Widget size={6} className="footprint" >
          <Card styleHeaderPage="slidertitle  text-white" styleContentPage="text-white slidercontent " HeaderTitle="<h1>MENAPS,</h1>" content="<span style='text-align:justify ; letter-spacing: 1px !important;' class='letter-spacing' >Groupe de <span style='color:#05f2f2;'>conseil intégré,</br></span>stratégique & opérationnel, à </br>forte dimension d’innovation</br>technologique & digitale</span></br>" />            <Button2 styleButton="    buttonSlider my-3" variant="link" title="Discutons-en" href="/our-values" />
          </Widget>
        </Grid>
      </div>
    </>)
}