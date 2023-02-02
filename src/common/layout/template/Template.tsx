import Navbar from "@/common/components/navbar/Navbar";
import { Menu } from "@/helpers/menu/Menu";

export default function Template(props: any){

    return (
        <div className="container-fluid w-100">
            <Navbar 
                items={Menu}
            />
            <section className="section my-5">
                {props.children}
            </section>
            <footer className="footer">
                this is footer
            </footer>
        </div>
    )
}