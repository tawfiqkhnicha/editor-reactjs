import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import Grid from "@/common/components/grid/Grid";
import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import { useEffect, useState } from "react";
import OurTalentPage from "../json/OurTalentPage.json"
import { groupArray } from "@/helpers/helpers";
export default function OurTalents() {


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
          HeaderTitle={OurTalentPage['section_1'].title}
          content={OurTalentPage['section_1'].content}
          styleContentPage="OurValuesheadertext"
          styleHeaderPage="left-border"
        />
        <div className="position-relative relative-div">
             <img src="/Fleche-nos-metiers.png" className="fleche-nos-metiers" />
        </div>
      </Section>

      {

          groupArray(OurTalentPage['section_2'], 3).map((item: any, index: number) => {

          return <Section key={index} disableMargin background={index % 2 !== 0} className="section-padding-x section-padding-y d-flex justify-content-center ">
            <Grid  key={index} className=" main-wrapper">
              {item.map((item: any, i: number) => {
                return <Widget key={i} size={4} className="d-flex justify-content-center align-items-center ">
                  <Section className="d-flex flex-column justify-ceontent-center align-items-center" >
                    <img src={item.picture} className="igure-img img-fluid" />
                    <h2 className={`figure-caption text-center description ${index % 2 !== 0 ? "text-white" : "globale-primary-color"} `}>{item.speciality}</h2>
                  </Section>
                </Widget>
              })}
            </Grid>
          </Section>


        })
      }


      <Section className={`main-wrapper section-margin-6 section-padding-x position-relative margin-bottom-xxl ${screenWidth <= 600 ? "mobile-margin" : "" } `}>
        <img src="Fleche-nos-metiers-2.png" className="fleche-nos-metiers-2"/>
        <Grid>
          <Widget size={ screenWidth <=990 ? 8 : 6} className="d-flex justify-content-start flex-column">
            <Card
              HeaderTitle={OurTalentPage['section_3'].title}
              content={OurTalentPage['section_3'].content}
              styleContentPage="OurValuesheadertext"
              styleHeaderPage="left-border"
            />
            </Widget>
          <Widget size={ screenWidth <=990 ? 4 : 6}></Widget>
          <Grid>
            <Widget size={ screenWidth <=990 ? 8 : 6}>
              <div className={`d-flex ${screenWidth <= 600 ? "justify-content-center": "justify-content-end"} `}>
                <Button className="btn-padding btn-style card-btn" variant="link" title="Parlons-en" href="/contact" />
              </div>
            </Widget>
            <Widget size={ screenWidth <=990 ? 4 : 6}></Widget>

          </Grid>
        </Grid>

      </Section>

    </>
  )
}
