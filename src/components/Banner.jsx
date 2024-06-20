import React from "react";
const backgroundImage = require("../assets/images/banner002.jpg");

function Banner({ title, description }) {
  return (
    <div
      className="   "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <h1 className="h-auto text-center font-bold text-4xl text-white">
        {title}
      </h1>
      <h4 className="h-auto font-medium text-xl text-white text-center px-3 ">
        {description}
      </h4>
    </div>
  );
}

export default Banner;
