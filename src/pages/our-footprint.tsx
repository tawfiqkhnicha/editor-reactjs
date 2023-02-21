import Card from '@/common/components/card/Card'
import ScrollComponent from '@/common/components/scrollComponent/ScrollComponent'
import ContentOurOrigins from '@/common/components/contentOurOrigins/ContentOurOrigins'
import Button from '@/common/components/button/Button'
import Section from '@/common/components/Section/Section'
import Widget from '@/common/components/widget/Widget'
import Grid from '@/common/components/grid/Grid'
import GalleryFootprint from '@/common/components/gallery/GalleryFootprint'
import Button2 from '@/common/components/button2/Button2';
import Hotspot2 from '@/common/components/hotspot2/Hotspot2'
import Section2 from '@/common/components/Section2/Section2'
export default function OurFootprint() {
  const data = [
    { country: 'Toulouse - France', address: '18 place Roguet, 31300 Toulouse' },
    { country: 'Paris - France', address: 'Tour coeur Défense, 110 Espl Charles de Gaulle, 92400 Courbevoie' },
    { country: 'Casablanca - Morocco', address: '34 bd Zerktouni, Casablanca 20000' },
    { country: 'Tunis - Tunisia', address: '14 av de la Bourse Lac 2, Tunis 1053' },
    { country: 'Bangalore - India', address: '1321, 27th Main Rd, PWD Quarters, Sector 2, HSR Layout, Bengaluru, Karnataka 560102' }
  ];
  return (

    <>


      <Section className="main-wrapper" background={false} fullWidth={false}>
        <Card HeaderTitle="<h1>MENAPS expands its borders.</h1>" styleHeaderPage=" HeaderPage left-border " styleContentPage="text-content"
          content={"<p>de notre histoire</br> MENAPS est né de la volonté de proposer un conseil intégré allant de la vision stratégique à la concrétisation opérationnelle allié à une forte dimension digitale,</p>"} />
      </Section>

      <Section className="  section-margin-6">
        <Hotspot2 className="section-padding  mt-lg-5" />
      </Section>
      <Section2 className=" gallerywallaper " background={true} fullWidth={false}>
        <div className="secltion-expbg2  d-none  d-md-block"><img src="/carre-bg2.png" /></div>
        <Card cardStyle="main-wrapper mainindex text-white my-5" styleHeaderPage="text-white left-border " styleContentPage="text-white text-content " HeaderTitle="<h1>Nos locaux</h1>" content="<p>sont pensés pour le bien-etre de nos salariés .</p>" />
        <GalleryFootprint padding={true} data={[
          {
            customOverlay: (
              <div className="style-image ">
                <div className="style-element1">Tunis</div>
                <div className="style-element2">Tunisie</div>
              </div>
            ),

            src: "/galerie/Tunis-V2-1.png",
            original: "/galerie/Tunis-V2-1.png",
            width: 250,
            height: 280,


          },
          {
            customOverlay: (
              <div className="style-image ">
                <div className="style-element1">Toulouse</div>
                <div className="style-element2">France</div>
              </div>
            ),
            src: "/galerie/Toulouse-V2-3.png",
            original: "/galerie/Toulouse-V2-3.png",
            width: 600,
            height: 280,

          },
          {
            src: "/galerie/Paris-V2-3.png",
            original: "/galerie/Paris-V2-3.png",
            width: 320,
            height: 280,

            customOverlay: (
              <div className="style-image ">
                <div className="style-element1">Paris</div>
                <div className="style-element2">France</div>
              </div>
            ),
          },
          {
            src: "/galerie/Maroc-2-V2-1.png",
            original: "/galerie/Maroc-2-V2-1.png",
            width: 600,
            height: 280,
            customOverlay: (
              <div className="style-image ">
                <div className="style-element1">Casablanca</div>
                <div className="style-element2">Moroc</div>
              </div>
            ),
          },
          {
            src: "/galerie/Paris-V2-2.png",
            original: "/galerie/Paris-V2-2.png",
            width: 280,
            height: 280,

            customOverlay: (
              <div className="style-image ">
                <div className="style-element1">Paris</div>
                <div className="style-element2">France</div>
              </div>
            ),
          },
          {
            src: "/galerie/Bangalore-V2-1.png",
            original: "/galerie/Bangalore-V2-1.png",
            width: 300,
            height: 280,
            customOverlay: (
              <div className="style-image ">
                <div className="style-element1">Bangalore</div>
                <div className="style-element2">India</div>
              </div>
            ),
          },

          {
            src: "/galerie/Toulouse-V2-2.png",
            original: "/galerie/Toulouse-V2-2.png",
            width: 270,
            height: 280,
            customOverlay: (
              <div className="style-image ">
                <div className="style-element1">Toulouse</div>
                <div className="style-element2">France</div>
              </div>
            ),
          },
          {
            src: "/galerie/Maroc-2-V2-copie.png",
            original: "/galerie/Maroc-2-V2-copie.png",
            width: 400,
            height: 280,
            customOverlay: (
              <div className="style-image ">
                <div className="style-element1">Casablanca</div>
                <div className="style-element2">Moroc</div>
              </div>
            ),
          },
          {
            src: "/galerie/Tunis-2-V2-1.png",
            original: "/galerie/Tunis-2-V2-1.png",
            alt: "Big Ben - London",
            width: 450,
            height: 280,
            customOverlay: (
              <div className="style-image ">
                <div className="style-element1">Tunis</div>
                <div className="style-element2">Tunisie</div>
              </div>
            ),
          },

        ]
        }>

        </GalleryFootprint>

      </Section2>

      <Section2 className="addressvalues main-wrapper " background={false} fullWidth={false}> 
        <div className="d-flex  flex-wrap-our-values     mx-1"> 
          {data.map((item, i: number) => (
            <div className="content-location content  " >
              <p className="headercontetn  " key={i} dangerouslySetInnerHTML={{ __html: item.country }} />
              <p className="contentourvalues " key={i} dangerouslySetInnerHTML={{ __html: item.address }} /> 
            </div> 
          ))} 
        </div>
      </Section2>

      <Section2 className="position-relative " background={true} fullWidth={false}>
      <img src="/fleche-empreinte.png" className="fleche-blog  position-absolute" />
        <Section2 className="my-5 main-wrapper " background={true} fullWidth={false}>
          <Grid>
            <Card cardStyle="my-5" styleHeaderPage="text-white left-border " styleContentPage="text-white text-content " HeaderTitle="<h1>Interested</h1>" content="<p>in our news? </p>" />
            <Button2 styleButton="  button-width my-3" variant="link" title=" Discover them" href="/our-values" />

          </Grid>
        </Section2>
      </Section2>
    </>
  )
}


