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
export default function OurFootprint() {
  return (
    <>
      

      <Section className="main-wrapper" background={false} fullWidth={false}>
        <Card HeaderTitle="<h1>MENAPS expands its borders.</h1>" styleHeaderPage=" HeaderPage left-border " styleContentPage="text-content"
          content={"<p>de notre histoire</br> MENAPS est né de la volonté de proposer un conseil intégré allant de la vision stratégique à la concrétisation opérationnelle allié à une forte dimension digitale,</p>"} />
      </Section>

      <Section className="  section-margin-6"> 
        <Hotspot2 className="section-padding  mt-lg-5" />
      </Section>
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
          width:250,
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
      }></GalleryFootprint>

    </>
  )
}


