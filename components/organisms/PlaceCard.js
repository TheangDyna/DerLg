import React from "react";
import { ButtonIcon, Rating, Typography } from "../../components";
import { BookmarkIcon } from "@heroicons/react/24/solid";
const PlaceCard = ({ title = "title", rating = 0, cover = "" }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${cover})`,
      }}
      className="bg-center bg-cover flex flex-col rounded-[15px] p-3 w-[250px] h-[300px]"
    >
      <div className="flex flex-1">
        <div className="flex flex-1" />
        <ButtonIcon className="bg-white hover:bg-[#f2f2f2]">
          <BookmarkIcon className="w-6 h-6 text-[#A2A2A2]" />
        </ButtonIcon>
      </div>
      <div className="flex mt-auto">
        <Typography>hello</Typography>
      </div>
    </div>
  );
};

export default PlaceCard;
