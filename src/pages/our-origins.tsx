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
        <Card HeaderTitle="<h1>La génèse</h1>" styleHeaderPage="  HeaderPage left-border " styleContentPage="text-content"
          content={"<p>de notre histoire</br> MENAPS est né de la volonté de proposer un conseil intégré allant de la vision stratégique à la concrétisation opérationnelle allié à une forte dimension digitale,</p>"} />
      </Section>
      <Section background={false} fullWidth={true}>
        <ContentOurOrigins padding={true} styleContentPage="contentPage my-3" content={[{ year: "2017", content: ["Naissance de MENAPS", "Le constat : La transformation digitale est en pleine accélération, mais l’offre n’est pas en adéquation.", "Ouverture des bureaux à Toulouse (France),<br> Tunis (Tunisie), Casablanca (Maroc)"] }, { year: "2018", content: ["Le constat :<br>La transformation digitale est en pleine<br>accélération, mais l’offre n’est pas en adéquation."] }, { year: "2019", content: ["ahmed", "raed"] }, { year: "2020", content: ["ahmed", "raed"] }, { year: "2021", content: ["ahmed", "raed"] }]} />
      </Section>
      <Section className=" "  background={true} fullWidth={false}> 
      <Section className="my-5 main-wrapper " background={true} fullWidth={false}>
        <Grid>
          <Card cardStyle="my-5" styleHeaderPage="text-white left-border " styleContentPage="text-white text-content " HeaderTitle="<h1>Trouvons ensemble</h1>" content="<p>les projets de demain </p>" />
          <Button2 styleButton="  button-width my-3" variant="link" title=" Discover them" href="/our-values" />

        </Grid>
      </Section>
      </Section>
    
     

    </>
  )
}


