import React from "react";

const LineSeparator = ({ color = "black", width = "100%", height = "2px" }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        width: width,
        height: height,
        margin: "20px 0",
      }}
      className="mx-auto"
    ></div>
  );
};

export default LineSeparator;
