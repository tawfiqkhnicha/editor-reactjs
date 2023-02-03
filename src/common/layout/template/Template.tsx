import Footer from "@/common/components/footer/Footer";
import Navbar from "@/common/components/navbar/Navbar";
import { Menu } from "@/helpers/menu/Menu";

export default function Template(props: any){

    return (
        <div className="container-fluid d-flex flex-column min-vh-100">
            <Navbar 
                items={Menu}
            />
            <section className="section my-5 site-padding">
                {props.children}
            </section>
            <Footer />
        </div>
    )
}