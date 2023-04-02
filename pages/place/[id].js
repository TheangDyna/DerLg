import React, { useState, useEffect } from "react";
import {
  ButtonIcon,
  Carousel,
  Footer,
  ImageGrid,
  PlaceCard,
  Typography,
} from "../../components";
import {
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
} from "@heroicons/react/24/outline";

import { travel } from "../../utils";

const header =
  "https://tourscanner.com/blog/wp-content/uploads/2022/05/Angkor-Wat-at-sunrise-Siem-Reap.jpg";

const Place = () => {
  const [isCollapse, setIsCollapse] = useState(false);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      setShowText(currentScrollPosition < 600);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="relative">
      <div className="h-screen w-full">
        <div
          style={{
            backgroundImage: `url(${header})`,
          }}
          className="absolute -z-10 top-0 right-0 h-screen w-full bg-center bg-cover bg-fixed"
        />
        <div
          style={{
            backgroundImage:
              "linear-gradient(0, #0A2647 0%, rgba(10,38,71,.90) 10%, rgba(10,38,71,.75) 25%, rgba(0,0,0,0) 50%)",
          }}
          className="relative h-screen w-full bg-center"
        >
          <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] flex flex-col space-y-[32px]">
            <div>
              <Typography variant="display" className="text-center">
                Angkor Wat Temple
              </Typography>
            </div>
            <div
              className={`w-full bg-white bg-opacity-25 rounded-[15px] p-4 duration-300 ease-in-out ${
                showText ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex justify-end">
                <ButtonIcon
                  className="bg-inherit hover:bg-white hover:bg-opacity-50"
                  onClick={() => setIsCollapse(!isCollapse)}
                >
                  {isCollapse ? (
                    <ArrowsPointingInIcon className="w-6 h-6 text-white" />
                  ) : (
                    <ArrowsPointingOutIcon className="w-6 h-6 text-white" />
                  )}
                </ButtonIcon>
              </div>
              <div className="pb-[32px] pt-4 px-4 flex items-center justify-center">
                <div className="max-h-[300px] overflow-auto">
                  <Typography className={`${isCollapse ? "" : "line-clamp-6"}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam gravida sem id porta tristique. Phasellus vel felis
                    vitae urna viverra accumsan. Sed at orci nisl. Nunc viverra
                    fringilla ullamcorper. Ut dictum faucibus mollis. Curabitur
                    arcu lorem, porta eget massa fermentum, porta dapibus dolor.
                    Praesent aliquet ornare fringilla. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Aliquam gravida sem id
                    porta tristique. Phasellus vel felis vitae urna viverra
                    accumsan. Sed at orci nisl. Nunc viverra fringilla
                    ullamcorper. Ut dictum faucibus mollis. Curabitur arcu
                    lorem, porta eget massa fermentum, porta dapibus dolor.
                    Praesent aliquet ornare fringilla. ornare fringilla. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                    gravida sem id porta tristique. Phasellus vel felis vitae
                    urna viverra accumsan. Sed at orci nisl. Nunc viverra
                    fringilla ullamcorper. Ut dictum faucibus mollis. Curabitur
                    arcu lorem, porta eget massa fermentum, porta dapibus dolor.
                    Praesent aliquet ornare fringilla. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Aliquam gravida sem id
                    porta tristique. Phasellus vel felis vitae urna viverra
                    accumsan. Sed at orci nisl. Nunc viverra fringilla
                    ullamcorper. Ut dictum faucibus mollis. Curabitur arcu
                    lorem, porta eget massa fermentum, porta dapibus dolor.
                    Praesent aliquet ornare fringilla. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Aliquam gravida sem id
                    porta tristique. Phasellus vel felis vitae urna viverra
                    accumsan. Sed at orci nisl. Nunc viverra fringilla
                    ullamcorper. Ut dictum faucibus mollis. Curabitur arcu
                    lorem, porta eget massa fermentum, porta dapibus dolor.
                    Praesent aliquet ornare fringilla. ornare fringilla. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                    gravida sem id porta tristique. Phasellus vel felis vitae
                    urna viverra accumsan. Sed at orci nisl. Nunc viverra
                    fringilla ullamcorper. Ut dictum faucibus mollis. Curabitur
                    arcu lorem, porta eget massa fermentum, porta dapibus dolor.
                    Praesent aliquet ornare fringilla. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Aliquam gravida sem id
                    porta tristique. Phasellus vel felis vitae urna viverra
                    accumsan. Sed at orci nisl. Nunc viverra fringilla
                    ullamcorper. Ut dictum faucibus mollis. Curabitur arcu
                    lorem, porta eget massa fermentum, porta dapibus dolor.
                    Praesent aliquet ornare fringilla. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Aliquam gravida sem id
                    porta tristique. Phasellus vel felis vitae urna viverra
                    accumsan. Sed at orci nisl. Nunc viverra fringilla
                    ullamcorper. Ut dictum faucibus mollis. Curabitur arcu
                    lorem, porta eget massa fermentum, porta dapibus dolor.
                    Praesent aliquet ornare fringilla. ornare fringilla. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                    gravida sem id porta tristique. Phasellus vel felis vitae
                    urna viverra accumsan. Sed at orci nisl. Nunc viverra
                    fringilla ullamcorper. Ut dictum faucibus mollis. Curabitur
                    arcu lorem, porta eget massa fermentum, porta dapibus dolor.
                    Praesent aliquet ornare fringilla. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Aliquam gravida sem id
                    porta tristique. Phasellus vel felis vitae urna viverra
                    accumsan. Sed at orci nisl. Nunc viverra fringilla
                    ullamcorper. Ut dictum faucibus mollis. Curabitur arcu
                    lorem, porta eget massa fermentum, porta dapibus dolor.
                    Praesent aliquet ornare fringilla. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Aliquam gravida sem id
                    porta tristique. Phasellus vel felis vitae urna viverra
                    accumsan. Sed at orci nisl. Nunc viverra fringilla
                    ullamcorper. Ut dictum faucibus mollis. Curabitur arcu
                    lorem, porta eget massa fermentum, porta dapibus dolor.
                    Praesent aliquet ornare fringilla. ornare fringilla. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                    gravida sem id porta tristique. Phasellus vel felis vitae
                    urna viverra accumsan. Sed at orci nisl. Nunc viverra
                    fringilla ullamcorper. Ut dictum faucibus mollis. Curabitur
                    arcu lorem, porta eget massa fermentum, porta dapibus dolor.
                    Praesent aliquet ornare fringilla.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[80px] pt-[64px] flex flex-col gap-[48px]">
        <Typography variant="topic">Map</Typography>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.9977012127747!2d103.8625010244372!3d13.412469260398458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3110168aea9a272d%3A0x3eaba81157b0418d!2sAngkor%20Wat!5e0!3m2!1sen!2skh!4v1680407482324!5m2!1sen!2skh"
          allowFullScreen=""
          loading="lazy"
          className="w-full h-[800px] rounded-[15px] mx-auto"
        />
        <Typography variant="topic">Images</Typography>
        <ImageGrid />
        <Typography variant="topic">Province</Typography>
        <Carousel show={6}>
          {travel.map((item, index) => {
            return (
              <PlaceCard
                key={index}
                title={item.title}
                rating={item.rating}
                cover={item.cover}
              />
            );
          })}
        </Carousel>
      </div>
      <Footer />
    </div>
  );
};

export default Place;
