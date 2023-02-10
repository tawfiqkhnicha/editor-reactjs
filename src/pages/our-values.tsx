

import Card from '@/common/components/card/Card'
import ScrollComponent from '@/common/components/scrollComponent/ScrollComponent'
import ContentOurOrigins from '@/common/components/contentOurOrigins/ContentOurOrigins'
import Button from '@/common/components/button/Button'
import Section from '@/common/components/Section/Section'
import Widget from '@/common/components/widget/Widget'
import Grid from '@/common/components/grid/Grid'
import GalleryFootprint from '@/common/components/gallery/GalleryFootprint'
export default function OurValues() {
  let data =[{ title: "At Menaps, diversity is an international.", content:  " Cosmopolitan and multicultural wealth, the MENAPS group has been resolutely so since its creation, by the dynamic forces that compose it. It is more than ever today and will be tomorrow, as it develops and expands. An identity carried by the deep conviction that uniqueness is a strength and plurality is a wealth. "  } ,{ title: "At Menaps, diversity is an international.", content:  " Cosmopolitan and multicultural wealth, the MENAPS group has been resolutely so since its creation, by the dynamic forces that compose it. It is more than ever today and will be tomorrow, as it develops and expands. An identity carried by the deep conviction that uniqueness is a strength and plurality is a wealth. "  },{ title: "At Menaps, diversity is an international.", content:  " Cosmopolitan and multicultural wealth, the MENAPS group has been resolutely so since its creation, by the dynamic forces that compose it. It is more than ever today and will be tomorrow, as it develops and expands. An identity carried by the deep conviction that uniqueness is a strength and plurality is a wealth. "  },{ title: "At Menaps, diversity is an international.", content:  " Cosmopolitan and multicultural wealth, the MENAPS group has been resolutely so since its creation, by the dynamic forces that compose it. It is more than ever today and will be tomorrow, as it develops and expands. An identity carried by the deep conviction that uniqueness is a strength and plurality is a wealth. "  },{ title: "At Menaps, diversity is an international.", content:  " Cosmopolitan and multicultural wealth, the MENAPS group has been resolutely so since its creation, by the dynamic forces that compose it. It is more than ever today and will be tomorrow, as it develops and expands. An identity carried by the deep conviction that uniqueness is a strength and plurality is a wealth. "  } ] 

  return (
    <>
      <Section background={false} fullWidth={false}>
        <Card  styleHeaderPage="HeaderPage left-border " HeaderTitle="<h1>Our founding values</h1>"   styleContentPage="OurValuesheadertext   "
          content={"<p>are expressed in our daily work.</br> All of our employees share the same vision of the company and together they bring this common foundation to life.</p>"} />
      </Section>
      <Section className="sectionourvalues" background={false} fullWidth={true}>
        <img className="ourvaluesimage  " src="VALEURS-UK.png" />
      </Section>

      <Section className="sectionourvalues section2-ourdna py-5  " background={true} fullWidth={false}>
        <Grid>


          {data.map((item , i: number) => (
            <Widget size={2} className="content" >
              <p className="headercontetn  " key={i} dangerouslySetInnerHTML={{ __html: item.title }} />
              <p className="contentourvalues my-5" key={i} dangerouslySetInnerHTML={{ __html: item.content }} />

            </Widget>

          ))}
 
        </Grid>
      </Section>
 
      <Section className="my-5" background={false} fullWidth={false}>
        <Grid>
          <Card styleHeaderPage=" left-border"    styleContentPage=" OurValuesheadertext   " HeaderTitle="<h2>Our origins?</H2>" content="<p> Discover here our genesis  .</p>" />
          <Button styleButton="  button-width" variant="link" title="The origin" href="/The origin" />

        </Grid>
      </Section>
    </>
  )
}
