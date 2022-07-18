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
      <div className="header container">
        <section className="logo ">
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
                href="#projects"
                className={activeLink === "projects" ? "active" : ""}
                onClick={() => {
                  handleActiveLink("projects");
                }}
              >
                PROJECTS
              </a>
            </li>
            <li>
              <a
                href="#contacts"
                className={activeLink === "contacts" ? "active" : ""}
                onClick={() => {
                  handleActiveLink("contacts");
                }}
              >
                CONTACTS
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
