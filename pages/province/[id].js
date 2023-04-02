import React, { useState, useEffect } from "react";
import {
  Carousel,
  Footer,
  ImageGrid,
  PlaceCard,
  ProvinceCard,
  Typography,
  BackNavigation,
} from "../../components";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import { travel } from "../../utils";

const header = "https://rare-gallery.com/thumbs/1242298-angkor-wat-art.jpg";

const ProvinceDetail = () => {
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
        <BackNavigation title="SiemReap - Province" />
        <div
          className={`absolute top-2/3 left-[80px] -translate-y-1/2 w-[600px] duration-500 ease-in-out ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          <Typography variant="display" className="text-white">
            Siem Reap
          </Typography>
          <Typography className="mt-[20px] line-clamp-6 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            nisl felis, elementum ut imperdiet vel, mattis eu nunc. Curabitur
            non lectus ligula. Quisque mattis ultricies sapien, a iaculis enim
            accumsan eu. Nam vel lorem in turpis imperdiet egestas sed vel
            massa. Proin maximus laoreet sem, non varius velit cursus quis.
          </Typography>
        </div>
      </div>
      <div className="px-[80px] pt-[64px] flex flex-col gap-[48px]">
        <Typography variant="topic" className="text-white">
          Best Places
        </Typography>
        <div className="grid grid-cols-6 gap-[48px]">
          {travel.map((item, index) => {
            return (
              <PlaceCard
                key={index}
                title={item.title}
                rating={item.rating}
                cover={item.cover}
                id={index}
              />
            );
          })}
        </div>
        <Typography variant="topic" className="text-white">
          Map
        </Typography>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d993507.4740047246!2d103.73298034111976!3d13.419223826921037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3110170b07d4a0f5%3A0x5ddbd370ce73acb9!2sSiem%20Reap%20Province!5e0!3m2!1sen!2skh!4v1680137698219!5m2!1sen!2skh"
          allowFullScreen=""
          loading="lazy"
          className="w-full h-[800px] rounded-[15px] mx-auto"
        />
        <Typography variant="topic" className="text-white">
          Images
        </Typography>
        <ImageGrid />
        <Typography variant="topic" className="text-white">
          Province
        </Typography>
        <Carousel show={6}>
          {travel.map((item, index) => {
            return (
              <ProvinceCard
                key={index}
                cover={item.cover}
                title={item.title}
                id={index}
              />
            );
          })}
        </Carousel>
      </div>
      <Footer />
    </div>
  );
};

export default ProvinceDetail;
