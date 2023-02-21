import Card from "@/common/components/card/Card";
import Grid from "@/common/components/grid/Grid";
import Icon from "@/common/components/icon/Icon";
import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import lifeAtMenapsPage from "../json/LifAtMenapsPage.json"
import Button from "@/common/components/button/Button";
import { useEffect, useState } from "react";

export default function LifeAtMenaps() {


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
        <Card 
          HeaderTitle={lifeAtMenapsPage["section_1"].title}
          content={lifeAtMenapsPage["section_1"].content}
          styleContentPage="OurValuesheadertext"
          styleHeaderPage="left-border"
        />

        <Grid>
          <Widget size={8} className={`d-flex ${screenWidth <=900 ? "justify-content-start align-items-start" : "justify-content-center align-items-center"} `}>

            <div className={`d-flex ${screenWidth <=900 ?  screenWidth <=600 ? "justify-content-center flex-column align-items-center " : "justify-content-start align-items-center ": "justify-content-center align-items-start" }   w-100 flex-wrap`}>
              {lifeAtMenapsPage["section_2"].icons.map((item: {icon: string, description: string, subDescription: string}, index: number)=>{
                  return <div key={index} className={`d-flex justify-content-start align-items-center flex-column w-20 mt-4`}>
                                <img src={item.icon} />
                                <div className="d-flex justify-content-center align-items-center flex-column">
                                  <h2 className="main-description text-center">{item.description}</h2>
                                  <div className="sub-description text-center">{item.subDescription}</div>
                                </div>
                            </div>

                })}
            </div>
          </Widget>
          <Widget size={4} className="d-flex justify-content-center align-items-center p-10 w-32">
            <img src={lifeAtMenapsPage["section_2"].image} className="diamant-image"/>
          </Widget>
        </Grid>
      </Section>

      <Section fullWidth background className="section-padding-y position-relative ">
      
            <img  src="/Fleche-1.png" className="life-page-fleche-1"/>
              
          <Section className={`  main-wrapper main-wrapper  section-padding-x d-flex ${screenWidth <=600 ? "justify-content-center" : "justify-content-start" }`}>
            <Card 
            cardStyle={`${screenWidth <= 600? "w-75" : ""}`}
            HeaderTitle={lifeAtMenapsPage["section_3"].section_1.title}
            content={lifeAtMenapsPage["section_3"].section_1.content}
            styleContentPage=" text-white"
            styleHeaderPage="text-white"
          />
          </Section>
          <Section className="main-wrapper main-wrapper section-margin-0 section-padding-x">
        <Grid >
            <Widget size={6} className="d-flex justify-content-start flex-column section-padding-x ">
            
               <div className="d-flex justify-content-start flex-column section-margin-6 ">
                <p className="what-you-will-find mb-5 text-left ">{lifeAtMenapsPage['section_3'].section_2.you_will_find.title}</p>
                {lifeAtMenapsPage['section_3'].section_2.you_will_find.items.map((item: string, index: number)=>{
                  return <Icon key={index} className="mt-4" text={item} textColor="text-white" icon={lifeAtMenapsPage['section_3'].section_2.icon} />

                })}
              </div>
              
            </Widget>
            <Widget size={6} className={`d-flex   ${screenWidth <=600 ? "justify-content-start mt-5":"justify-content-center"} wont-find-container  section-padding-x`}>
              <div className="d-flex justify-content-start  flex-column section-margin-6">
                <p className="what-you-will-find mb-5 text-left del"><del>{lifeAtMenapsPage['section_3'].section_2.you_wont_find.title}</del></p>
                {lifeAtMenapsPage['section_3'].section_2.you_wont_find.items.map((item: string, index: number)=>{
                  return <Icon  key= {index} deletedText className="mt-4" text={item} textColor="text-white del" icon={lifeAtMenapsPage['section_3'].section_2.icon} />

                })}
              </div>
            
            </Widget>

          </Grid>      

          </Section>
        </Section>  
        <Section className="main-wrapper section-margin-6 section-padding-x">
              <Card content={lifeAtMenapsPage['section_4'].content}
                bottomTitle={lifeAtMenapsPage['section_4'].title}
                styleHeaderPage=""

              />  
          <div className="position-relative w-100 relative-div-2">
            <img src="/Fleche-1-1.png" className="life-page-fleche-2"/>
          </div>      
        </Section>
        <Section background fullWidth className="section-padding-y">
          <Section  className="main-wrapper section-margin-6 section-padding-x">
            <Card 
                HeaderTitle={lifeAtMenapsPage["section_5"].title}
                content={lifeAtMenapsPage["section_5"].content}
                styleContentPage="OurValuesheadertext text-white"
                styleHeaderPage="left-border text-white"
              />
              <div className="d-flex justify-content-center align-items-center w-100">
                 <Button className="btn-padding btn-style" title="Unsolicited application" href="/our-values" />

              </div>
          </Section>
        </Section>
        
     </> 
    )
  }
  