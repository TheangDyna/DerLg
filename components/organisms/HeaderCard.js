import React from "react";
import { ButtonIcon, Rating, Typography } from "../../components";
import { BookmarkIcon } from "@heroicons/react/24/solid";
const HeaderCard = ({
  active = false,
  title = "title",
  rating = 0,
  cover = "",
}) => {
  const _active = active ? "w-[250px] h-[350px]" : "w-[250px] h-[300px]";
  return (
    <div className="inline-flex flex-col gap-y-2">
      <Typography variant="title">{title}</Typography>
      <Rating rating={rating} />
      <div
        style={{
          backgroundImage: `url(${cover})`,
        }}
        className={`bg-center bg-cover rounded-[15px] p-3 ${_active}`}>
        <div className="flex flex-1">
          <div className="flex flex-1" />
          <ButtonIcon className="bg-white hover:bg-[#e6e6e6]">
            <BookmarkIcon className="w-6 h-6 text-[#A2A2A2]" />
          </ButtonIcon>
        </div>
      </div>
    </div>
  );
};

export { HeaderCard };
