import React, { useState, useRef } from "react";
import Slider from "react-slick";

import {
  Button,
  ButtonIcon,
  HeaderCard,
  Navbar,
  Typography,
} from "../../components";
import {
  ArrowLongRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";


const Header = ({ data, onNavigate }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    className: "flex items-center gap-4",
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: false,
    afterChange: (current) => setActiveIndex(current),
  };
  return (
    <div
      style={{
        backgroundImage: `url(${data[activeIndex].cover})`,
      }}
      className="h-screen bg-cover bg-cente duration-200"
    >
      <Navbar />
      <div className="h-full bg-[rgba(0,0,0,0.7)] flex flex-col justify-center">
        <div className="grid grid-cols-2 items-end mt-auto">
          <div className="flex flex-1 ml-[80px]">
            <div className="w-[600px]">
              <Typography variant="display" className="text-white">
                {data[activeIndex].title}
              </Typography>
              <Typography className="mt-[20px] text-white">
                {data[activeIndex].description}
              </Typography>
              <div className="mt-[48px]">
                <Button onClick={onNavigate}>
                  Explore
                  <ArrowLongRightIcon className="w-6 h-6 ml-[24px]" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-1 overflow-clip">
            <div className="w-[1000px]">
              <Slider {...settings} ref={sliderRef}>
                {data.map((item, index) => {
                  return (
                    <HeaderCard
                      key={index}
                      title={item.title}
                      rating={item.rating}
                      cover={item.cover}
                      id={index}
                    />
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
        <div className="mt-auto">
          <div className="flex flex-1 justify-center mb-[64px]">
            <div className="flex gap-6">
              <ButtonIcon
                onClick={next}
                className="bg-[#A2A2A2] bg-opacity-50 hover:bg-[#A2A2A2] hover:bg-opacity-100"
              >
                <ChevronLeftIcon className="w-6 h-6 text-white" />
              </ButtonIcon>
              <ButtonIcon
                onClick={previous}
                className="bg-[#A2A2A2] bg-opacity-50 hover:bg-[#A2A2A2] hover:bg-opacity-100"
              >
                <ChevronRightIcon className="w-6 h-6 text-white" />
              </ButtonIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
