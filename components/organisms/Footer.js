import React from "react";
import { Button, ButtonIcon, Logo, Typography } from "../../components";
import logoWithSlogan from "../../public/logoWithSlogan.png";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 75%)",
      }}
      className="w-full bg-[#070F24] flex flex-col py-[80px]  mt-[80px]"
    >
      <div className="flex flex-1 px-[80px]">
        <div className="w-[800px] flex flex-col space-y-8">
          <div>
            <Logo src={logoWithSlogan} size="lg" />
          </div>
          <div className="flex space-x-4 items-center">
            <Typography className="mr-4">Follow us:</Typography>
            <ButtonIcon></ButtonIcon>
            <ButtonIcon></ButtonIcon>
            <ButtonIcon></ButtonIcon>
            <ButtonIcon></ButtonIcon>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 gap-[32px]">
          <div className="flex flex-col space-y-4 items-start">
            <Typography variant="title">Website</Typography>
            <Button variant="link" className="font-normal px-0 no-underline">
              <Typography>News</Typography>
            </Button>
            <Button variant="link" className="font-normal px-0 no-underline">
              <Typography>About Us</Typography>
            </Button>
            <Button variant="link" className="font-normal px-0 no-underline">
              <Typography>Contact US</Typography>
            </Button>
          </div>
          <div className="flex flex-col space-y-4 items-start">
            <Typography variant="title">Website</Typography>
            <Button variant="link" className="font-normal px-0 no-underline">
              <Typography>News</Typography>
            </Button>
            <Button variant="link" className="font-normal px-0 no-underline">
              <Typography>About Us</Typography>
            </Button>
            <Button variant="link" className="font-normal px-0 no-underline">
              <Typography>Contact US</Typography>
            </Button>
          </div>
          <div className="flex flex-col space-y-4 items-start">
            <Typography variant="title">Website</Typography>
            <Button variant="link" className="font-normal px-0 no-underline">
              <Typography>News</Typography>
            </Button>
            <Button variant="link" className="font-normal px-0 no-underline">
              <Typography>About Us</Typography>
            </Button>
            <Button variant="link" className="font-normal px-0 no-underline">
              <Typography>Contact US</Typography>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
