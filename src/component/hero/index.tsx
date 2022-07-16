import "./index.scss";

const Hero = () => {
  return (
    <div className="hero container">
      {" "}
      <section id="heroText">
        <h1>OIL & GAS SERVICES</h1>
        <h5>
          Providers of cost effective, quality, safe and timely delivered
          services to the oil & gas and allied industries
        </h5>
        <button className="buttonContact">
          {" "}
          <a href="mailto:edwart.international123@gmail.com">CONTACT US</a>
        </button>
      </section>
      <div className="heroCover"></div>
    </div>
  );
};

export default Hero;
