import React from "react";
import { Typography, Button } from "../../components";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";

const BackNavigation = ({title = "title"}) => {

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
      }}
      className="flex z-50 items-center space-x-4 px-[32px] pt-[24px] pb-[32px]"
      onClick={() => window.history.back()}
    >
      <Button variant="text" className="min-h-fit h-fit">
        <ArrowLongLeftIcon className="h-8 w-8 text-white " />
      </Button>
      <Typography variant="title" className="text-white">{title}</Typography>
    </div>
  );
};

export default BackNavigation;
