import React, { useState } from "react";
import { ButtonIcon, Rating, Typography } from "../../components";
import { BookmarkIcon } from "@heroicons/react/24/solid";
const HeaderCard = ({ title = "title", rating = 0, cover = "" }) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="flex flex-col gap-y-2">
      <Typography variant="title">{title}</Typography>
      <Rating rating={rating} />
      <div className="relative rounded-[15px] p-3 w-[250px] h-[300px] overflow-hidden cursor-pointer">
        <div
          style={{
            backgroundImage: `url(${cover})`,
          }}
          className={`absolute top-0 right-0 bg-center bg-cover w-full h-full duration-300 ${
            hover && "scale-125"
          }`}
        />
        <div
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="relative w-full h-full"
        >
          <div className="flex flex-1">
            <div className="flex flex-1" />
            <ButtonIcon className="bg-white hover:bg-[#f2f2f2]">
              <BookmarkIcon className="w-6 h-6 text-[#A2A2A2]" />
            </ButtonIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
