import React, { useState } from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { ButtonIcon, Typography } from "../../components";
const VideoCard = ({ cover = "" }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundImage: `linear-gradient(180deg, ${
          hover ? "rgba(0, 0, 0, .75)" : "rgba(0, 0, 0, 0.85)"
        } 0%, rgba(0, 0, 0, 0) 25%), url(${cover})`,
      }}
      className="relative bg-center bg-cover rounded-[15px] w-[250px] h-[350px] p-3 overflow-hidden cursor-pointer"
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
    </div>
  );
};

export default VideoCard;
