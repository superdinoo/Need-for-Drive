/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react'
import './Slider.scss'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import dataSlider from './dataSlider'

const Slider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timer
    if (isAutoPlay) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex < dataSlider.length - 1 ? prevIndex + 1 : 0,
        )
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [activeIndex, isAutoPlay])

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay)
  }
  const handleClickLeft = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : dataSlider.length - 1,
    )
    toggleAutoPlay()
  }

  const handleClickRight = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < dataSlider.length - 1 ? prevIndex + 1 : 0,
    )
    toggleAutoPlay()
  }

  const handleClickDots = (itemID: number) => {
    setActiveIndex(itemID - 1)
    toggleAutoPlay()
  }

  return (
    <div className="slider">
      {dataSlider.map((slide, index) => (
        <div
          key={slide.id}
          className={index === activeIndex ? 'slide active' : 'slide'}
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${slide.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <button
            aria-label="Previous"
            className="arrowLeft"
            onClick={handleClickLeft}
            type="button"
          >
            <IoIosArrowBack />
          </button>
          <div className="sliderContainer">
            <h1 className="sliderTitle">{slide.title}</h1>
            <p className="sliderText">{slide.desc}</p>
            <button
              type="button"
              className="sliderBtn"
              style={{ background: slide.colorBtn }}
            >
              Подробнее
            </button>
            <div className="dots">
              {dataSlider.map((item) => (
                <div
                  onClick={() => handleClickDots(item.id)}
                  className="circle"
                  key={item.id}
                  style={{
                    background: item.id === slide.id ? '#0EC261' : 'white',
                  }}
                />
              ))}
            </div>
          </div>
          <button
            aria-label="Next"
            className="arrowRight"
            onClick={handleClickRight}
            type="button"
          >
            <IoIosArrowForward />
          </button>
        </div>
      ))}
    </div>
  )
}

export default Slider
