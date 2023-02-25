import React, { useState } from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { ButtonIcon, Typography } from "../components";
import { travel } from "../utils";
const Test = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="w-full h-full p-20">
      <div
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          backgroundImage: `linear-gradient(180deg, ${
            hover ? "rgba(0, 0, 0, .75)" : "rgba(0, 0, 0, 0.85)"
          } 0%, rgba(0, 0, 0, 0) 25%), url(${travel[0].cover})`,
        }}
        className="relative bg-center bg-cover rounded-[15px] w-[250px] h-[350px] overflow-hidden cursor-pointer"
      >
        <Typography className="truncate">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <div
          className={`${
            hover ? "hidden" : "inline-block"
          } absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full p-4 bg-[#A2A2A2] bg-opacity-50`}
        >
          <PlayIcon className="w-6 h-6 text-white" />
        </div>
        <video className="w-full h-full absolute top-0 right-0" controls>
          <source src="movie.mp4" type="video/mp4" /> 
        </video>
      </div>
    </div>
  );
};

export default Test;
