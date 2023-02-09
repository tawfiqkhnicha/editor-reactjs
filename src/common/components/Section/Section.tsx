import { ISection } from "./ISection";

export default function Section({children, background, fullWidth, className} : ISection) {
    return (
      
        <section className={` ${className ? className : ""} mt-5 ${background ? "backgroundColor" : ""} ${fullWidth ? "w-100": "site-padding"}`}>
                {children}
        </section>
    )
  }
  