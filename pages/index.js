import React from "react";

import { Button, HeaderCard, Typography } from "../components";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${"https://blog.goway.com/globetrotting/wp-content/uploads/2018/08/Colourful-sunrise-in-Angkor-Wat-Siem-Reap-Cambodia-_679734163.jpg"})`,
      }}
      className="h-screen bg-cover bg-center">
      {/* Header */}
      <div className="grid grid-cols-2 h-full bg-[rgba(0,0,0,0.7)]">
        <div className="flex flex-1">
          <div className="mt-auto ml-[80px] mb-[180px] w-[600px]">
            <Typography variant="display">Siem Reap</Typography>
            <Typography className="mt-[20px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Typography>
            <div className="mt-[48px]">
              <Button>
                Explore
                <ArrowLongRightIcon className="w-6 h-6 ml-[24px]" />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-1 overflow-clip items-center h-full">
          <div className="inline-flex flex-row gap-x-4 items-center">
            <HeaderCard
              active
              title="Siem Reap"
              rating={5}
              cover="https://i.natgeofe.com/n/b3cb5fa3-9671-4ca3-b7d1-748ec110a7b4/siem-reap-01_3x2.jpg"
            />
            <HeaderCard
              title="Siem Reap"
              rating={5}
              cover="https://cdn.britannica.com/32/93932-050-B213E0FB/ocean-water-beach-The-Bahamas-Grand-Bahama.jpg"
            />
            <HeaderCard
              title="Siem Reap"
              rating={5}
              cover="https://www.eea.europa.eu/highlights/eight-facts-about-europe2019s-forest-ecosystems/image_print"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
