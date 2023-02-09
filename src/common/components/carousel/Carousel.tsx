import Card from "../card/Card"

export default function Carousel(){
    return (<>

<div  className=" slide  w-100 backgroundColor carousel" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item  active position-relative mt-5">
    <img className="carousel-image"  src="/Silhouette-Home.png" alt="First slide" />
        <Card styleHeaderPage="text-white"  styleContentPage ="text-white" HeaderTitle= "<h2>MENAPS </h2>" 
         cardStyle="carousel-text" 
         content = "<p> hello world </p>" 
         action={{
            title: "Discutons-en",
            href: "/contact"
        }}
         />
    </div>
  </div>
</div>
    </>)
}