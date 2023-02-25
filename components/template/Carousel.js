import React from "react";
import Slider from "react-slick";

import { ButtonIcon } from "../../components";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

const Carousel = ({ children }) => {
  const NextButton = (props) => {
    const { onClick } = props;
    return (
      <ButtonIcon
        onClick={onClick}
        className="absolute top-1/2 left-0 z-10 -mt-6 bg-[#A2A2A2] bg-opacity-50 hover:bg-[#A2A2A2] hover:bg-opacity-100"
      >
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </ButtonIcon>
    );
  };
  const PreviousButton = (props) => {
    const { onClick } = props;
    return (
      <ButtonIcon
        onClick={onClick}
        className="absolute top-1/2 right-0 z-10 -mt-6 bg-[#A2A2A2] bg-opacity-50 hover:bg-[#A2A2A2] hover:bg-opacity-100"
      >
        <ChevronRightIcon className="w-6 h-6 text-white" />
      </ButtonIcon>
    );
  };

  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 300,
    swipeToSlide: true,
    nextArrow: <NextButton />,
    prevArrow: <PreviousButton />,
  };
  return (
    <div className="w-full">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Carousel;
