import { useCallback, useEffect, useState } from "react";

import "./index.scss";

const heroData = [
  {
    title: "OIL & GAS SERVICES",
    subtitle: "Construction / Installation",
    backgroundImage:
      "https://www.zoltav.com/wp-content/themes/zoltav/assets/img/background-slides/background_slide1.jpg",
  },

  {
    title: "OIL & GAS SERVICES",
    subtitle: "Logistics / Procurement",
    backgroundImage:
      "https://vuringroup.com/wp-content/uploads/2016/09/logistics-846x381.png",
  },

  {
    title: "OIL & GAS SERVICES",
    subtitle: "Engineering / Maintenance",
    backgroundImage:
      "https://thumbs.dreamstime.com/b/engineering-industry-concept-office-oil-gas-refinery-sunset-pipelines-petrochemical-plant-background-double-169626464.jpg",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex(currentIndex + 1);
  }, [currentIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(currentIndex - 1);
  }, [currentIndex]);

  const handleEnd = () => {
    setCurrentIndex(heroData.length - 1);
  };

  const handleStart = () => {
    setCurrentIndex(0);
  };

  const handleBackgroundMovement = useCallback(
    (direction: string) => {
      if (direction === "prev") {
        handlePrev();

        if (currentIndex === 0) {
          handleEnd();
        }
      }

      if (direction === "next") {
        handleNext();

        if (currentIndex === heroData.length - 1) {
          handleStart();
        }
      }
    },
    [currentIndex, handleNext, handlePrev]
  );

  useEffect(() => {
    setCurrentIndex(0);
    return () => {};
  }, []);

  useEffect(() => {
    let autoChangeBackground = setInterval(() => {
      handleBackgroundMovement("next");
    }, 8000);

    return () => {
      clearInterval(autoChangeBackground);
    };
  }, [currentIndex, handleBackgroundMovement]);

  return (
    <div
      className={`hero animate__animated`}
      id="hero"
      style={{
        backgroundImage: `url(${heroData[currentIndex]?.backgroundImage})`,
      }}
    >
      <section id="heroText">
        <h1>{heroData[currentIndex]?.title}</h1>
        <h5>{heroData[currentIndex]?.subtitle}</h5>
        <button className="buttonContact">
          {" "}
          <a href="mailto:edwart.international123@gmail.com">CONTACT US</a>
        </button>
      </section>

      <div className="heroCover"></div>
      <div className="arrows">
        <div
          className="buttonPrev"
          onClick={() => handleBackgroundMovement("prev")}
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
        <div
          className="buttonNext"
          onClick={() => handleBackgroundMovement("next")}
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
