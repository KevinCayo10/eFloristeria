import React from "react";
import { Products } from "../data/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

function CardCategory() {
  const displayedProducts = Products.slice(0, 3); // Obtiene los primeros tres elementos

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 w-[80%] sm:max-w-7xl mx-auto gap-2 ">
      {displayedProducts.map((item, index) => {
        return (
          <div
            className={`w-5/6 p-2 m-auto rounded-xl transform transition-all hover:translate-y-1 duration-200 shadow-lg hover:shadow-xl ${
              index === 0 || index === displayedProducts.length - 1
                ? " mt-1 sm:-mt-20 "
                : ""
            }`}
            key={item.id}
          >
            <div className="flex flex-col items-center">
              {/* Agregamos una clase flex y centrado vertical */}
              <img
                src={item.img}
                alt=""
                className="w-full  object-cover rounded-2xl" // Ajustamos el tamaño de la imagen
              />
              <h2 className="font-bold text-lg ">{item.category}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardCategory;
