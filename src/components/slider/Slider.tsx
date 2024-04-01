import React, { useState } from "react";
import "./Slider.scss";
import { dataSlider } from "./dataSlider";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Slider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickLeft = () => {
    setActiveIndex(activeIndex > 0 ? activeIndex - 1 : 3);
  };

  const handleClickRight = () => {
    setActiveIndex(activeIndex < dataSlider.length - 1 ? activeIndex + 1 : 0);
  };

  return (
    <div className={"slider"}>
      {dataSlider.map((slide) => (
        <div
          key={slide.id}
          className={`slide ${slide.id - 1 === activeIndex ? "active" : ""}`}
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${slide.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="arrowLeft" onClick={handleClickLeft}>
            <IoIosArrowBack />
          </div>
          <div className="sliderContainer">
            <h1 className="sliderTitle">{slide.title}</h1>
            <p className="sliderText">{slide.desc}</p>
            <button
              className="sliderBtn"
              style={{ background: slide.colorBtn }}
            >
              Подробнее
            </button>
            <div className="dots">
              {dataSlider.map((_, i) => (
                <div
                  className="circle"
                  key={i}
                  style={{
                    background: i === slide.id - 1 ? "#0EC261" : "white",
                  }}
                />
              ))}
            </div>
          </div>
          <div className="arrowRight" onClick={handleClickRight}>
            <IoIosArrowForward />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
