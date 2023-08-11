import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function ButtonsPlus(button) {
  return (
    <div className="flex justify-center my-5">
      <button className="border-2 border-[#FA849C] w-[8em] p-2 rounded-xl hover:bg-[#FA849C] hover:text-white transition-all ease-in-out duration-450">
        <div className="flex justify-center gap-2 items-center ">
          <Link to={button.url} className="flex items-center ">
            {button.title}
          </Link>
          <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
        </div>
      </button>
    </div>
  );
}

export default ButtonsPlus;
