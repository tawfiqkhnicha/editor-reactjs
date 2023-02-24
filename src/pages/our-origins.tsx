import Card from '@/common/components/card/Card'
import ScrollComponent from '@/common/components/scrollComponent/ScrollComponent'
import ContentOurOrigins from '@/common/components/contentOurOrigins/ContentOurOrigins'
import Button from '@/common/components/button/Button'
import Section from '@/common/components/Section/Section'
import Widget from '@/common/components/widget/Widget'
import Grid from '@/common/components/grid/Grid'
import GalleryFootprint from '@/common/components/gallery/GalleryFootprint'
import Button2 from '@/common/components/button2/Button2'

export default function OuerOrigins() {
  return (
    <>


      
      <Section className="main-wrapper" background={false} fullWidth={false}>
        <Card HeaderTitle="<h1>The origin</h1>" styleHeaderPage="  HeaderPage left-border " styleContentPage="text-content"
          content={"<span>of our story</br>  MENAPS was born out of the desire to offer integrated consulting services starting from strategic vision to concrete operations combined with a strong digital dimension. </span>"} />
      </Section>
      <Section background={false} fullWidth={true}>
        <ContentOurOrigins padding={true} styleContentPage="contentPage my-3" content={[{ year: "2017", content: ["The findings:<br>Digital transformation is in full<br>acceleration, but the offer does not match the expectations of the customers.",] }, { year: "2019", content: [" Birth of MENAPS", "Opening of offices in Toulouse (France), <br>Tunis (Tunisia), Casablanca (Morocco)"] }, { year: "2020", content: ["Opening of offices in Toulouse (France) ", " Cross-Fertilization and diversification<br>in the automotive sector "] }, { year: "2021", content: ["Opening of offices in Toulouse (France) ", " Cross-Fertilization and diversification<br>in the automotive sector "] }]} />
      </Section>
      <Section className=" "  background={true} fullWidth={false}> 
      <Section className="mt-2 main-wrapper " background={true} fullWidth={false}>
        <Grid>
          <Card cardStyle="my-5" styleHeaderPage="text-white left-border " styleContentPage="text-white text-content " HeaderTitle="<h1>Let's find</h1>" content="<p>tomorrow's projects together</p>" />
          <Button2 styleButton="  button-width my-1" variant="link" title="Let's talk about it" href="/our-values" />

        </Grid>
      </Section>
      </Section>
    
     

    </>
  )
}


