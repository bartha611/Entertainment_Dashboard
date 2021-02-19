import React from "react";

const CirclePercentage = ({ radius, value }) => {
  const normalizedRadius = radius - 8;
  const circumference = 2 * normalizedRadius * Math.PI;
  const offset = circumference - (value / 100) * circumference;
  let color;
  if (value > 70) {
    color = "green";
  } else if (value > 50) {
    color = "yellow";
  } else {
    color = "red";
  }

  return (
    <svg className="progress-ring" height={radius * 2} width={radius * 2}>
      <circle
        className="progress-ring__circle"
        strokeWidth="4"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={offset}
        stroke={color}
        fill="transparent"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      ></circle>
      <text
        x="50%"
        y="50%"
        fontSize="1.2em"
        dy=".3em"
        textAnchor="middle"
        fill="white"
      >
        <tspan>{value}</tspan>
        <tspan fontSize=".5em" dy="-.5em">
          %
        </tspan>
      </text>
    </svg>
  );
};

export default CirclePercentage;
