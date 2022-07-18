import "./index.scss";

interface ITitle {
  title: string;
}

const Title = ({ title = "About" }: ITitle) => {
  return (
    <section className="title">
      <h1>{title}</h1>
    </section>
  );
};

export default Title;
