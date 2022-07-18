import { service } from "../data/service";
import Title from "../title";
import "./index.scss";

interface IService {
  number: string;
  title: string;
  content: string;
}

const Services = () => {
  return (
    <section className="services container" id="services">
      <Title title="Services " />
      <div className="serviceGrid">
        {service.map(({ number, title, content }: IService, i: number) => {
          return (
            <div className="service " key={i}>
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
