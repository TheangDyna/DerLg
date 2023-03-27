import React, {useState} from "react";
import { Button, Typography } from "../../components";

const EventCard = ({ title = "title", cover = "", description = "" }) => {
  const [hover, setHover] = useState(false);
  return (
    <div onMouseOver={() => setHover(true)}
    onMouseLeave={() => setHover(false)} className="w-full h-[250px] flex relative rounded-[15px] overflow-clip cursor-pointer">
      <div
        style={{
          backgroundImage: `linear-gradient(-90deg, #000000 0%, rgba(0, 0, 0, 0) 60%), url(${cover})`,
        }}
        className={`bg-center bg-cover w-[880px] h-[250px] duration-200 ${hover && "scale-125"}`}
      />
      <div className="flex flex-1 h-[250px] bg-black" />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center px-4">
        <div className="max-w-[500px] flex items-center flex-col text-center">
          <Typography variant="title">{title}</Typography>
          <hr className="my-4 w-[300px]" />
          <Typography className="line-clamp-3">{description}</Typography>
          <Button variant="link" className="mt-3" onClick={() => console.log("hello")}>
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
