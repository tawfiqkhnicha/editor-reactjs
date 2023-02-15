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

    < >
        <Carousel/> 

      <Section className="main-wrapper section-margin-6 section-padding-x position-relative">

         <img src="/Fleche-1-Home.png" className="fleche-1-home flech_width position-absolute" />

        <Card
          HeaderTitle={HomePageData['section_1'].title}
          styleHeaderPage="left-border"
          content={HomePageData['section_1'].content} />
        <Hotspot className="section-padding mt-lg-5" />
      </Section>

      <Section background={true} fullWidth={false} className="section-padding-y position-relative ">
         <img src="/Fleche-2-Home.png" className="fleche-2-home flech_width position-absolute" />
        <Section className={screenWidth > 900 ? "w-100 m-auto" : "main-wrapper"}>
          <Grid>
            <Widget size={screenWidth > 600 && screenWidth <= 900 ? 6 : 6} className={`order-xl-1 order-lg-1 order-md-1 order-2 order-sm-2  d-flex align-items-center ${screenWidth > 900 ? "justify-content-center" : "justify-content-center"}`}>
              <Button className="btn-padding btn-style" variant="link" title=" Discover them" href="/our-values" />
            </Widget>
            <Widget size={screenWidth > 600 && screenWidth <= 900 ? 6 : 6} className={`order-xl-2 order-lg-2 order-md-2 order-1 order-sm-1 d-flex align-items-center justify-content-start mt-5`}>
              <Card cardStyle={`${screenWidth > 900 ? "w-80" : ""}`} styleHeaderPage="text-white left-border" styleContentPage="text-white" HeaderTitle={HomePageData['section_2'].title}
               content={HomePageData['section_2'].content} />
            </Widget>
          </Grid>
        </Section>

      </Section>

      <Section background={false} fullWidth={false} className="main-wrapper section-margin-6 section-padding-x position-relative margin-bottom-xxl">
        <img src="/Fleche-3-Home.png" className="fleche-3-home position-absolute" />
        <Grid>
          <Widget size={6} className={` d-flex ${screenWidth <= 600 ? "justify-content-center " : "justify-content-start " } align-items-start mt-mobile`}>
            <img src={HomePageData['section_3'].image} className="hands-home" />
          </Widget>
          <Widget size={6} className=" d-flex align-items-start justify-content-end mt-5 ">
            <Card
            cardStyle="w-100" 
            styleHeaderPage="left-border" 
            HeaderTitle={HomePageData['section_3'].title}
            content={HomePageData['section_3'].content} />
          </Widget>
        </Grid>
      </Section>

      <Section background={false} fullWidth={false} className="main-wrapper section-margin-6 section-padding-x">
        <Grid className="grid-gap" >
          {Icons.map(item => {
            return <Widget size={3} className="d-flex align-items-center justify-content-start mb-lg-5 mt-xl-5 mb-sm-5 mt-sm-5">

              <Icon text={item.text} icon={item.icon} desktopHeight={item.height} desktopWidth={item.width} mobileHeight={item.mobileHeight} mobileWidth={item.mobileWidth} />
            </Widget>
          })}

          <Widget size={12} className=" d-flex align-items-center justify-content-center mt-lg-5 mt-sm-5">
            <Button className="btn-padding btn-style" title="Learn more" href="/our-values" />
          </Widget>
        </Grid>
      </Section>

      <Section background={true} fullWidth={false} className="section-padding-y section-padding-x  ">
        <Section className="main-wrapper section-padding-x section-padding-y ">
          <Card styleHeaderPage="left-border text-white"  styleContentPage="text-white"
          HeaderTitle={HomePageData['section_4'].title} 
          content={HomePageData['section_4'].content} />
           <div className=" fleche-4-home-container d-flex justify-content-end w-90 mb-lg-5">
              <img src="/Fleche-4-Home.png" className="fleche-4-home" />
           </div> 
          
          <Grid className="gap-5 grid-gap">
            {services.map(item => {
              return <Widget size={3} className=" d-flex align-items-center justify-content-start mb-lg-4 mt-lg-4  mb-sm-4 mt-sm-4">
                <Icon text={item.text} textColor="text-white" icon={item.icon} />
              </Widget>
            })}
          </Grid>
        </Section>

      </Section>

      <Section background={false} fullWidth={false} className="main-wrapper section-margin-6  position-relative">
        
        <img src="/Fleche-5-Home.png" className="fleche-5-home position-absolute" />
        <Grid className="gap-2 ">
          <Widget size={6} className="d-flex align-items-start justify-content-center">
            <img className="talent-image" src={HomePageData['section_5'].image}/>
          </Widget>
          <Widget size={4} className=" d-flex align-items-start justify-content-start mt-5 ">
            <Card styleHeaderPage="left-border"
             HeaderTitle={HomePageData['section_5'].title}
             content={HomePageData['section_5'].content} />
          </Widget>
          <Widget size={12} className=" d-flex align-items-center justify-content-center mt-lg-5 mt-sm-6">
            <Button className="btn-padding btn-style" title="Faisons connaissance" href="/our-values" />
          </Widget>
        </Grid>
      </Section>

      <Section background={true} fullWidth={true} className=" section-padding-y ">

        <Section className="main-wrapper section-padding-x">
          <Card styleContentPage="text-white "
           HeaderTitle={HomePageData['section_6'].title} styleHeaderPage="left-border text-white" 
           content={HomePageData['section_6'].content}/>
        </Section>

        <Section className="position-relative  height-l">
          <div className={`${screenWidth <= 600 ? "div-absolute" : ""}`}>
            <Button className={`${screenWidth > 600 ?  "btn-absolute" : ""} btn-padding btn-style`} variant="link" title="Let's innovate together" href="/imagine" />
          </div>  
          
          <img className="position-absolute imagine-image " src={screenWidth > 600 ? "/Bandeau-Imagine.png" : "Imagine_mobile.png"} />
        </Section>

      </Section>

      <Section className="main-wrapper section-padding-x position-relative pb-6" background={false} fullWidth={false}>
      <img src="/Fleche-5-Home.png" className="fleche-6-home position-absolute" />
        <Grid>
          <Widget size={5} className=" d-flex flex-column justify-content-start mt-5">

            <Card cardStyle="mt-sm-7" styleHeaderPage="left-border"
             HeaderTitle={HomePageData['section_7'].title}
             content={HomePageData['section_7'].content} />
            {screenWidth > 600 && <div className="d-flex justify-content-end">
              <Button className="btn-padding btn-style card-btn" variant="link" title="Parlons-en" href="/contact" />
            </div>}
          </Widget>
          <Widget size={6} className={`d-flex align-items-center   ${screenWidth > 600 ? "justify-content-end" : "flex-column justify-content-center"} justify-content-end`}>
            <img src={HomePageData['section_7'].image} className="bulle-image " />
            {screenWidth <= 600 &&
              
               <Button className="btn-padding btn-style card-btn mt-5" variant="link" title="Parlons-en" href="/contact" />
            }
          </Widget>
        </Grid>

      </Section>

    </ >
  )
}
