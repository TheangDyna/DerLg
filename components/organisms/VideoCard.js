import React, { useState, useRef } from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { Typography } from "../../components";

const VideoCard = ({ cover = "", video = "", description = "" }) => {
  const [hover, setHover] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setHover(true);
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play();
    }
  };
  const handleMouseLeave = () => {
    setHover(false);
    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="relative rounded-[15px] w-[250px] h-[350px] cursor-pointer overflow-hidden">
      <div
        className={`absolute top-0 right-0 bg-center bg-cover w-full h-full`}
      >
        <video
          className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          ref={videoRef}
          loop
        >
          <source src={video} />
        </video>
      </div>
      <div
        onMouseOver={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={
          hover
            ? {
                backgroundImage:
                  "linear-gradient(180deg, rgba(0, 0, 0, .75) 0%, rgba(0, 0, 0, 0) 25%)",
              }
            : {
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0) 25%), url(${cover})`,
              }
        }
        className={`absolute top-0 right-0 bg-center bg-cover w-full h-full p-4 duration-300`}
      >
        <Typography className="truncate text-white">{description}</Typography>
        {!hover && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full p-4 bg-[#A2A2A2] bg-opacity-50">
            <PlayIcon className="w-6 h-6 text-white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
