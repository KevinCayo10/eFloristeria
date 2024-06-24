import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function ButtonsPlus(button) {
  return (
    <div className="flex justify-center my-5">
      <button className="border rounded-full my-4 py-2 px-4 bg-pink-600 text-white hover:bg-pink-500 font-light lg:text-xl">
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
