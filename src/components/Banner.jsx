import React from "react";
const backgroundImage = require("../assets/images/banner.jpg");

function Banner({ title, description }) {
  return (
    <div
      className=" w-[80%] m-auto h-20 flex flex-col justify-center items-center rounded-2xl "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <h1 className="h-auto text-center font-bold text-lg text-white">
        {title}
      </h1>
      <h4 className="h-auto font-medium text-sm text-white text-center px-3 ">
        {description}
      </h4>
    </div>
  );
}

export default Banner;
