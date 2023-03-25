import React from "react";

import {
  Carousel,
  EventCard,
  Header,
  PlaceCard,
  ProvinceCard,
  Typography,
  VideoCard,
} from "../components";
// data
import { travel } from "../utils";
const Home = () => {
  return (
    <div>
      <Header data={travel} />
      <div className="px-[80px] pt-[64px] flex flex-col gap-[48px]">
        <Typography variant="topic">Province</Typography>
        <Carousel show={6}>
          {travel.map((item, index) => {
            return (
              <ProvinceCard key={index} cover={item.cover} title={item.title} />
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
        <Typography variant="topic">Videos</Typography>
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
        <Typography variant="topic">Best Places</Typography>
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
        <EventCard
          title={travel[0].title}
          cover={
            "https://i.ytimg.com/vi/AozfRX05CSQ/maxresdefault.jpg"
          }
          description={travel[0].description}
        />
      </div>
      <div className="h-[200px]">
        footer
      </div>
    </div>
  );
};
export default Home;
