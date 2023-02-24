import Button2 from "../button2/Button2"
import Card from "../card/Card"
import Grid from "../grid/Grid"
import Section from "../Section/Section"
import Widget from "../widget/Widget"

export default function Carousel(){
    return (<>

<div className=" sliderstyle"  >
      <img className="Silhouette-image" src="/Silhouette-Home.png" alt="First slide" />
        <Grid className="slider-container">
         
          <Widget size={6} className="" >
          </Widget>
          <Widget size={6} className="footprint" >
          <Card styleHeaderPage="slidertitle  text-white" styleContentPage="text-white slidercontent " HeaderTitle="<h1>MENAPS,</h1>" content="  <span style='text-align: left; line-height: 23px; letter-spacing: 0px; font-weight: 500;  ' data-stylerecorder='true'> is an <span style='color: rgb(5, 242, 242); text-align: left; line-height: 23px; letter-spacing: 0px; font-weight: 500;  ' data-stylerecorder='true'>integrated,</span> strategic and <br>operational consulting group, <br> with a strong dimension of <br>technologicaland digital innovation</span>" />            <Button2 styleButton="    buttonSlider my-3" variant="link" title="Let's talk about it " href="/our-values" />
          </Widget>
        </Grid>
      </div>
    </>)
}