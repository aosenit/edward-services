import "./index.scss";

const Header = () => {
  return (
    <header className="container">
      <div className="header">
        <section className="logo ">
          <img src="/assets/images/edward-logo.png" alt="company logo" />
          <h1>Edwart</h1>
        </section>

        <nav className="headerNav">
          <ul>
            <li>Home</li>
          </ul>
        </nav>

        <section className="menu">
          {" "}
          {/* <span className="material-symbols-outlined menu">Menu</span> */}
          <button className="buttonContact">
            <a href="mailto:edwart.international123@gmail.com">Contact</a>
          </button>
        </section>
      </div>
    </header>
  );
};

export default Header;
