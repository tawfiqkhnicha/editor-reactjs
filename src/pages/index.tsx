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

export default function Home() {
  return (
   
    <Section fullWidth={true}>
      <Carousel />
      <Card cardStyle="mt-5 main-wrapper" HeaderTitle="<h2>What makes us <br> different?</H2>" styleHeaderPage="left-border" content="<p>We combine our business expertise with our technological mastery and data in order to bring you sustainable and innovative solutions.</p>"/>
      <Hotspot />
      <Section background={true} fullWidth={false}>
          <Grid>
            <Widget size={6} className="order-xl-1 order-lg-1 order-md-1 order-2 order-sm-2  d-flex align-items-center justify-content-center">
               <Button variant="link" title=" Discover them" href="/our-values"/>
            </Widget>
            <Widget size={6} className="order-xl-2 order-lg-2 order-md-2 order-1 order-sm-1 d-flex align-items-center justify-content-start mt-5">
               <Card  styleHeaderPage="text-white left-border" styleContentPage="text-white" HeaderTitle="<h2>Our values of excellence and <br> respect </H2>" content="<p>guide our actions and the way we work with our clients, partners and <br> collaborators. Our values allow us to surpass ourselves on a daily basis. </p>"/>
            </Widget>
          </Grid>
      </Section>

      <Section background={false} fullWidth={false}>
            <Grid>
            <Widget size={6} className=" d-flex align-items-center justify-content-center">
                  <img src="/hands.png" className="hands-home"/>
            </Widget>
            <Widget size={6} className=" d-flex align-items-center justify-content-start mt-5 ">
                <Card   styleHeaderPage="left-border"   HeaderTitle="<h2>Make us your <br> privileged ally </H2>" content="<p>As each company is unique, and each project has its own unique set of challenges and opportunities, we are ready to intervene at any stage of the construction process by providing our team of business experts</p>"/>
            </Widget>
            </Grid>
      </Section>
      <Section background={false} fullWidth={false}>
            <Grid className="gap-5">
              {Icons.map(item =>{
                return  <Widget size={2} className="d-flex align-items-center justify-content-start">
                 
                 <Icon text={item.text} icon={item.icon} />
                </Widget>
              })}
             
              <Widget size={12} className=" d-flex align-items-center justify-content-center mt-5">
                 <Button variant="link" title="Learn more" href="/our-values"/>
              </Widget>
            </Grid>
      </Section>
      <Section background={true} fullWidth={false}>
              <Card styleHeaderPage="left-border text-white" cardStyle="pt-5"  styleContentPage="text-white" HeaderTitle="<h2>Faites-nous <br> confiance</h2>" content="Nous vous proposons un accompagnement sur-mesure <br> et possédons une expertise poussée dans l’industrie." />
               <Grid className="gap-5 pb-5">
                {services.map(item =>{
                  return  <Widget size={3} className=" d-flex align-items-center justify-content-start mb-5 mt-5 ">
                  <Icon text={item.text} textColor="text-white" icon={item.icon} />
              </Widget>
                })}
                </Grid> 
      </Section>        
      <Section background={false} fullWidth={false}>
            <Grid className="gap-2">
            <Widget size={5} className="d-flex align-items-start justify-content-center">
                  <img className="talent-image" src="/Galerie-talents.png" />
            </Widget>
            <Widget size={5} className=" d-flex align-items-start justify-content-start mt-5 ">
                <Card  styleHeaderPage="left-border"  HeaderTitle="<h2>Nos talents sont <br>à votre service </H2>" content="<p>Au coeur des technologies, notre équipe <br> conçoit, développe et améliore chacun <br> de vos outils.</p>"/>
            </Widget>
            <Widget size={12} className=" d-flex align-items-center justify-content-center mt-5">
                 <Button variant="link" title="Faisons connaissance" href="/our-values"/>
              </Widget>
            </Grid>
      </Section>

     <Section background={true} fullWidth={false} className="position-relative height-l ">
      <Card cardStyle="main-wrapper  card-absolute "  styleContentPage="text-white" HeaderTitle="<h2>What if we carried <br> your project? </H2>" styleHeaderPage="left-border text-white" content="<p>Do you need human or technological resources to mature your ideas?</p>"/>
        <Button styleButton="btn-absolute" variant="link" title="Let's innovate together" href="/imagine"/>
        <img className="position-absolute imagine-image"  src="/Bandeau-Imagine.png" />
      </Section>

      <Section className="contact-us-home" background={false} fullWidth={false}>
                <Card   cardStyle=" contact-us-home-card" styleHeaderPage="left-border"   HeaderTitle="<h2>Contactez-nous </H2>" content="<p>afin de discuter plus en détails de vos enjeux.</p>"/>
                <Button styleButton="contact-us-section-btn" variant="link" title="Parlons-en" href="/contact"/>
                <img src="/bulle.png" className="bulle-image"/>
      </Section>
     
    </Section>
  )
}
