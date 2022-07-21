import Title from "../title";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./index.scss";
import { clients } from "../data/client";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Clients = () => {
  return (
    <section className="clients container" id="clients">
      <Title title="Clients" />
      <div className="client">
        <Carousel
          responsive={responsive}
          showDots={true}
          autoPlay={true}
          arrows={false}
          rewind={true}
        >
          {clients.map((c, i) => {
            return (
              <div className="clientItem" key={i}>
                {/* <img src={c?.src} alt={c?.alt} /> */}
                <h6>{c.alt}</h6>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default Clients;
