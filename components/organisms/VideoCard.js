import React, { useState } from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { Typography } from "../../components";
import HoverVideoPlayer from "react-hover-video-player";

const VideoCard = ({ cover = "", video = "", description = "" }) => {
  return (
    <div className="rounded-[15px] w-[250px] h-[350px] cursor-pointer overflow-hidden">
      <HoverVideoPlayer
        videoSrc={video}
        loadingOverlay={
          <div className="loading-overlay">
            <div className="loading-spinner" />
          </div>
        }
        pausedOverlay={
          <div
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0) 25%), url(${cover})`,
            }}
            className="relative bg-center bg-cover p-4 w-[250px] h-[350px]"
          >
            <Typography className="truncate">{description}</Typography>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full p-4 bg-[#A2A2A2] bg-opacity-50">
              <PlayIcon className="w-6 h-6 text-white" />
            </div>
          </div>
        }
        hoverOverlay={
          <div
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(0, 0, 0, .75) 0%, rgba(0, 0, 0, 0) 25%)",
            }}
            className="p-4 w-full h-full"
          >
            <Typography className="truncate">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </div>
        }
      />
    </div>
  );
};

export default VideoCard;
