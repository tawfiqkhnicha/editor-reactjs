import Button from "@/common/components/button/Button";
import Card from "@/common/components/card/Card";
import Grid from "@/common/components/grid/Grid";
import Icon from "@/common/components/icon/Icon";
import Section from "@/common/components/Section/Section";
import Typography from "@/common/components/typography/Typography";
import Widget from "@/common/components/widget/Widget";
import Input from "@/common/forms/input/Input";
import Textarea from "@/common/forms/textarea/Textarea";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Contact() {
  const [screenWidth, setScreenWidth] = useState(0)
  const domaine = [
    "Gestion De Projet", "Dev Fullstack", "Data & IA", "Cybersécurité", "Robotique", "Big Data", "Dev Ops", "Communication", "Marketing Digital"
  ];
  const addresses = [{
    country: '/franceflag.png', addresses: ['• 18 Place Roguet, 31300 Toulouse, France', '• Tour Coeur Défense 110 Esplanade du Général de Gaulle, 92400 Courbevoie, Ile de France, France']
  },
  {
    country: '/franceflag.png',
    addresses: [
      '• 14 avenue de la Bourse - Lac 2 Tunis 1053, Tunisie'
    ]
  },
  {
    country: '/franceflag.png',
    addresses: [
      '• 34 Boulevard Zerktouni Casablanca 20000, Maroc'
    ]
  },
  {
    country: '/franceflag.png',
    addresses: [
      '• 1321, 27th Main Rd, PWD Quarters, Sector 2, HSR Layout, Bengaluru, Karnataka 560102, Inde'
    ]
  }
  ]

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
        <Grid>
          <Widget size={6}>
            <Card
              HeaderTitle=" <h1>Contact us?  </h1>  "
              content="Do not hesitate ! We will be happy to exchange with you!"
              styleContentPage="OurValuesheadertext"
              styleHeaderPage="  HeaderPage left-border  "
            />
          </Widget>
          <Widget size={6} className={`d-flex justify-content-${screenWidth > 600 ? 'end' : "center mb-5"} position-relative`}>
            <img src="/chat.png" width={250} />
          </Widget>
        </Grid>
      </Section>


      <Section fullWidth background className="section-padding-y position-relative ">
        <img src="/cadre-contact.png" className="cadreimg d-md-block d-none " width={250} />


        <Section className="main-wrapper main-wrapper section-margin-0 section-padding-x">
          <Grid >
            <Widget size={6} className="bloc1 d-flex justify-content-start flex-column section-padding-x ">
              <Grid className="w-100">
                <Widget size={12} mobile className="mt-2">
                  <div className="title1contact">You want to know more?<br />Contact us here</div>
                </Widget>
                <Widget size={12} mobile className="mt-2">
                  <Input type="text" placeholder="First Name*" />
                </Widget>
                <Widget size={12} mobile className="mt-2">
                  <Input type="text" placeholder="Name*" />
                </Widget>
                <Widget size={12} mobile className="mt-2">
                  <Textarea placeholder="Message*" cols={40} rows={10} />
                </Widget>
                <Widget size={12} mobile className="mt-2">
                  <Link href={'/*'} className={`    btncontact  `}>send </Link>
                </Widget>

              </Grid>
            </Widget >






            <Widget size={6} className={`   `}>
              <div className="title2contact">You can write directly to hello@menaps.com</div>
              <div className=" text-center mb-5 "   >
                <img src="/fleche-contact-22.png   " className=" text-center imgflech" />
              </div>
              <div className="title2contact text-center mt-5">Or visit us here</div>
              <div className="addresses">
                {addresses.map((item, index) => (
                  <div key={index} className="address-container">
                    <img src={item.country} className="contactflagimg" />
                    <ul className="address-list">
                      {item.addresses.map((address, index) => (
                        <li className="address-list-item" key={index}>{address}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Widget>
          </Grid>

        </Section>
      </Section>

    </>
  )
}
