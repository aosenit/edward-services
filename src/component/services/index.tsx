import { service } from "../data/service";
import Title from "../title";
import "./index.scss";
import { useInView } from "react-intersection-observer";

interface IService {
  number: string;
  title: string;
  content: string;
}

const Services = () => {
  const { ref, inView } = useInView();
  return (
    <section className="services container" id="services" ref={ref}>
      <Title title="Services " />
      <div className="serviceGrid">
        {service.map(({ number, title, content }: IService, i: number) => {
          return (
            <div
              className={`animate__animated service ${
                inView ? "animate__fadeInDown" : ""
              }`}
              key={i}
            >
              <div className="serviceIcon">
                <h2>{number}.</h2>
                <h3>{title}</h3>
              </div>
              <div className="serviceContent">
                <p> {content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
