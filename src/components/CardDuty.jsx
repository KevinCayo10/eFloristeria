import React from "react";
import { DutyData } from "../data/DutyData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardDuty = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3  w-[80%] h-auto sm:max-w-7xl mx-auto gap-2">
      {DutyData.map((item, index) => {
        return (
          <div
            className="w-5/6 h-[260px] sm:h-[320px] lg:h-[260px] p-2 m-auto rounded-xl transform transition-all hover:translate-y-1 duration-200 shadow-lg hover:shadow-xl "
            key={index}
          >
            <div className="flex-col  h-full">
              {/* Agregamos una clase flex y centrado vertical */}
              <div className="bg-[#FA849C] w-[100px] h-[100px] flex items-center justify-center rounded-full m-auto">
                <FontAwesomeIcon icon={item.icon} size="2x" color="white" />
              </div>

              <div className=" my-2  ">
                <h2 className="font-bold text-lg text-center text-[#383838]">
                  {item.title}
                </h2>
              </div>
              <div className=" flex-col ">
                <p className="text-sm text-gray-500 text-center">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardDuty;
