import React from "react";
import { RedesData } from "../data/RedesData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="bg-[#FA849C] flex-col justify-center ">
      {/* 1er Iconos de redes sociales */}
      <div className="flex justify-center p-5">
        {RedesData.map((item, index) => {
          return (
            <div
              className="h-[40px] w-[40px]  text-white hover:bg-[#ffff]  
            hover:text-[#FA849C] border-2 rounded-full  mx-2  flex justify-center items-center"
            >
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={item.icon} size="lg" />
              </a>
            </div>
          );
        })}
      </div>
      {/* 2do Derechos reservados */}
      <div className="pb-10">
        <p className="text-center text-white">
          2023 Todos los derechos reservados @KC-Dev
        </p>
      </div>
    </div>
  );
};

export default Footer;
