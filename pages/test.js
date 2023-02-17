import React from "react";
import Slider from "react-slick";

// components
import { HeaderCard } from "../components";
// data
import { travel } from "../utils";

export default function Test() {
  const settings = {
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    focusOnSelect: true,
  };
  return (
    <div className="w-full p-10">
      <Slider {...settings}>
        {travel.map((item, index) => {
          return (
            <HeaderCard
              key={index}
              active={false}
              title={item.title}
              rating={item.rating}
              cover={item.cover}
            />
          );
        })}
      </Slider>
    </div>
  );
}
