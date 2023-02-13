
import Card from '@/common/components/card/Card'
import ScrollComponent from '@/common/components/scrollComponent/ScrollComponent'
import ContentOurOrigins from '@/common/components/contentOurOrigins/ContentOurOrigins'
import Button from '@/common/components/button/Button'
import Section from '@/common/components/Section/Section'
import Widget from '@/common/components/widget/Widget'
import Grid from '@/common/components/grid/Grid'
import GalleryFootprint from '@/common/components/gallery/GalleryFootprint'
import 'animate.css';
 
export default function OurDna() {
  let data = ["Relying on high value-added consulting and a wide range of integrated expertise in diversified sectors, MENAPS acts from strategic vision to operational implementation by combining innovation and new technologies, specifically digital.", "Added value and performance oriented, MENAPS offer is led by expert consultants with recognized experience, in a human-sized organization, remaining very attached to the vivacity and inventiveness of the initial start-up spirit, well adapted to the requirements of the current era.", "MENAPS group is also characterized by a strong ambition to democratize its high value-added services to the greatest number of companies. MENAPS is also committed to social, societal and environmental commitment.", "MENAPS group is driven by a dynamic of continuous development, based on a diversification of the consulting areas and an international scope in constant growth, as its network is deployed."]
  return (
    <>
      <Section className="my-lg-5" background={false} fullWidth={false}>
        <Grid>

          <Widget size={12} className=" d-sm-block d-md-none" >
            <div className=" "> <img className="imagemobile animate__animated  animate__zoomIn" src="Picto-Group.png" /></div>
          </Widget>
          <Widget size={12} className="" >
            <img className="image-menaps-group  " src="Logo-Group.png" />
          </Widget>
          <Widget size={12} className="position-relative" >
            <div className=" text-ourdna text-ourdna-mobile ">
              <div> Groupe de conseil international de nouvelle génération, à large spectre d’expertises intégrées et</div>
              <div> d’expériences métiers diversifiées,  intervenant de la réflexion stratégique à l’accompagnement opérationnel,</div>
              <div> avec une forte dimension d’innovation technologique et digitale, au service du « Business Empowerment » </div>
              des entreprises.
            </div>

            <div className="image-star"> <img className="d-md-block d-none animate__animated  animate__zoomIn" src="Picto-Group.png" /></div>
          </Widget>

        </Grid>
      </Section >

      <Section className="section2-ourdna  " background={true} fullWidth={false}>
        <Grid>


          {data.map((item: string, i: number) => (
            <Widget size={12} className="" >
              <div className="text-ourdna my-5" key={i} dangerouslySetInnerHTML={{ __html: item }} />

            </Widget>

          ))}


        </Grid>
      </Section >



      <Section className="my-5" background={false} fullWidth={false}>
        <Grid>

          <Widget size={6} className="  " >
            <div className="row"  >
              <div className="col-12"  >
                <Card HeaderTitle="<h1>Interested ?</h1>" styleHeaderPage="HeaderPage " styleContentPage="text-ourdna  "
                  content={"<p> Do not hesitate to contact our business referent</p>"} />
              </div>
              <div className="col-12  d-md-block d-none "  >
              <Button title="Contact Hamdi & Majd" href=" " variant="btnLink"  styleButton="w-50 py-3  centre section2--ourdna_button" animated={true} />
              </div>
            </div>
          </Widget>
          <Widget size={6} className="" >
          <div className=" "> <img className="hamdietmajd" src="Hamdi-et-Majd-ADN.png" /></div>

          </Widget>
          <Widget size={12} className="d-sm-block d-md-none py-5  " >
          <Button title="Contact Hamdi & Majd" href=" " variant="btnLink"  styleButton="w-50  centre section2--ourdna_button " animated={true} />

          </Widget>

        </Grid>
      </Section >
    </>
  )
}
