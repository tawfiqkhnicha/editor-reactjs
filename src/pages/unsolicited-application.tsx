import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import Grid from "@/common/components/grid/Grid";
import Icon from "@/common/components/icon/Icon";
import Section from "@/common/components/Section/Section";
import Typography from "@/common/components/typography/Typography";
import Widget from "@/common/components/widget/Widget";
import Input from "@/common/forms/input/Input";
import Textarea from "@/common/forms/textarea/Textarea";
import { useEffect, useState } from "react";
import UnsolicitedApplicationPage from "../json/UnsolicitedAplicationPage.json"
export default function UnsolicitedApplication() {


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
    <>
      <Section className="main-wrapper section-margin-6 section-padding-x">
        <Grid>
          <Widget size={12}>
            <Card
              HeaderTitle={UnsolicitedApplicationPage["section_1"].title}
              content={UnsolicitedApplicationPage["section_1"].content}
              styleContentPage="OurValuesheadertext"
              styleHeaderPage="left-border"
            />
          </Widget>
          <Widget size={12} className={`d-flex justify-content-${screenWidth > 600 ? 'end': "center mb-5"} position-relative`}>
            <img src={UnsolicitedApplicationPage["section_1"].image} width={200} />
            <img  src="/Fleche-1-recrutement.png"  className="position-absolute" width={screenWidth > 900 ? 65: 50} style={{left: screenWidth > 600 ? 350 : 60, top:  180}}/>
          </Widget>
        </Grid>
      </Section>

      <Section className="section-padding-y" background>
        <Section className="main-wrapper section-margin-6 ">
          <Typography title="Send us your Resume!" />
          <Grid>
            <Widget size={12}>
              <Grid>
                <Widget size={6} mobile className="mt-5">
                  <Input type="text" placeholder="First Name*" />
                </Widget>
                <Widget size={6} mobile className="mt-5">
                  <Input type="text" placeholder="Name*" />
                </Widget>
              </Grid>
              <Grid className="mt-4">
                <Widget size={6} mobile className="mt-4">
                  <Input type="text" placeholder="Phone*" />
                </Widget>
                <Widget size={6} mobile className="mt-4">
                  <Input type="text" placeholder="Email*" />
                </Widget>
              </Grid>
            </Widget>
            <Widget size={12} className="d-flex justify-content-start mt-5">
              <p className="label">Download your Cv here (PDF)*</p>
              <div className="w-30">
                <Input type="file" background />
              </div>
            </Widget>
            <Widget size={12} className="mt-5">
              <p className="label">
                If you are creative, don’t hesitate to send us a portfolio or a video on talents@skourcing.com
              </p>
            </Widget>
            <Widget size={12} className=" mt-5">
              <Textarea placeholder="Message*" cols={40} rows={10} />
            </Widget>
            <Widget size={12} className="d-flex  mt-5">
              <div className="d-flex justify-content-start align-items-center">
                <Button className="btn-padding-m  btn-style" title="Send" href="/our-values" />
              </div>
            </Widget>
          </Grid>

        </Section>

      </Section>
      <Section className="main-wrapper section-margin-6 section-padding-x position-relative ">
        <Card
          HeaderTitle={UnsolicitedApplicationPage["section_2"].title}
          content={UnsolicitedApplicationPage["section_2"].content}
          styleContentPage="OurValuesheadertext"
          styleHeaderPage="left-border"
        />
         <Grid className="mb-lg-5">
          {UnsolicitedApplicationPage['section_3'].map((item: any, index: number)=>{
              return <Widget size={12}>
                <Icon className={`mt-2 ${screenWidth <=600 ? "flex-column center-text": ""}`} textColor={`${screenWidth <= 600 ? "center-text": ""}`} icon={item.step} text={item.descreption}/>
              </Widget> 
          })}
          
         </Grid> 

         <img src="/Fleche-1-1.png" width={screenWidth >900 ? 75 : 40} className="position-absolute " style={{right:screenWidth >900 ? 450 : 300, bottom: screenWidth >900 ? -200 : -100}}/>

      </Section>

      <Section background fullWidth className="section-padding-y ">
        <Section className="main-wrapper section-margin-6 section-padding-x">
          <Card
            HeaderTitle={UnsolicitedApplicationPage["section_4"].title}
            content={UnsolicitedApplicationPage["section_4"].content}
            styleContentPage="OurValuesheadertext text-white"
            styleHeaderPage="left-border text-white"
          />
          <div className="d-flex justify-content-center align-items-center w-100">
            <Button className="btn-padding btn-style" title="Discover us" href="/our-values" />
          </div>
        </Section>
      </Section>

    </>
  )
}
