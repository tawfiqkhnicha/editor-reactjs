import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import Grid from "@/common/components/grid/Grid";
import Hotspot from "@/common/components/hotspot/Hotspot";
import Icon from "@/common/components/icon/Icon";
import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import { Icons } from "@/helpers/icons/Icons";

export default function Home() {
  return (
   
    <>
     <div className="siteHeader position-relative site-padding">
        
      </div> 

      <Card cardStyle="site-padding mt-5" HeaderTitle="<h2>What makes us <br> different?</H2>" content="<p>We combine our business expertise with our technological mastery and data in order to bring you sustainable and innovative solutions.</p>"/>
      <Hotspot />
      <Section background={true} fullWidth={false}>
          <Grid>
            <Widget size={6} className="order-xl-1 order-lg-1 order-md-1 order-2 order-sm-2  d-flex align-items-center justify-content-center">
               <Button variant="link" title=" Discover them" href="/our-values"/>
            </Widget>
            <Widget size={6} className="order-xl-2 order-lg-2 order-md-2 order-1 order-sm-1 d-flex align-items-center justify-content-start mt-5">
               <Card  styleHeaderPage="text-white" styleContentPage="text-white" HeaderTitle="<h2>Our values of excellence and <br> respect </H2>" content="<p>guide our actions and the way we work with our clients, partners and <br> collaborators. Our values allow us to surpass ourselves on a daily basis. </p>"/>
            </Widget>
          </Grid>
      </Section>

      <Section background={false} fullWidth={false}>
            <Grid>
            <Widget size={6} className="order-xl-1 order-lg-1 order-md-1 order-2 order-sm-2  d-flex align-items-center justify-content-center">

            </Widget>
            <Widget size={6} className="order-xl-2 order-lg-2 order-md-2 order-1 order-sm-1 d-flex align-items-center justify-content-start mt-5">
                <Card    HeaderTitle="<h2>Make us your <br> privileged ally </H2>" content="<p>As each company is unique, and each project has its own unique set of challenges and opportunities, we are ready to intervene at any stage of the construction process by providing our team of business experts</p>"/>
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

      
     
    </>
  )
}
