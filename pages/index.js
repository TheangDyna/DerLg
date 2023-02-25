import React from "react";

import {
  Carousel,
  Header,
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
      {/* body */}
      <div className="px-[80px] pt-[64px] flex flex-col gap-[48px]">
        <Typography variant="topic">Province</Typography>
        <Carousel>
          {travel.map((item, index) => {
            return (
              <ProvinceCard key={index} cover={item.cover} title={item.title} />
            );
          })}
        </Carousel>
        <Typography variant="topic">Videos</Typography>
        <VideoCard
          rating={travel[0].rating}
          title={travel[0].title}
          cover={travel[0].cover}
        />
      </div>
    </div>
  );
};
export default Home;
