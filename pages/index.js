import React from "react";

import {
  Carousel,
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
      </div>
    </div>
  );
};
export default Home;
