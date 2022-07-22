import About from "../component/about";
import Clients from "../component/clients";
import Footer from "../component/footer";
import Header from "../component/header";
import Hero from "../component/hero";
import Services from "../component/services";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <Header />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Footer />
    </div>
  );
};

export default LandingPage;
