import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardDuty = ({ id, icon, title, description }) => {
  return (
    <div
      className="w-5/6 h-[240px] sm:h-[310px] lg:h-[260px] p-2 m-auto rounded-xl transform transition-all hover:translate-y-1 duration-200 shadow-lg hover:shadow-xl  hover:shadow-2xl sm:mx-auto sm:max-w-sm rounded-2xl sm:px-10 h-full shadow-lg overflow-hidden bg-white px-6 pt-10 pb-8   "
      key={id}
    >
      <div className="flex-col  h-full">
        {/* Agregamos una clase flex y centrado vertical */}
        <div className="bg-pink-600 w-[100px] h-[100px] flex items-center justify-center rounded-full m-auto">
          <FontAwesomeIcon icon={icon} size="2x" color="white" />
        </div>

        <div className=" my-2  ">
          <h2 className="font-bold text-lg text-center text-[#383838]">
            {title}
          </h2>
        </div>
        <div className=" flex-col ">
          <p className="text-sm text-gray-500 text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDuty;
