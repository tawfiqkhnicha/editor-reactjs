import Button from "@/common/components/button/Button";
import Button2 from "@/common/components/button2/Button2";
import Card from "@/common/components/card/Card";
import Grid from "@/common/components/grid/Grid";
import ScrollComponent from "@/common/components/scrollComponent/ScrollComponent";
import Section2 from "@/common/components/Section2/Section2";
import Widget from "@/common/components/widget/Widget";
import Widget2 from "@/common/components/widgetimagine/Widget2";
import { quoi, comment } from "@/helpers/quoi/quoi";
import Link from "next/link";
import { offres } from "@/helpers/offres/offres";
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
            {quoi.map((item, index) => {
              return <Widget key={index} size={3} className="  d-flex align-items-center justify-content-start mb-lg-4 mt-lg-4  mb-sm-4 mt-sm-4">
                <div className="qouiItem"><p className="qouiItemtext"> <span dangerouslySetInnerHTML={{ __html: item }} /> </p></div>
              </Widget>
            })}
          </Grid>
          <h1 className="text-center" >Comment ?</h1>
          <Grid className="  d-flex justify-content-center  ">
            {comment.map((item,index ) => {
              return <Widget2  key={index} size={3} className="  d-flex align-items-center justify-content-start mb-lg-4 mt-lg-4  mb-sm-4 mt-sm-4">
                <div className="qouiItem">
                  <p className="qouiItemtext"> <span dangerouslySetInnerHTML={{ __html: item }} /> </p></div>
              </Widget2>
            })}
          </Grid>

        </Section2>
        <Section2 className="position-absolute pool  shadow-lg main-wrapper2 bg-white mx-auto "  >
          <p className="textpool "  >Un pool unique de compétences.</p>
          <Link href={'/*'} className={`position-relative btnimagine     `}>  Parlons-en ! </Link>
        </Section2>
      </Section2>

      <Section2 className="     "  >
        <h1 className="text-center text-offres" >Nos offres</h1>
        <ScrollComponent styleContentPage="btn-footer my-3" content={offres} />
      </Section2>

      <Section2 className="main-wrapper" background={false} fullWidth={false}>

        <p className="textdamien"  >imagine accueille tous les projets innovants conjuguant solutions digitales et nouvelles technologies.</p>

        <Grid className="    ">

          <Widget size={6} className="  d-flex align-items-center justify-content-start mb-lg-4 mt-lg-4  mb-sm-4 mt-sm-4">
            <div className=" ">
              <p className="qouiItemtext">  Un point de contact unique</p>
              <img className="damien-img" src="/damien-b.png" alt="Card image cap" />
              <div className="damient-title1  ">Damien Bigot</div>
              <div className="   "> <span dangerouslySetInnerHTML={{ __html:  "<div  > PhD intelligence artificielle<br><strong>Coordinateur<em> imagine<br></em></strong> Responsable Innovation MENAPS</div>" }} />  </div>
              <br/> 
              <div className="damient-desc "> <span dangerouslySetInnerHTML={{ __html:  "<p>Après une thèse en intelligence artificielle en partenariat avec&nbsp;<b data-stringify-type='bold'>Renault</b>&nbsp;et<b data-stringify-type='bold'>&nbsp;IBM</b>, Damien a cofondé&nbsp;<b data-stringify-type='bold'>Coovia,&nbsp;</b>une start-up spécialisée dans le déplacement domicile-travail.<br>Il rejoint un<b data-stringify-type='bold'>&nbsp;</b>cabinet conseil en tant que responsable innovation grands comptes :&nbsp;<b data-stringify-type='bold'>Airbus</b>&nbsp;et&nbsp;<b data-stringify-type='bold'>Renault.</b><br>En 2021, Damien rejoint&nbsp;<b data-stringify-type='bold'>linkeys</b>&nbsp;une jeune start-up suisse afin de les aider à industrialiser leur concept.</p>" }} />  </div>

            </div>
          </Widget>

          <Widget size={6} className="  d-flex align-items-center justify-content-start mb-lg-4 mt-lg-4  mb-sm-4 mt-sm-4">
            <div className=" ">
            <p className="qouiItemtext">  Un point de contact unique</p>
            </div>
          </Widget>
        </Grid>
      </Section2>



    </>
  )
}
