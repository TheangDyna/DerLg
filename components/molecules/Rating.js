import React from "react";

import { StarIcon as StarIconOulined } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

const Rating = ({ rating = 0, className = "" }) => {
  let rate = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      rate.push(true);
    } else {
      rate.push(false);
    }
  }

  const _style = `w-6 h-6 text-[#F0A500] ${className}`;
  return (
    <div className="flex flex-row gap-x-2">
      {rate.map((item, index) => {
        return item ? (
          <StarIconSolid key={index} className={`${_style}`} />
        ) : (
          <StarIconOulined key={index} className={`${_style}`} />
        );
      })}
    </div>
  );
};

export default Rating;
