import "./index.scss";
import { useInView } from "react-intersection-observer";

interface Isocials {
  icon: string;
  title: string;
  content: string;
  href?: string;
}

const socials: Isocials[] = [
  {
    icon: "home",
    title: "Address",
    content:
      "32B Bori Street, Rumuibekwe Housing Estate, Port Harcourt, Rivers State.",
  },
  {
    icon: "call",
    title: "Call Now",
    content: "+234(0) 7033358311",
    href: "tel:+2347033358311",
  },
  {
    icon: "email",
    title: "Email Us",
    content: "edwart.international123@gmail.com",
    href: "mailto:edwart.international123@gmail.com",
  },
];

const Footer = () => {
  const { ref, inView } = useInView();
  return (
    <footer ref={ref}>
      <div className="container">
        <div className="logo">
          <img src={"./assets/images/edward-logo.png"} alt="logo" />
          <h2>Edwart</h2>
        </div>
        <div
          className={`animate__animated social ${
            inView ? "animate__slideInLeft" : ""
          }`}
        >
          {socials.map((social, i) => {
            return (
              <div className="socialContainer" key={i}>
                <a href={social.href}>
                  <div className="icon">
                    <span className="material-symbols-outlined ">
                      {social.icon}
                    </span>
                  </div>
                </a>

                <div>
                  <h3>{social.title}</h3>
                  <p>{social.content}</p>
                </div>
              </div>
            );
          })}

          <div className="footer">
            Traz <span>©</span> 2022. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
