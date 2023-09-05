import React, { useState } from "react";
import { MenuData, MenuTienda } from "../data/MenuData";
import logo from "../assets/icons/DyF_ElRegaloIdeal.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
  };
  return (
    <div className="app">
      <nav>
        <div className="max-w-7xl mx-auto">
          <div className="flex mx-auto justify-between w-5/6  ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-5 py-2  w-full">
              {/* logo */}
              <div className="">
                <Link to="/" className="flex gap-1 font-bold  items-center ">
                  <img src={logo} alt="Logo_DF" className="w-[5em] " />
                </Link>
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-8">
                {MenuData.map((item, index) => {
                  return (
                    <div className="relative group" key={index}>
                      <Link
                        to={item.url}
                        className={`text-[#8e8e8e] hover:text-[#fa849c] active:text-[#fa849c] ${
                          activeMenuItem === index ? "text-[#fa849c]" : ""
                        }`}
                        onClick={() => handleMenuItemClick(index)}
                      >
                        {item.title}
                      </Link>
                      {index === MenuData.length - 1 && (
                        <div className="absolute hidden group-hover:block bg-white shadow-md p-2 mt-1">
                          {/* Submenu content */}
                          {MenuTienda.map((item, index) => {
                            return (
                              <div className=" " key={index}>
                                <Link
                                  to={item.url}
                                  className={`text-[#8e8e8e] hover:text-[#fa849c]  `}
                                >
                                  {item.title}
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="flex  gap-10 items-end justify-end ml-auto mx-0">
                <a href="/cart" className="hover:text-[#fa849c] ">
                  <FontAwesomeIcon icon="cart-shopping" />
                </a>
                <a href="/user" className="hover:text-[#fa849c]">
                  <FontAwesomeIcon icon="user" />
                </a>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6 ">
              <div className="hidden xs:flex items-center gap-10">
                <div className="hidden lg:flex items-center gap-2"></div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button
                  className="ml-5"
                  onClick={() => setToggleMenu(!toggleMenu)}
                >
                  <FontAwesomeIcon
                    icon={toggleMenu === true ? "xmark" : "bars"}
                  />
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
              {MenuData.map((item, index) => {
                return (
                  <Link
                    to={item.url}
                    className={`border-gray-600 ${
                      activeMenuItem === index
                        ? "text-[#fa849c]"
                        : "text-[#8e8e8e]"
                    }`}
                    onClick={() => {
                      setToggleMenu(!toggleMenu);
                      handleMenuItemClick(index);
                    }}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
