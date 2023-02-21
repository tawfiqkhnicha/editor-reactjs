import Button2 from "@/common/components/button2/Button2";
import Card from "@/common/components/card/Card";
import Grid from "@/common/components/grid/Grid";
import Section2 from "@/common/components/Section2/Section2";
import Widget from "@/common/components/widget/Widget";
import Widget2 from "@/common/components/widgetimagine/Widget2";
import { quoi, comment } from "@/helpers/quoi/quoi";

export default function Imagine() {
  return (
    <>
      <Section2 className="main-wrapper section1imagine">
        <img src="/logo-imagine-vector.svg" className="logo-imagine-vector" />
        <p className="text1imagine"  >Un accompagnement stratégique et opérationnel pour les entrepreneurs.</p>
        <p className="text2imagine" ><em>imagine</em> investit dans les projets digitaux et technologiques. Nous fournissons un soutien opérationnel qualifié aux entrepreneurs et nous les aidons à construire des entreprises leaders de leurs marchés.</p>
        <p className="text3imagine "  >Nos expertises</p>

      </Section2>
      <div className="divider"></div>

      <Section2 className="position-relative text-white imagine-section2  " background={true} fullWidth={false}>
        <Section2 className="  main-wrapper2  position-relative " background={true} fullWidth={false}>
          <p>Fort de plus de 100 ans d’expérience terrain cumulée dans les services digitaux, l’innovation et les nouvelles technologies auprès de grands groupes dans différents secteurs, MENAPS met à la disposition de votre projet ses experts ainsi qu’un accès privilégié à son réseau de clients  .</p>
          <h1 className="text-center" >Quoi ?</h1>
          <Grid className="    ">
            {quoi.map(item => {
              return <Widget size={3} className="  d-flex align-items-center justify-content-start mb-lg-4 mt-lg-4  mb-sm-4 mt-sm-4">
                <div className="qouiItem"><p className="qouiItemtext"> <span dangerouslySetInnerHTML={{ __html: item }} /> </p></div>
              </Widget>
            })}
          </Grid>
          <h1 className="text-center" >Comment ?</h1>
          <Grid className="  d-flex justify-content-center  "> 
          {comment.map(item => {
            return <Widget2 size={3} className="  d-flex align-items-center justify-content-start mb-lg-4 mt-lg-4  mb-sm-4 mt-sm-4">
              <div className="qouiItem"><p className="qouiItemtext"> <span dangerouslySetInnerHTML={{ __html: item }} /> </p></div>
            </Widget2>
          })}
        </Grid>
        
      </Section2>
      <Section2 className="position-absolute pool  shadow-5 main-wrapper2 bg-white mx-auto "  >
        <div>

        sqsdq
        </div>
        
      </Section2>
    </Section2>
    </>
  )
}
