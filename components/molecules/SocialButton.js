import React from "react";
import { Typography } from "../../components";

const SocialButton = ({ image = "", title = "", ...rest }) => {
  return (
    <button
      className="btn w-full border-black focus:border-black hover:border-black bg-inherit hover:bg-[#F2F2F2] rounded-md justify-start font-normal normal-case space-x-5 px-5"
      {...rest}
    >
      <img
        src={image}
        alt="logo"
        className="object-cover object-center w-[36px] h-[36px]"
      />
      <Typography className="text-black text-[18px]">
        {title}
      </Typography>
    </button>
  );
};

export default SocialButton;
