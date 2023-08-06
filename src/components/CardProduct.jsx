import React from "react";
import { Products } from "./Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCartShopping } from "@fortawesome/free-solid-svg-icons";

function CardProduct() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 max-w-7xl mx-auto gap-2 bg-gray-400">
      {Products.map((item, index) => {
        return (
          // Card
          <div
            className="w-full p-2  rounded-xl transform transition-all hover:translate-y-1 duration-200 shadow-lg hover:shadow-xl"
            key={item.id}
          >
            {/* Image card */}
            <img
              src={item.img}
              alt=""
              className="max-h-60 w-full object-cover rounded-2xl"
            />
            {/* Header */}
            <h2 className="font-bold text-lg">{item.id}</h2>
            <div className="bg-gray-200 flex justify-between">
              {/* Description */}
              <p className="text-sm text-gray-500 ">$ {item.price}</p>
              {/* Cart */}
              <FontAwesomeIcon icon={faCartPlus} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardProduct;
