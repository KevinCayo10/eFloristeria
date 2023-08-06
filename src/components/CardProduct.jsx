import React from "react";
import { Products } from "./Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCartShopping } from "@fortawesome/free-solid-svg-icons";

function CardProduct() {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 w-[80%] sm:max-w-7xl mx-auto gap-2 ">
      {Products.map((item, index) => {
        return (
          <div
            className="w-5/6 p-2 m-auto rounded-xl transform transition-all hover:translate-y-1 duration-200 shadow-lg hover:shadow-xl "
            key={item.id}
          >
            <div className="flex flex-col items-center">
              {/* Agregamos una clase flex y centrado vertical */}
              <img
                src={item.img}
                alt=""
                className="w-full  object-cover rounded-2xl" // Ajustamos el tamaño de la imagen
              />
              <h2 className="font-bold text-lg">{item.id}</h2>
              <div className=" flex-col ">
                <p className="text-sm text-gray-500">$ {item.price}</p>
                <FontAwesomeIcon icon={faCartPlus} className="mx-2" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardProduct;
