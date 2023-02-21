import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import Grid from "@/common/components/grid/Grid";
import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import { useState, useEffect } from "react";
import { services } from "../helpers/services/services"

export default function Recruiting() {

  const steps = {
    step_1: {
      title: "<h1>step 1</h1>",
      content: "<p>Check the match between the need and the profiles</p>"
    },
    step_2: {
      title: "<h1>step 2</h1>",
      content: "<p>Technical and HR meeting to discuss the candidate's projects and explain our expectations.</p>"
    },
    step_3: {
      title: "<h1>step 3</h1>",
      content: "<p>Response within one week. At MENAPS we are committed to providing feedback to each candidate, regardless of the outcome.</p>"
    }
  }

  const stepsArray = [
    {
      title: "<h1>step 1</h1>",
      content: "<p>Check the match between the need and the profiles</p>"
    },
    {
      title: "<h1>step 2</h1>",
      content: "<p>Technical and HR meeting to discuss the candidate's projects and explain our expectations.</p>"
    },
    {
      title: "<h1>step 3</h1>",
      content: "<p>Response within one week. At MENAPS we are committed to providing feedback to each candidate, regardless of the outcome.</p>"
    }

  ]



  const [screenWidth, setScreenWidth] = useState(0)



  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth);
  }


  useEffect(() => {


    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);

  },)
  const [content, setContent] = useState(steps["step_1"])
  return (
    <>
      <Section className="main-wrapper section-margin-6 section-padding-x ">
        <Card
          HeaderTitle="<h1>We hire</h1>"
          content="alents.
              Our state of mind and the flexibility of work we offer to our employees make us stand out from traditional companies."
          styleContentPage="OurValuesheadertext"
          styleHeaderPage="left-border"
        />

        <Grid>
          <Widget size={6} className="d-flex align-items-center">
            <Card
              content="We are building a company that can make big dreams come true and contribute to a better future.
              We want to surround ourselves with people who sharethe same values as us, and who are moving in the same direction."
            />
          </Widget>
          <Widget size={6} className="d-flex justify-content-center">
            <img src="/Diamant-Vie-chez.png" width={250} />
          </Widget>
        </Grid>
      </Section>
      <Section background className="section-padding-y ">
       
        <Section className="main-wrapper section-margin-6 section-padding-x section-padding-y">
          <Grid>
            <Widget size={4} className="position-relative" >
            <img src="/Fleche-1.png" width={ screenWidth <= 600 ? 70 : 150} className="position-absolute retation-60" style={{top: screenWidth <= 600 ? -70 : -200, right: screenWidth <= 600 ? 10 : -600}} />

              <div className={`d-flex justify-content-${ screenWidth <= 600 ? "center" : "start"}`}>
                <img src="/Cadre-Recrutement.png" width={204} />
                
              </div>
            {screenWidth <= 600 && <> <img src="/Fleche-1-1.png" width={40} className="position-absolute" style={{right: 0}} /> 
              <p className="text-white text-center mb-4"><strong>Featured open positions</strong></p> </>}
              <p className="text-white">
                <strong>
                  Cybersecurity EngineerFull Time
                </strong>
              </p>
              <p className="text-white">
                On constant watch for tools, applications,<br /> software to protect and enhance system security.
              </p>
              <p className="text-white">
                -&gt; Designs technical solutions <br />
                -&gt; Designs the architecture of an information technology system
              </p>
              {screenWidth <= 600 && <div className="d-flex justify-content-center  mb-5">
                <Button href="/unsolicited-application" title="Apply here" className="mt-4" />
              </div>}
            </Widget>
            {screenWidth > 600 && <Widget size={4} className="d-flex justify-content-center align-items-center flex-column">
              <p className="text-white">
                <strong>
                  Featured open positions
                </strong>
              </p>
             <img src="/Fleche-1-1.png" width={100} />
              <Button href="/unsolicited-application" title="Apply here" className="mt-4 btn-padding-m btn-style" />
            </Widget>}

            <Widget size={4} className="d-flex flex-column justify-content-end align-items-center" >
              <Grid>
                {services.map((item: any, index: number) => {
                  return <Widget mobile={screenWidth <= 600 ? true : false} size={screenWidth <= 600 ? 6 : 4} className="d-flex justify-content-center mt-4">
                    <img src={item.icon} />
                  </Widget>
                })}
              </Grid>
              <p className="text-white mt-4">
                We are looking for the rare pearl.
                Do not hesitate to consult our job offers!
              </p>
              <Button href="/unsolicited-application" title="Consult our offers" className="my-4  btn-padding-m  btn-style" />

            </Widget>
          </Grid>
        </Section>

      </Section>
      <Section className="main-wrapper section-margin-6 section-padding-x section-padding-y position-relative">
        <Card
          HeaderTitle="<h1>A simple
            and efficient</h1>"
          content="recruitment process.
            Our recruiters match the right candidate,<br /> not the other way around."
          styleContentPage="OurValuesheadertext"
          styleHeaderPage="left-border"
        />

        {screenWidth > 600 ?
          <Grid>
            <Widget size={6} className="d-flex align-items-center flex-column position-relative height-xl ">

              <img className="ampoule-image-1 ampoule-hover pe-pointer" src="/Process-de-recrutement-2-v2-1.png" onClick={() => setContent(steps['step_2'])} />
              <img src="/Process-de-recrutement-1-v2-1.png" className="ampoule-image-2 mr-4 ampoule-hover pe-pointer" onClick={() => setContent(steps['step_1'])} />
              <img src="/Ampoule-Recrutement-1.png" className="ampoule-image-3 " />
              <img src="/Process-de-recrutement-3-v3.png" className="ampoule-image-4 ml-4 ampoule-hover pe-pointer" onClick={() => setContent(steps['step_3'])} />
            </Widget>
            <Widget size={6} className="d-flex align-items-center justify-content-center">
              <Card
                HeaderTitle={content.title}
                content={content.content}
                styleContentPage="OurValuesheadertext"
                styleHeaderPage="left-border"
              />
            </Widget>
          </Grid> : <Grid>
            <Widget size={12} className="d-flex justify-content-center mb-5">
              <img src="/Ampoule-Recrutement_1.png" width={300} />
            </Widget>
            {stepsArray.map((item: any, index: number) => {
              return <Widget className="d-flex justify-content-start">
                <Card
                  HeaderTitle={item.title}
                  content={item.content}
                  styleContentPage="OurValuesheadertext"
                  styleHeaderPage="left-border"
                />
              </Widget>
            })}
            <Widget>

            </Widget>
          </Grid>
        }
              <img src="/Fleche-1-1.png" width={screenWidth<=600 ? 50 : 60 } className="position-absolute" style={{right: screenWidth<=600 ? 190: 400 }} />

      </Section>

      <Section background fullWidth className="section-padding-y">
        <Section className="main-wrapper section-margin-6 section-padding-x section-padding-y">
          <Card
            HeaderTitle="<h1>Join us?</h1>"
            content="<p>You can also submit an unsolicited application, we will systematically answer it. </p>"
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
