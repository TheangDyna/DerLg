import React from "react";
import { ButtonIcon, Typography } from "../../components";
import { BookmarkIcon } from "@heroicons/react/24/solid";
import { StarIcon, MapPinIcon } from "@heroicons/react/24/outline";

const PlaceCard = ({ title = "title", rating = 0, cover = "" }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(0, rgba(0, 0, 0, .75) 0%, rgba(0, 0, 0, 0) 35%), url(${cover})`,
      }}
      className="bg-center bg-cover flex flex-col rounded-[15px] p-3 w-[250px] h-[300px]"
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
  );
};

export default PlaceCard;
