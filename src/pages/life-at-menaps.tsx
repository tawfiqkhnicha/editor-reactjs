import Card from "@/common/components/card/Card";
import Grid from "@/common/components/grid/Grid";
import Icon from "@/common/components/icon/Icon";
import Section from "@/common/components/Section/Section";
import Widget from "@/common/components/widget/Widget";
import lifeAtMenapsPage from "../json/LifAtMenapsPage.json"

export default function LifeAtMenaps() {
    return (
    <>
      <Section className="main-wrapper section-margin-6 section-padding-x">
        <Card 
          HeaderTitle={lifeAtMenapsPage["section_1"].title}
          content={lifeAtMenapsPage["section_1"].content}
          styleContentPage="OurValuesheadertext"
          styleHeaderPage="left-border"
        />

        <Grid>
          <Widget size={8} className="d-flex justify-content-center align-items-center">

            <div className="d-flex justify-content-center align-items-start w-100">
              {lifeAtMenapsPage["section_2"].icons.map((item: {icon: string, description: string, subDescription: string}, index: number)=>{
                  return <div className="d-flex justify-content-start align-items-center flex-column w-20">
                                <img src={item.icon} />
                                <div className="d-flex justify-content-center align-items-center flex-column">
                                  <h2 className="main-description">{item.description}</h2>
                                  <div className="sub-description">{item.subDescription}</div>
                                </div>
                            </div>

                })}
            </div>
          </Widget>
          <Widget size={4} className="d-flex justify-content-center align-items-center">
            <img src={lifeAtMenapsPage["section_2"].image}/>
          </Widget>
        </Grid>
      </Section>

      <Section fullWidth background className="section-padding-y">
          <Section className="main-wrapper main-wrapper section-margin-6 section-padding-x">
          <Card 
          HeaderTitle={lifeAtMenapsPage["section_3"].section_1.title}
          content={lifeAtMenapsPage["section_3"].section_1.content}
          styleContentPage="OurValuesheadertext text-white"
          styleHeaderPage="left-border text-white"
        />
        <Grid >
            <Widget size={6} className="d-flex justify-content-start flex-column section-padding-x ">
            
               <div className="d-flex justify-content-start flex-column section-margin-6 ">
                <p className="what-you-will-find mb-5 text-left ">{lifeAtMenapsPage['section_3'].section_2.you_will_find.title}</p>
                {lifeAtMenapsPage['section_3'].section_2.you_will_find.items.map((item: string, index: number)=>{
                  return <Icon className="mt-4" text={item} textColor="text-white" icon={lifeAtMenapsPage['section_3'].section_2.icon} />

                })}
              </div>
              
            </Widget>
            <Widget size={6} className="d-flex justify-content-start  justify-content-center wont-find-container  section-padding-x">
              <div className="d-flex justify-content-start  flex-column section-margin-6">
                <p className="what-you-will-find mb-5 text-left del"><del>{lifeAtMenapsPage['section_3'].section_2.you_wont_find.title}</del></p>
                {lifeAtMenapsPage['section_3'].section_2.you_wont_find.items.map((item: string, index: number)=>{
                  return <Icon deletedText className="mt-4" text={item} textColor="text-white del" icon={lifeAtMenapsPage['section_3'].section_2.icon} />

                })}
              </div>
            
            </Widget>

          </Grid>      

          </Section>
        </Section>  
        <Section className="main-wrapper section-margin-6 section-padding-x">
        </Section>
        <Section background>
                
        </Section>
     </> 
    )
  }
  