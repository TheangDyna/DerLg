import React from "react";
import { Button, ButtonIcon, Logo, Typography } from "../../components";
import logoWithSlogan from "../../public/logoWithSlogan.png";
import facebookIcon from "../../public/facebookIcon.png";
import instagramIcon from "../../public/instagramIcon.png";
import tiktokIcon from "../../public/tiktokIcon.png";
import youtubeIcon from "../../public/youtubeIcon.png";

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
            <Typography className="mr-4 text-white">Follow us:</Typography>
            <ButtonIcon className="bg-[#A2A2A2] bg-opacity-20 hover:bg-[#A2A2A2] hover:bg-opacity-40">
              <img src={youtubeIcon.src} alt="youtube" className="w-6 h-6" />
            </ButtonIcon>
            <ButtonIcon className="bg-[#A2A2A2] bg-opacity-20 hover:bg-[#A2A2A2] hover:bg-opacity-40">
              <img
                src={instagramIcon.src}
                alt="instagram"
                className="w-6 h-6"
              />
            </ButtonIcon>
            <ButtonIcon className="bg-[#A2A2A2] bg-opacity-20 hover:bg-[#A2A2A2] hover:bg-opacity-40">
              <img src={tiktokIcon.src} alt="tiktok" className="w-6 h-6" />
            </ButtonIcon>
            <ButtonIcon className="bg-[#A2A2A2] bg-opacity-20 hover:bg-[#A2A2A2] hover:bg-opacity-40">
              <img src={facebookIcon.src} alt="facebook" className="w-6 h-6" />
            </ButtonIcon>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 gap-[32px]">
          <div className="flex flex-col space-y-4 items-start">
            <Typography variant="title" className="text-white">
              Website
            </Typography>
            <Button variant="link" className="font-normal px-0 no-underline">
              <Typography className="text-white">News</Typography>
            </Button>
            <Button variant="link" className="font-normal px-0 no-underline">
              <Typography className="text-white">About Us</Typography>
            </Button>
            <Button variant="link" className="font-normal px-0 no-underline">
              <Typography className="text-white">Contact US</Typography>
            </Button>
          </div>
          <div className="flex flex-col space-y-4 items-start">
            <Typography variant="title" className="text-white">
              Website
            </Typography>
            <Button variant="link" className="font-normal px-0 no-underline">
              <Typography className="text-white">News</Typography>
            </Button>
            <Button variant="link" className="font-normal px-0 no-underline">
              <Typography className="text-white">About Us</Typography>
            </Button>
            <Button variant="link" className="font-normal px-0 no-underline">
              <Typography className="text-white">Contact US</Typography>
            </Button>
          </div>
          <div className="flex flex-col space-y-4 items-start">
            <Typography variant="title" className="text-white">
              Website
            </Typography>
            <Button variant="link" className="font-normal px-0 no-underline">
              <Typography className="text-white">News</Typography>
            </Button>
            <Button variant="link" className="font-normal px-0 no-underline">
              <Typography className="text-white">About Us</Typography>
            </Button>
            <Button variant="link" className="font-normal px-0 no-underline">
              <Typography className="text-white">Contact US</Typography>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
