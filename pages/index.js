import React, { useState } from "react";
import Slider from "react-slick";

import { Button, HeaderCard, Typography } from "../components";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

// data
import { travel } from "../utils";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    // focusOnSelect: true,
    arrows: false,
    afterChange: (current) => setActiveIndex(current),
  };
  return (
    <div
      style={{
        backgroundImage: `url(${travel[activeIndex].cover})`,
      }}
      className="h-screen bg-cover bg-center"
    >
      {/* Header */}
      <div className="grid grid-cols-2 h-full bg-[rgba(0,0,0,0.7)]">
        <div className="flex flex-1">
          <div className="mt-auto ml-[80px] mb-[180px] w-[600px]">
            <Typography variant="display">{travel[activeIndex].title + activeIndex}</Typography>
            <Typography className="mt-[20px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Typography>
            <div className="mt-[48px]">
              <Button>
                Explore
                <ArrowLongRightIcon className="w-6 h-6 ml-[24px]" />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-1 overflow-clip h-full">
          <div className="w-[1000px]">
            <Slider {...settings}>
              {travel.map((item, index) => {
                return (
                  <HeaderCard
                    key={index}
                    // active={index == activeIndex}
                    title={item.title + activeIndex}
                    rating={item.rating}
                    cover={item.cover}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
