import { ISection } from "./ISection";

export default function     Section({children, background, fullWidth,className} : ISection) {
    return (
      
        <section className={` mt-5   ${background ? "backgroundColor" : ""} ${className ? className: ""} ${fullWidth ? "w-100": ""}`}>
                {children}
        </section>
    )
  }
  