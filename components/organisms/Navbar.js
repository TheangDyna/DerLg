import React from "react";
import { useRouter } from "next/router";
import { Button, ButtonIcon, Logo, Typography } from "../../components";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

// height 56px
const Navbar = ({}) => {
  const router = useRouter();
  return (
    <div className="absolute w-full">
      <div className="flex justify-between items-center px-[80px] py-4">
        <Logo />
        <div className="flex items-center gap-4">
          <Button variant="text" className="text-[24px] text-white">
            News
          </Button>
          <Button variant="text" className="text-[24px] text-white">
            Destinations
          </Button>
          <Button variant="text" className="text-[24px] text-white">
            Blog
          </Button>
          <Button variant="text" className="text-[24px] text-white">
            Contact
          </Button>
          <ButtonIcon className="bg-white hover:bg-[#f2f2f2]">
            <MagnifyingGlassIcon className="w-6 h-6 text-[#A2A2A2]" />
          </ButtonIcon>
          <Button
            variant="text"
            className="text-[24px] text-white"
            onClick={() => router.push("./auth")}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
