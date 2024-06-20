import React from "react";
import { MenuData } from "../data/MenuData";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RedesData } from "../data/RedesData";
const Footer = () => {
  return (
    <footer class="bg-gray-100 ">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="flex flex-col md:flex-row sm:items-center justify-center md:justify-between ">
          <a
            href="#inicio"
            className="flex items-center justify-center mb-4  space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-800 ">
              Detalles y Floreria El Regalo Ideal
            </span>
          </a>
          <ul className="flex flex-wrap justify-center items-center text-sm font-medium  text-gray-700 ">
            {MenuData.map((item, index) => {
              return (
                <div key={index} className="relative group">
                  <Link
                    to={item.url}
                    className="px-2 py-2 hover:text-[#fa849c]"
                  >
                    {item.title}
                  </Link>
                </div>
              );
            })}
          </ul>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto dark:border-gray-400 lg:my-8 " />
        <div className="flex flex-col md:flex-row items-center  justify-center md:justify-between  ">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-700  flex flex-row justify-center md:mb-0 mb-5 ">
            © 2024
            <p className="hover:underline ml-2">D. F. El Regalo Ideal</p>. All
            Rights Reserved.
          </span>
          <div className="flex  flex-row justify-center  ">
            {RedesData.map((item, index) => {
              return (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className=" hover:text-gray-900 text-gray-600  px-2 py-1"
                  key={index}
                >
                  <FontAwesomeIcon icon={item.icon} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
