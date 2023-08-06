import React, { useState } from "react";
import { MenuData } from "./MenuData";
import logo from "../assets/icons/DyF_ElRegaloIdeal.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app">
      <nav>
        <div className="max-w-7xl mx-auto bg-red-200">
          <div className="flex mx-auto justify-between w-5/6  bg-green-200">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-10 py-2 border-2 w-full">
              {/* logo */}
              <div className="bg-gray-300">
                <a href="/" className="flex gap-1 font-bold  items-center ">
                  <img src={logo} alt="Logo_DF" className="w-[5em] " />
                </a>
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-8 bg-slate-200 ">
                {MenuData.map((item, index) => {
                  return (
                    <a
                      href={item.url}
                      className=" text-[#8e8e8e] hover:text-[#fa849c] active:text-[#fa849c]"
                    >
                      {item.title}
                    </a>
                  );
                })}
              </div>
              <div className="flex gap-6 items-end  justify-end bg-red-300">
                <a href="/cart">
                  <FontAwesomeIcon icon={faCartShopping} />
                </a>
                <a href="/cart">
                  <FontAwesomeIcon icon={faUser} />
                </a>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              <div className="hidden xs:flex items-center gap-10">
                <div className="hidden lg:flex items-center gap-2"></div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  {toggleMenu === true ? (
                    <FontAwesomeIcon icon={faXmark} />
                  ) : (
                    <FontAwesomeIcon icon={faBars} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              <a href="#" className="border-l-4 border-gray-600">
                Features
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
