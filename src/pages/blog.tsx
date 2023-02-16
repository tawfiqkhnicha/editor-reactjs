import Button2 from "@/common/components/button2/Button2";
import Card from "@/common/components/card/Card";
import CardBlog from "@/common/components/cardBlog/CardBlog";
import Grid from "@/common/components/grid/Grid";
import Section from "@/common/components/Section/Section";
import Section2 from "@/common/components/Section2/Section2";
import Widget from "@/common/components/widget/Widget";

export default function Blog() {
  return (
    <>
      <Section2 className="blogHeader" background={false} fullWidth={false}>
       
        <div className="blogtitle ">
          <h1 className="blogHone ">Blog</h1>
        </div>
       
        
      </Section2>

      <Section className="my-5 main-wrapper" background={false} fullWidth={false}>
        <Grid>

          <Widget size={8} className="  " >
            <Grid>
              <div className={"col-12 col-sm-12 col-md-6 col-lg-6  col-xl-6   mb-lg-4  "} >
                <CardBlog imgsrc="blog/article-ux-design-menaps-miniature.jpg" Cardtitle="UX Design, a vision at the center of the human" content="Let’s start by defining the UX terminology. It represents the emotional experience of a user facing an interface, an object or a service. UX design." href="*" />

              </div>
              <div className={"col-12 col-sm-12 col-md-6 col-lg-6  col-xl-6   mb-lg-4  "} >
                <CardBlog imgsrc="blog/lets-talk-digital-transformation-menaps.jpg" Cardtitle="Card title" content="Some quick example text to build on the card title and make up the bulk of the card's content." href="*" />

              </div> <div className={"col-12 col-sm-12 col-md-6 col-lg-6  col-xl-6   mb-lg-4  "} >
                <CardBlog imgsrc="blog/menaps-Configuration-Management-as-an-enabler-for-Digital-Transformation.jpg" Cardtitle="Card title" content="Some quick example text to build on the card title and make up the bulk of the card's content." href="*" />

              </div>
            </Grid>

          </Widget>
          <Widget size={4} className="" >
            <div >
              <h5>Categories</h5>
              <ul className="category" >
                <li  ><a href="https://menaps.com/category/data-sciences/">Data Sciences</a>
                </li>
                <li  ><a href="https://menaps.com/category/expertise/">Digital expertise</a>
                </li>
                <li  ><a href="https://menaps.com/category/digital/">Digital transformation</a>
                </li>
                <li  ><a href="https://menaps.com/category/management/">Management and operations advisory</a>
                </li>
                <li  ><a href="https://menaps.com/category/recruitment/">Recruitment</a>
                </li>
              </ul>

            </div>

          </Widget>


        </Grid>
      </Section >
    </>
  )
}
