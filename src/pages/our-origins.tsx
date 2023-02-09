import Card from '@/common/components/card/Card'
import ScrollComponent from '@/common/components/scrollComponent/ScrollComponent'
import ContentOurOrigins from '@/common/components/contentOurOrigins/ContentOurOrigins'
import Button from '@/common/components/button/Button'
import Section from '@/common/components/Section/Section'
import Widget from '@/common/components/widget/Widget'
import Grid from '@/common/components/grid/Grid'
import GalleryFootprint from '@/common/components/gallery/GalleryFootprint'

export default function OuerOrigins() {
  return (
    <>
      

       <GalleryFootprint padding ={true} data={ [
  {
    src: "/galerie/28973449265_07e3aa5d2e_b.jpg",
    original: "/galerie/28973449265_07e3aa5d2e_b.jpg",
    width: 320,
    height: 174,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    original: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    width: 320,
    height: 212,
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    original: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    width: 320,
    height: 212,
    caption: "Color Pencils (Jeshu John - designerspics.com)",
  },
  {
    src: "https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg",
    original: "https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg",
    width: 320,
    height: 213,
    caption: "Red Apples with other Red Fruit (foodiesfeed.com)",
  },
  {
    src: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg",
    original: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg",
    width: 320,
    height: 183,
    caption: "37H (gratispgraphy.com)",
  },
  {
    src: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
    original: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
    width: 240,
    height: 320,
    tags: [{ value: "Nature", title: "Nature" }],
    caption: "8H (gratisography.com)",
  },
  {
    src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
    original: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
    width: 320,
    height: 190,
    caption: "286H (gratisography.com)",
  },
  {
    src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
    original: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
    width: 320,
    height: 148,
    tags: [{ value: "People", title: "People" }],
    caption: "315H (gratisography.com)",
  },
  {
    src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
    original: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
    width: 320,
    height: 213,
    caption: "201H (gratisography.com)",
  },
  {
    src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
    original: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
    alt: "Big Ben - London",
    width: 248,
    height: 320,
    caption: "Big Ben (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
    original: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
    alt: "Red Zone - Paris",
    width: 320,
    height: 113,
    tags: [{ value: "People", title: "People" }],
    caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
    original: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
    alt: "Wood Glass",
    width: 313,
    height: 320,
    caption: "Wood Glass (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
    original: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
    width: 320,
    height: 213,
    caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_b.jpg",
    original: "https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_b.jpg",
    width: 320,
    height: 194,
    caption: "Old Barn (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_b.jpg",
    original: "https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_b.jpg",
    alt: "Cosmos Flower",
    width: 320,
    height: 213,
    caption: "Cosmos Flower Macro (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
    original: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
    width: 271,
    height: 320,
    caption: "Orange Macro (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://c1.staticflickr.com/9/8330/28941240416_71d2a7af8e_b.jpg",
    original: "https://c1.staticflickr.com/9/8330/28941240416_71d2a7af8e_b.jpg",
    width: 320,
    height: 213,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "People", title: "People" },
    ],
    caption: "Surfer Sunset (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
    original: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
    width: 320,
    height: 213,
    tags: [
      { value: "People", title: "People" },
      { value: "Sport", title: "Sport" },
    ],
    caption: "Man on BMX (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
    original: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
    width: 320,
    height: 213,
    caption: "Ropeman - Thailand (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://c4.staticflickr.com/8/7476/28973628875_069e938525_b.jpg",
    original: "https://c4.staticflickr.com/8/7476/28973628875_069e938525_b.jpg",
    width: 320,
    height: 213,
    caption: "Time to Think (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_b.jpg",
    original: "https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_b.jpg",
    width: 320,
    height: 179,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Fauna", title: "Fauna" },
    ],
    caption: "Untitled (Jan Vasek - jeshoots.com)",
  },
  {
    src: "https://c6.staticflickr.com/9/8893/28897116141_641b88e342_b.jpg",
    original: "https://c6.staticflickr.com/9/8893/28897116141_641b88e342_b.jpg",
    width: 320,
    height: 215,
    tags: [{ value: "People", title: "People" }],
    caption: "Untitled (moveast.me)",
  },
  {
    src: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
    original: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
    width: 257,
    height: 320,
    caption: "A photo by 贝莉儿 NG. (unsplash.com)",
  },
  {
    src: "https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_b.jpg",
    original: "https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_b.jpg",
    width: 226,
    height: 320,
    caption: "A photo by Matthew Wiebe. (unsplash.com)",
  },
]
}></GalleryFootprint>
      <Section background={false} fullWidth={false}>
        <Card HeaderTitle="<h2>La génèse</h2>" styleHeaderPage="HeaderPage " styleContentPage="text-content   "
          content={"<p>de notre histoire</br> MENAPS est né de la volonté de proposer un conseil intégré allant de la vision stratégique à la concrétisation opérationnelle allié à une forte dimension digitale,</p>"} />
      </Section>
      <Section background={false} fullWidth={true}>
      <ContentOurOrigins padding={true} styleContentPage="contentPage my-3" content={[{ year: "2017", content: ["Naissance de MENAPS", "Le constat : La transformation digitale est en pleine accélération, mais l’offre n’est pas en adéquation.", "Ouverture des bureaux à Toulouse (France),<br> Tunis (Tunisie), Casablanca (Maroc)"] }, { year: "2018", content: ["Le constat :<br>La transformation digitale est en pleine<br>accélération, mais l’offre n’est pas en adéquation."] }, { year: "2019", content: ["ahmed", "raed"] }, { year: "2020", content: ["ahmed", "raed"] }]} />
      </Section>
      <Section background={true} fullWidth={false}>
          <Grid>
          <Card  styleHeaderPage="text-white" styleContentPage="text-white text-content " HeaderTitle="<h2>Trouvons ensemble</H2>" content="<p>les projets de demain </p>"/>
          <Button styleButton="  button-width" variant="link" title=" Discover them" href="/our-values"/>
             
          </Grid>
      </Section>

      {/* <ScrollComponent styleContentPage="btn-footer my-3" content={{ year: "2017", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.<br>  Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula,<br>  facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis <br> imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, <br> nulla et dictum interdum, <br> nisi lorem egestas odio, vitae<br> scelerisque enim ligula <br>venenatis dolor. Maecenas <br>nisl est, ultrices nec congue eget,<br> auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. Inorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. InLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.<br>  Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula,<br>  facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis <br> imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, <br> nulla et dictum interdum, <br> nisi lorem egestas odio, vitae<br> scelerisque enim ligula <br>venenatis dolor. Maecenas <br>nisl est, ultrices nec congue eget,<br> auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. Inorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. InLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.<br>  Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula,<br>  facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis <br> imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, <br> nulla et dictum interdum, <br> nisi lorem egestas odio, vitae<br> scelerisque enim ligula <br>venenatis dolor. Maecenas <br>nisl est, ultrices nec congue eget,<br> auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. Inorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In  " }
      } /> */}


    </>
  )
}


