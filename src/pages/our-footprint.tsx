import Card from '@/common/components/card/Card'
import ScrollComponent from '@/common/components/scrollComponent/ScrollComponent'
import ContentOurOrigins from '@/common/components/contentOurOrigins/ContentOurOrigins'
import Button from '@/common/components/button/Button'
import Section from '@/common/components/Section/Section'
import Widget from '@/common/components/widget/Widget'
import Grid from '@/common/components/grid/Grid'
import GalleryFootprint from '@/common/components/gallery/GalleryFootprint'
export default function OurFootprint() {
  return (
    <>
      <Section className=" sliderstyle my-5" background={true} fullWidth={false}>
      <img className="Silhouette-image" src="/Silhouette-Home.png" alt="First slide" />
        <Grid className="slider-container">
         
          <Widget size={6} className="" >
          </Widget>
          <Widget size={6} className="footprint" >
          <Card styleHeaderPage="slidertitle  text-white" styleContentPage="text-white slidercontent " HeaderTitle="<h1>MENAPS,</h1>" content="<span style='text-align:justify ; letter-spacing: 2px !important;' >Groupe de <span style='color:#05f2f2;'>conseil intégré,</br></span>stratégique & opérationnel, à </br>forte dimension d’innovation</br>technologique & digitale</span></br>" />            <Button styleButton="    buttonSlider my-3" variant="link" title="Discutons-en" href="/our-values" />
          </Widget>
        </Grid>
      </Section>

      <Section background={false} fullWidth={false}>
        <Card HeaderTitle="<h1>MENAPS expands its borders.</h1>" styleHeaderPage=" HeaderPage left-border " styleContentPage="text-content"
          content={"<p>de notre histoire</br> MENAPS est né de la volonté de proposer un conseil intégré allant de la vision stratégique à la concrétisation opérationnelle allié à une forte dimension digitale,</p>"} />
      </Section>
    </>
  )
}


