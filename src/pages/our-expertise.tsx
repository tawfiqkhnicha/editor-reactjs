import Button from "@/common/components/button/Button";
import Button2 from "@/common/components/button2/Button2";
import Card from "@/common/components/card/Card";
import Grid from "@/common/components/grid/Grid";
import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import { exp } from "@/helpers/services/exp";
import { useEffect, useState } from "react";

export default function OurExpertise() {


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
      <Section className="main-wrapper" background={false} fullWidth={false}>
        <Card HeaderTitle="<h1>Nos expertises</h1>" cardStyle="TitleHeader" styleHeaderPage="HeaderPage left-border " styleContentPage="text-content"
          content={"<p>sont pluridisciplinaires.</br> Grâce à nos différentes branches MENAPS, nous pouvons répondre à chacune de vos problématiques.</p>"} />
          <div className=" fleche-1-exp-container d-none  d-md-block d-flex justify-content-end w-90 mb-lg-5">
              <img src="/Fleche-exp-1.png" className="fleche-1-exp" />
           </div> 
       </Section>

      <Section className="main-wrapper selectcarr" background={false} fullWidth={false}>
        <div className="secltion-expbg  d-none  d-md-block"><img src="/carre-bg.png" /></div>
        <Grid className="">
              {exp.map(item => {
                return <Widget size={4} className="expStyle">
                  <div className="exp_content">
                        <div className="item_content ">
                              <div className="title">{item.Sous_title}</div>
                              <div className="desp">{item.text}</div>
                              <div className="btn">
                                { item.isShowing ?  (<Button2 styleButton="button-exp" variant="link" title={item.Text_btn}   href={item.url}  />) : <></>                         
                                }

                              
                              </div>
                         </div>
                      <img src={item.image}   className="fade-in-image"/>
                  </div>
                <p>{item.title} </p>
                </Widget>
               
              })}
            </Grid>
        </Section>
         
        <Section background={true} fullWidth={false} className="section-padding-y position-relative ">

         <img src="/Fleche-exp-2.png" className="fleche-exp-2 flech_width position-absolute  d-none  d-md-block" />
       

        <Section className="main-wrapper section-padding-x">
          <Card styleContentPage="text-white "
           HeaderTitle={'<h1>Interested</h1>'} styleHeaderPage="left-border text-white" 
           content={"<p>in our news?</p>"} />
        </Section>

          <Widget size={screenWidth > 600 && screenWidth <= 900 ? 6 : 6} className={`order-xl-1 order-lg-1 order-md-1 order-2 order-sm-2  d-flex align-items-center ${screenWidth > 900 ? "justify-content-center" : "justify-content-center"}`}>
              <Button className="btn-padding btn-style" variant="link" title=" Discover them" href="/our-values" />
          </Widget>

      </Section>




              
      <Section background={true} fullWidth={false} className="section-padding-y position-relative ">

<img src="/Fleche-exp-2.png" className="fleche-exp-2 flech_width position-absolute  d-none  d-md-block" />
      <Section className="my-5 main-wrapper " background={true} fullWidth={false}>
        <Grid>
          <Card styleHeaderPage="text-white left-border my-5" styleContentPage="text-white text-content " HeaderTitle="<h2>Trouvons ensemble</H2>" content="<p>les projets de demain </p>" />
          <Button2 styleButton="  button-width my-3" variant="link" title=" Discover them" href="/our-values" />

        </Grid>
      </Section>
      </Section>



      </>
    )
  }
  