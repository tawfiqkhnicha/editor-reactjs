import Button2 from "@/common/components/button2/Button2";
import Card from "@/common/components/card/Card";
import CardSolutions from "@/common/components/cardSolutions/CardSolutions";
import Grid from "@/common/components/grid/Grid";
import Icon from "@/common/components/icon/Icon";
import Section from "@/common/components/Section/Section";
import Section2 from "@/common/components/Section2/Section2";
import Widget from "@/common/components/widget/Widget"; 
import { domaines } from "@/helpers/domaines/domaines";
import { solutions } from "@/helpers/solutions/solutions";

export default function VSESMESolutions() {
  return (
    <>
      <Section className="vesfirstblock main-wrapper position-relative" background={false} fullWidth={false}>
        <img src="/icone-tpe-pme-intro.png" className=" icone-tpe-pme-intro position-absolute" />
        <Card HeaderTitle="<h1>VSE & SME solutions</h1>" cardStyle="TitleHeader" styleHeaderPage="HeaderPage left-border " styleContentPage="text-content"
          content={"<p>Nous adaptons notre offre aux TPE et PME qui aspirent à transformer leurs métiers par le biais du digital. Nos produits et services sont parfaitement adaptés à vos problématiques et besoins.</p>"} />
      </Section>

      <Section2 background={true} fullWidth={false} className=" areasofintervention   ">

        <Section2 className=" main-wrapper   section-padding-y position-relative">
          <h1 className="textvse">Nos domaines d’intervention</h1>
          <img src="/Fleche-exp-1.png" className="fleche-vse-sme-solutions position-absolute" />

          <Grid className="gap-5 grid-gap ">
            {domaines.map((item, index) => {
              return <Widget key={index} size={3} className=" d-flex align-items-center justify-content-start mb-lg-4 mt-lg-4  mb-sm-4 mt-sm-4">
                <Icon text={item.text} textColor="text-white" icon={item.icon} />
              </Widget>
            })}
          </Grid>
          <img src="/fleche-solution-tpe2.png" className="fleche-bottom position-absolute" />
        </Section2>

      </Section2>

      <Section2 background={false} fullWidth={false} className=" main-wrapper  ensavoirplus   ">
        <h1 className="Nosdomaines ">En savoir +</h1>
        <Grid className="  ">
          {solutions.map((item, index) => {
            return <Widget key={index} size={4} className="   d-flex align-items-center justify-content-start mb-lg-4 mt-lg-4  mb-sm-4 mt-sm-4">
             <CardSolutions title={item.title}  text={item.text} icon={item.icon} /> 
            </Widget>
          })}
        </Grid>

      </Section2>

      <Section2 className=" "  background={true} fullWidth={false}> 
      <Section2 className="  main-wrapper position-relative " background={true} fullWidth={false}>
      <img src="/etoile-solution-tpe.png" className=" etoile-solution position-absolute" />
      <img src="/fleche-solution-tpe3.png" className="fleche-solution position-absolute" />
        <Grid>
          <Card cardStyle="mt-5" styleHeaderPage="text-white left-border " styleContentPage="text-white text-content " HeaderTitle="<h1>Notre ADN</h1>" content="<p class='font-size: 16px;'>vous intéresse ? </p>" />
          <Button2 styleButton="  button-width my-3" variant="link" title="Découvrez-nous" href="/our-values" />

        </Grid>
      </Section2>
      </Section2>

    </>
  )
}
