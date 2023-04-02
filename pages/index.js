import React from "react";

import {
  Carousel,
  EventCard,
  Footer,
  Header,
  PlaceCard,
  ProvinceCard,
  Typography,
  VideoCard,
} from "../components";

import { travel } from "../utils";
const Home = () => {
  const scrollToSection = () => {
    document.getElementById("body").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Header data={travel} onNavigate={() => scrollToSection()} />
      <div
        className="px-[80px] pt-[64px] flex flex-col space-y-[48px]"
        id="body"
      >
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
        <EventCard
          title={travel[0].title}
          cover={
            "https://uploads.exoticca.com/en_UK/destination/country/cambodia-events.png"
          }
          description={travel[0].description}
        />
        <Typography variant="topic" className="text-white">
          Videos
        </Typography>
        <Carousel show={6}>
          {travel.map((item, index) => {
            return (
              <VideoCard
                key={index}
                cover={item.cover}
                description={item.description}
                video={item.video}
              />
            );
          })}
        </Carousel>
        <EventCard
          title={travel[0].title}
          cover={
            "https://www.sokhahotels.com.kh/sihanoukville/img/theme-dinners/beach-side/gallery/beach-side.jpg"
          }
          description={travel[0].description}
        />
        <Typography variant="topic" className="text-white">
          Best Places
        </Typography>
        <Carousel show={6}>
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
        </Carousel>
        <EventCard
          title={travel[0].title}
          cover={"https://i.ytimg.com/vi/AozfRX05CSQ/maxresdefault.jpg"}
          description={travel[0].description}
        />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
