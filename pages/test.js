import React from "react";
import { EventCard } from "../components";
import { travel } from "../utils";
const Test = () => {
  return (
    <div>
      <EventCard
        title={travel[0].title}
        cover={"https://uploads.exoticca.com/en_UK/destination/country/cambodia-events.png"}
        description={travel[0].description}
      />
    </div>
  );
};

export default Test;
