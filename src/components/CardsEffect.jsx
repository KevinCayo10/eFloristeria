import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function CardsEffect({ title, description, color, icon, image, key }) {
  return (
    <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10 h-full shadow-lg ">
      <span className="absolute top-0 left-0 right-0 bottom-0 flex items-center h-1 w-full bg-pink-500 transition-all duration-300 group-hover:scale-[500] "></span>
      <div className="relative z-10 mx-auto max-w-md flex flex-col items-center justify-center text-center ">
        <span className="grid h-20 w-20 place-items-center rounded-full bg-pink-500 transition-all duration-300 group-hover:bg-pink-400">
          {icon && (
            <FontAwesomeIcon
              className="h-10 w-10 text-white transition-all"
              icon={icon}
            />
          )}
          {image && <img src={image} alt="icon" className="h-10 w-10" />}
        </span>
        <div className="flex-1 flex flex-col justify-between">
          <div className="space-y-6 font-bold lg:text-xl leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90 py-2 ">
            <p>{title}</p>
          </div>
          <div className="space-y-6 font-light lg:text-xl leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsEffect;
