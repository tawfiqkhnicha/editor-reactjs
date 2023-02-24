import Button from "@/common/components/button/Button";
import Button2 from "@/common/components/button2/Button2";
import Card from "@/common/components/card/Card";
import Grid from "@/common/components/grid/Grid";
import ScrollComponent from "@/common/components/scrollComponent/ScrollComponent";
import Section2 from "@/common/components/Section2/Section2";
import Widget from "@/common/components/widget/Widget";
import { quoi, comment } from "@/helpers/quoi/quoi";
import Link from "next/link";
import { offres } from "@/helpers/offres/offres";
import Widget2 from "@/common/components/widget2/Widget2";
import Expertise from "@/common/components/expertise/Expertise";
export default function Imagine() {
  let data = [{ image1: "/majd.png", image2: "/aero.png", title1: "Majd Benabdallah", title2: "Secteur Aéronautique", text: "Majd dispose d’une expérience de plus de 15 ans en aéronautique auprès de grands groupes internationaux (Airbus, Bombardier, Safran, Stelia Aerospace) et leur écosystème. Ses compétences combinent non seulement l’aspect métier (Électrique, Mécanique, Structure en conception et calcul stress) mais aussi une forte dimension Processus, Méthodes et Outils régissant le cycle de vie de développement d’un programme avion. Durant son parcours il a travaillé sur différents programmes tel que le A350, A380, A320 Neo, CSeries / A220, Global 7000/8000." },
  { image1: "/emmanuel.png", image2: "/aero.png", title1: "Emmanuel Strub", title2: "Secteur Aéronautique", text: "Majd dispose d’une expérience de plus de 15 ans en aéronautique auprès de grands groupes internationaux (Airbus, Bombardier, Safran, Stelia Aerospace) et leur écosystème. Ses compétences combinent non seulement l’aspect métier (Électrique, Mécanique, Structure en conception et calcul stress) mais aussi une forte dimension Processus, Méthodes et Outils régissant le cycle de vie de développement d’un programme avion. Durant son parcours il a travaillé sur différents programmes tel que le A350, A380, A320 Neo, CSeries / A220, Global 7000/8000." }, { title: "At Menaps integrity is an imperative.", content: " A strong commitment to uprightness, moral rigor and a sense of ethics, is one of the essential foundations values of the Menaps Group.   Interact with respect, act with transparency, conduct yourself with probity, loyalty and fidelity is more than an expectation, a requirement for everyone, with everyone." },
  { image1: "/mehdi.png", image2: "/aero.png", title1: "Mehdi Sekkouri", title2: "Secteur Aéronautique", text: "Majd dispose d’une expérience de plus de 15 ans en aéronautique auprès de grands groupes internationaux (Airbus, Bombardier, Safran, Stelia Aerospace) et leur écosystème. Ses compétences combinent non seulement l’aspect métier (Électrique, Mécanique, Structure en conception et calcul stress) mais aussi une forte dimension Processus, Méthodes et Outils régissant le cycle de vie de développement d’un programme avion. Durant son parcours il a travaillé sur différents programmes tel que le A350, A380, A320 Neo, CSeries / A220, Global 7000/8000." },
  { image1: "/michel.png", image2: "/aero.png", title1: "Michel Rascol", title2: "Secteur Aéronautique", text: "Majd dispose d’une expérience de plus de 15 ans en aéronautique auprès de grands groupes internationaux (Airbus, Bombardier, Safran, Stelia Aerospace) et leur écosystème. Ses compétences combinent non seulement l’aspect métier (Électrique, Mécanique, Structure en conception et calcul stress) mais aussi une forte dimension Processus, Méthodes et Outils régissant le cycle de vie de développement d’un programme avion. Durant son parcours il a travaillé sur différents programmes tel que le A350, A380, A320 Neo, CSeries / A220, Global 7000/8000." },]
  const domaine = [
    "Gestion De Projet", "Dev Fullstack", "Data & IA", "Cybersécurité", "Robotique", "Big Data", "Dev Ops", "Communication", "Marketing Digital"
  ];
  return (
    <>
      <Section2 className="main-wrapper section1imagine">
        <img src="/logo-imagine-vector.svg" className="logo-imagine-vector" />
        <p className="text1imagine"  >Un accompagnement stratégique et opérationnel pour les entrepreneurs.</p>
        <p className="text2imagine" ><em>imagine</em> investit dans les projets digitaux et technologiques. Nous fournissons un soutien opérationnel qualifié aux entrepreneurs et nous les aidons à construire des entreprises leaders de leurs marchés.</p>
        <p className="text3imagine d-md-block d-none"  >Nos expertises</p>

      </Section2>
      <div className="divider"></div>

      <Section2 className="position-relative text-white imagine-section2  " background={true} fullWidth={false}>
        <Section2 className="  main-wrapper2  position-relative " background={true} fullWidth={false}>
          <p className="textexperience">Fort de plus de 100 ans d’expérience terrain cumulée dans les services digitaux, l’innovation et les nouvelles technologies auprès de grands groupes dans différents secteurs, MENAPS met à la disposition de votre projet ses experts ainsi qu’un accès privilégié à son réseau de clients  .</p>
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
            {comment.map((item, index) => {
              return <Widget2 key={index} size={3} className="  d-flex align-items-center justify-content-start mb-lg-4 mt-lg-4  mb-sm-4 mt-sm-4">
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
        <ScrollComponent styleContentPage="btn-footer my-3 " content={offres} />
      </Section2>




      <Section2 className="main-wrapper" background={false} fullWidth={false}>

        <p className="textdamien"  >imagine accueille tous les projets innovants conjuguant solutions digitales et nouvelles technologies.</p>

        <Grid className="    ">

          <Widget2 size={6} className="   align-items-center justify-content-start mb-lg-4 mt-lg-4  mb-sm-4 mt-sm-4">
            <div className="leftblocimagine ">
              <p className="textheaderdamien">  Un point de contact unique</p>
              <img className="damien-img" src="/damien-b.png" alt="Card image cap" />
              <div className="damient-title1  ">Damien Bigot</div>
              <div className="   "> <span dangerouslySetInnerHTML={{ __html: "<div  > PhD intelligence artificielle<br><strong>Coordinateur<em> imagine<br></em></strong> Responsable Innovation MENAPS</div>" }} />  </div>
              <br />
              <div className="damient-desc "> <span dangerouslySetInnerHTML={{ __html: "<p>Après une thèse en intelligence artificielle en partenariat avec&nbsp;<b data-stringify-type='bold'>Renault</b>&nbsp;et<b data-stringify-type='bold'>&nbsp;IBM</b>, Damien a cofondé&nbsp;<b data-stringify-type='bold'>Coovia,&nbsp;</b>une start-up spécialisée dans le déplacement domicile-travail.<br>Il rejoint un<b data-stringify-type='bold'>&nbsp;</b>cabinet conseil en tant que responsable innovation grands comptes :&nbsp;<b data-stringify-type='bold'>Airbus</b>&nbsp;et&nbsp;<b data-stringify-type='bold'>Renault.</b><br>En 2021, Damien rejoint&nbsp;<b data-stringify-type='bold'>linkeys</b>&nbsp;une jeune start-up suisse afin de les aider à industrialiser leur concept.</p>" }} />  </div>

            </div>
          </Widget2>

          <Widget size={6} className=" bluebloc    mb-lg-4 mt-lg-4  mb-sm-4 mt-sm-4">

            <h4 className="text1imagineblocblue mb-5"  ><span dangerouslySetInnerHTML={{ __html: "Une force de frappe </br>opérationnelle" }} /></h4>
            <p className="text2imagineblocblue" ><span dangerouslySetInnerHTML={{ __html: "locale (France), et globale (nearshore et offshore)</br> activable à très court terme." }} /></p>
            <ul className="domainelist">
              {domaine.map((item, index) => (

                <li className="list-item" key={index}>
                  <a href={item}>{item}</a>
                </li>
              ))}
            </ul>

          </Widget>
        </Grid>
        <div className={` containerbtn  mt-4    `}>
          <Link href={'/*'} className={` btnimagine2  mt-4    `}> Je suis intéresssé ! </Link>
        </div>
      </Section2>

      <Section2 className="  nossecteurs"  >
        <h1 className="text-center text-offres mb-5" >Nos secteurs d’expertise</h1>
        <div className={` main-wrapper     mt-4    `}>
          <div className="textexpertise"><span>L’expérience du groupe MENAPS sur ces trois secteurs historiques permet à imagine d’offrir un accompagnement enrichi sur ces thématiques et un accès privilégié à des interlocuteurs C-Level de ces industries.</span></div>


          <div className="d-flex  flex-wrap-our-values     mx-1">

            {data.map((item, i: number) => (
              <Expertise image1={item.image1} image2={item.image2} title1={item.title1} title2={item.title2} text={item.text} />
            ))}


          </div>
        </div>
      </Section2>

      <Section2 className="main-wrapper2 iframesection" background={false} fullWidth={false}  >
        <Grid className="    ">

          <Widget2 size={6} className="   align-items-center justify-content-start mb-lg-4 mt-lg-4  mb-sm-4 mt-sm-4">
            <div className="leftblocimagine ">
              <h2 className="rendezvoustitle">  Prenez 15’ pour parler de votre projet avec Damien !</h2>
              <img className="damien-img" src="/damien-b.png" alt="Card image cap" />
              <div className="damient-title1  ">Damien Bigot</div>
              <div className="   "> <span dangerouslySetInnerHTML={{ __html: "<div  > PhD intelligence artificielle<br><strong>Coordinateur<em> imagine<br></em></strong> Responsable Innovation MENAPS</div>" }} />  </div>
              <br />
              <div className="damient-desc "> <span dangerouslySetInnerHTML={{ __html: "<p>Et sinon envoyez-nous un courrier électronique : <br><span style='color:#181236b0;'  >imagine@menaps.com</span></p>" }} />  </div>
              
            </div>
          </Widget2>

          <Widget2 size={6} className=" iframe mx-auto shadow-lg  mb-lg-4 mt-lg-4  mb-sm-4 mt-sm-4">

          <iframe src="https://calendly.com/damien-bigot/imag-ne-by-menaps?embed_domain=menaps.com&amp;embed_type=Inline&amp;hide_gdpr_banner=1" width="100%" height="100%" frameborder="0"></iframe>
          </Widget2>
        </Grid>

      </Section2>

    </>
  )
}
