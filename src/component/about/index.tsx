import { team } from "../data/team";
import Title from "../title";
import { useInView } from "react-intersection-observer";
import "./index.scss";

const About = () => {
  const { ref, inView } = useInView();
  return (
    <section className="about container" id="about">
      <Title title="About" />

      <div className="">
        <p
          className={`animate__animated ${
            inView ? "animate__slideInLeft" : ""
          }`}
          ref={ref}
        >
          <span>Mission Statement</span>
          Edwart International Nigeria Limited strives to be the global leader
          in the provision of quality, cost effective and promptly delivered
          services to the oil and gas industries worldwide. Best safety practice
          is our number one priority in the delivery of services to meet or
          surpass our client expectations
        </p>

        <p
          className={`animate__animated ${
            inView ? "animate__slideInRight" : ""
          }`}
          ref={ref}
        >
          <span>Vision of the Company</span>
          To be the best in the oil and gas services delivery through maximum
          utilization of local manpower resources, international standards
          compliance etc. to meet the challenging demand of client’s quality
          service delivery
        </p>

        <div className="teamGrid">
          {team.map((member, index) => (
            <Team
              name={member.name}
              img={member.img}
              designation={member.designation}
              experience={member.experience}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

interface ITeam {
  name: string;
  img: string;
  designation: string;
  experience: string;
}

const Team = ({ name, img, designation, experience }: ITeam) => {
  return (
    <section className="team">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <h6>{designation}</h6>
      <p>{experience}</p>
    </section>
  );
};
