import React from "react";
import { Button, ButtonIcon, Typography } from "../../components";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

// height 56px
const Navbar = ({}) => {
  return (
    <div className="absolute w-full">
      <div className="flex justify-between items-center px-[80px] py-1">
        <Typography variant="title">Logo</Typography>
        <div className="flex items-center gap-4">
          <Button variant="text" className="text-[24px]">News</Button>
          <Button variant="text" className="text-[24px]">Destinations</Button>
          <Button variant="text" className="text-[24px]">Blog</Button>
          <Button variant="text" className="text-[24px]">Contact</Button>
          <ButtonIcon className="bg-white hover:bg-[#f2f2f2]">
            <MagnifyingGlassIcon className="w-6 h-6 text-[#A2A2A2]" />
          </ButtonIcon>
          <Typography>Hello, Dyna</Typography>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
