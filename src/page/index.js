import React from "react";
import About from "../component/about";
import Header from "../component/header";
import Hero from "../component/hero";
import Services from "../component/services";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
    </>
  );
};

export default LandingPage;
