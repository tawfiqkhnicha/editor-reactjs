import { ISection } from "./ISection";

export default function Section({children, background, fullWidth} : ISection) {
    return (
      
        <section className={` mt-5 ${background ? "backgroundColor" : ""} ${fullWidth ? "w-100": "site-padding"}`}>
                {children}
        </section>
    )
  }
  