import React from "react";

import { Header, ProvinceCard, Typography } from "../components";
// data
import { travel } from "../utils";
const Home = () => {
  return (
    <div>
      <Header data={travel} />
      {/* body */}
      <div className="px-[80px] pt-[64px] flex flex-col gap-[48px]">
        <Typography variant="topic">Province</Typography>
        <div className="flex gap-10 flex-wrap">
          {travel.map((item, index) => {
            return (
              <ProvinceCard key={index} cover={item.cover} title={item.title} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;
