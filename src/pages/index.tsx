import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import Carousel from "@/common/components/carousel/Carousel";
import Grid from "@/common/components/grid/Grid";
import Hotspot from "@/common/components/hotspot/Hotspot";
import Icon from "@/common/components/icon/Icon";
import Img from "@/common/components/image/Img";
import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import { Icons } from "@/helpers/icons/Icons";
import { services } from "@/helpers/services/services";
import { useEffect, useState } from "react";
import HomePageData from "../json/HomePage.json"


export default function Home() {


  const [screenWidth, setScreenWidth] = useState(0)

    

  const handleWindowResize = () => {
      setScreenWidth(window.innerWidth);
    }
 

  useEffect(() => {


      handleWindowResize();
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
  
    },)


  return (
   
  
    <Section fullWidth={true}>
   {/**  <Carousel />*/}  
        <Section className="main-wrapper section-margin-6">
          <Card 
           
          HeaderTitle={HomePageData['section_1'].title} 
          styleHeaderPage="left-border"
          content= {HomePageData['section_1'].content}/>
          <Hotspot className="section-padding mt-lg-5" />
        </Section>
       
      <Section background={true} fullWidth={false} className="section-padding-y">
        <Section className="main-wrapper">
          <Grid>
              <Widget size={ screenWidth > 600 && screenWidth <= 900 ? 6 : 4} className={`order-xl-1 order-lg-1 order-md-1 order-2 order-sm-2  d-flex align-items-center ${ screenWidth > 900 ? "justify-content-start" : "justify-content-center"}`}>
                <Button className="btn-padding btn-style" variant="link" title=" Discover them" href="/our-values"/>
              </Widget>
              <Widget size={screenWidth > 600 && screenWidth <= 900 ? 6 : 8} className={`order-xl-2 order-lg-2 order-md-2 order-1 order-sm-1 d-flex align-items-center justify-content-center mt-5`}>
                <Card  styleHeaderPage="text-white left-border" styleContentPage="text-white" HeaderTitle="<h2>Our values of excellence and <br> respect </H2>" content="<p>guide our actions and the way we work with our clients, partners and <br> collaborators. Our values allow us to surpass ourselves on a daily basis. </p>"/>
              </Widget>
            </Grid>
        </Section>
         
      </Section>

      <Section background={false} fullWidth={false} className="main-wrapper section-margin-6">
            <Grid>
            <Widget size={6} className=" d-flex align-items-center justify-content-center">
                  <img src="/hands.png" className="hands-home"/>
            </Widget>
            <Widget size={6} className=" d-flex align-items-center justify-content-start mt-5 ">
                <Card   styleHeaderPage="left-border"   HeaderTitle="<h2>Make us your <br> privileged ally </H2>" content="<p>As each company is unique, and each project has its own unique set of challenges and opportunities, we are ready to intervene at any stage of the construction process by providing our team of business experts</p>"/>
            </Widget>
            </Grid>
      </Section>
      <Section background={false} fullWidth={false} className="main-wrapper section-margin-6">
            <Grid className="grid-gap" >
              {Icons.map(item =>{
                return  <Widget size={3} className="d-flex align-items-center justify-content-start mb-lg-5 mt-xl-5 mb-sm-5 mt-sm-5">
                 
                 <Icon text={item.text} icon={item.icon} desktopHeight={item.height} desktopWidth={item.width} mobileHeight={item.mobileHeight} mobileWidth={item.mobileWidth}/>
                </Widget>
              })}
             
              <Widget size={12} className=" d-flex align-items-center justify-content-center mt-lg-5 mt-sm-5">
                 <Button className="btn-padding btn-style"  title="Learn more" href="/our-values"/>
              </Widget>
            </Grid>
      </Section>
      <Section background={true} fullWidth={false} className="section-padding-y">
        <Section className="main-wrapper y">
        <Card styleHeaderPage="left-border text-white" cardStyle="pt-5"  styleContentPage="text-white" HeaderTitle="<h2>Faites-nous <br> confiance</h2>" content="Nous vous proposons un accompagnement sur-mesure <br> et possédons une expertise poussée dans l’industrie." />
               <Grid className="gap-5 grid-gap">
                {services.map(item =>{
                  return  <Widget size={3} className=" d-flex align-items-center justify-content-start mb-lg-4 mt-lg-4  mb-sm-4 mt-sm-4">
                  <Icon text={item.text} textColor="text-white" icon={item.icon} />
              </Widget>
                })}
                </Grid> 
        </Section>
             
      </Section>        
      <Section background={false} fullWidth={false} className="main-wrapper section-margin-6">
            <Grid className="gap-2 ">
            <Widget size={6} className="d-flex align-items-start justify-content-center">
                  <img className="talent-image" src="/Galerie-talents.png" />
            </Widget>
            <Widget size={4} className=" d-flex align-items-start justify-content-start mt-5 ">
                <Card  styleHeaderPage="left-border"  HeaderTitle="<h2>Nos talents sont <br>à votre service </H2>" content="<p>Au coeur des technologies, notre équipe <br> conçoit, développe et améliore chacun <br> de vos outils.</p>"/>
            </Widget>
            <Widget size={12} className=" d-flex align-items-center justify-content-center mt-lg-5">
                 <Button className="btn-padding btn-style" title="Faisons connaissance" href="/our-values"/>
              </Widget>
            </Grid>
      </Section>

     <Section background={true} fullWidth={false} className="position-relative height-l section-padding-y">
        <Card cardStyle="card-absolute"  styleContentPage="text-white" HeaderTitle="<h2>What if we carried <br> your project? </H2>" styleHeaderPage="left-border text-white" content="<p>Do you need human or technological resources to mature your ideas?</p>"/>
          <Button className="btn-absolute btn-padding btn-style" variant="link" title="Let's innovate together" href="/imagine"/>
          <img className="position-absolute imagine-image "  src={ screenWidth > 600 ? "/Bandeau-Imagine.png" : "Imagine_mobile.png"} />
          
        </Section>

      <Section className="contact-us-home" background={false} fullWidth={false}>
                <Card   cardStyle=" contact-us-home-card" styleHeaderPage="left-border"   HeaderTitle="<h2>Contactez-nous </H2>" content="<p>afin de discuter plus en détails de vos enjeux.</p>"/>
                <Button className="contact-us-section-btn btn-padding btn-style" variant="link" title="Parlons-en" href="/contact"/>
                <img src="/bulle.png" className="bulle-image"/>
      </Section>
     
    </Section>
  )
}
