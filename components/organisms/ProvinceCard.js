import React, { useState } from "react";
import { Typography } from "../../components";

const ProvinceCard = ({ cover, title }) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="relative w-[250px] h-[150px] rounded-[15px] overflow-hidden cursor-pointer">
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
        className="relative w-full h-full bg-[rgba(0,0,0,0.25)] flex justify-center items-center opacity-0 hover:opacity-100"
      >
        <Typography variant="title">{title}</Typography>
      </div>
    </div>
  );
};

export default ProvinceCard;
