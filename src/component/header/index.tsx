import { useState } from "react";
import "./index.scss";

const Header = () => {
  const [openNav, setOpenNav] = useState(true);
  const [activeLink, setActiveLink] = useState("hero");

  const handleActiveLink = (value: string) => {
    setActiveLink(value);
    setOpenNav(!openNav);
  };
  return (
    <header className="">
      <div className="header container animate__animated animate__zoomIn">
        <section className="logo">
          <img src="/assets/images/edward-logo.png" alt="company logo" />
          <h1>Edwart</h1>
        </section>

        <nav className={openNav ? "headerNav close" : "headerNav open"}>
          <span
            className="material-symbols-outlined dclose"
            onClick={() => setOpenNav(!openNav)}
          >
            close
          </span>
          <ul>
            <li>
              <a
                href="#hero"
                className={activeLink === "hero" ? "active" : ""}
                onClick={() => {
                  handleActiveLink("hero");
                }}
              >
                HOME
              </a>
            </li>
            <li>
              <a
                className={activeLink === "about" ? "active" : ""}
                href="#about"
                onClick={() => {
                  handleActiveLink("about");
                }}
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={activeLink === "services" ? "active" : ""}
                onClick={() => {
                  handleActiveLink("services");
                }}
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="#clients"
                className={activeLink === "clients" ? "active" : ""}
                onClick={() => {
                  handleActiveLink("clients");
                }}
              >
                CLIENTS
              </a>
            </li>
            <li className="contact">
              <a href="mailto:mailto:edwart.international123@gmail.com">
                CONTACT US
              </a>
            </li>
          </ul>
        </nav>

        <section
          className="menu"
          onClick={() => {
            setOpenNav(!openNav);
          }}
        >
          {" "}
          <span className="material-symbols-outlined">Menu</span>
          {/* <button className="buttonContact">
            <a href="mailto:edwart.international123@gmail.com">Contact</a>
          </button> */}
        </section>
      </div>
    </header>
  );
};

export default Header;
