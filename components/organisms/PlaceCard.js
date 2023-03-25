import React, { useState } from "react";
import { ButtonIcon, Typography } from "../../components";
import { BookmarkIcon } from "@heroicons/react/24/solid";
import { StarIcon, MapPinIcon } from "@heroicons/react/24/outline";

const PlaceCard = ({ title = "title", rating = 0, cover = "" }) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="relative rounded-[15px] w-[250px] h-[300px] overflow-hidden cursor-pointer">
      <div
        style={{
          backgroundImage: `linear-gradient(0, rgba(0, 0, 0, .75) 0%, rgba(0, 0, 0, 0) 35%), url(${cover})`,
        }}
        className={`absolute top-0 right-0 bg-center bg-cover w-full h-full duration-300 ${
          hover && "scale-125"
        }`}
      />
      <div
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="relative w-full h-full flex flex-col p-3"
      >
        <div className="flex flex-1">
          <div className="flex flex-1" />
          <ButtonIcon className="bg-white hover:bg-[#f2f2f2]">
            <BookmarkIcon className="w-6 h-6 text-[#A2A2A2]" />
          </ButtonIcon>
        </div>
        <div className="flex flex-col mt-auto">
          <div className="flex">
            <Typography className="truncate">Angkor Wat Temple</Typography>
          </div>
          <div className="flex">
            <StarIcon className="w-6 h-6 text-white mr-2" />
            <Typography className="truncate">{rating}</Typography>
          </div>
          <div className="flex">
            <MapPinIcon className="w-6 h-6 text-white mr-2" />
            <Typography className="truncate">{title}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
