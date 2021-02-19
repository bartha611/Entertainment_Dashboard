import React from "react";
import Image from "next/image";
import CirclePercentage from "./CirclePercentage";

const Rating = ({ rating }) => {
  const { Value, image, Source } = rating;
  const formatRating = (value) => {
    const arr = value.split("/");
    if (arr.length > 1) {
      return Math.round((100 * parseFloat(arr[0])) / parseInt(arr[1], 0));
    }
    return parseFloat(value);
  };

  return (
    <div className="showPage__review">
      <Image
        height="40"
        width={Source === "Internet Movie Database" ? "60" : "40"}
        src={image}
        alt="Reviewer source"
      />
      <CirclePercentage value={formatRating(Value)} radius={28} />
    </div>
  );
};

export default Rating;
