import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function DetailsProduct({ product }) {
  const [number, setNumber] = useState(1);

  return (
    <div className="border-2 grid grid-cols-1 lg:grid-cols-6 w-[80%] m-auto">
      <div className="lg:col-span-2 border-2 flex justify-center">
        <img src={product.img_pro} alt="" />
      </div>
      <div className="lg:col-span-4 border-2">
        <div>
          <h1 className="font-bold text-2xl">$ {product.pre_pro}</h1>
          <p className="font-medium text-base">{product.desc_pro}</p>
        </div>
        <div className=" flex flex-row bg-red-500">
          {/* Disminuir y Aumentar */}
          <div className="flex flex-row">
            <div>
              <FontAwesomeIcon
                icon="fa-solid fa-circle-minus"
                size="xl"
                color="#fa849c"
                onClick={() => {
                  setNumber(number - 1);
                }}
              />
            </div>
            <div className="mx-5 rounded-full border-2 border-gray-300 bg-white w-10">
              <h3 className="text-[#8f8f8f8] font-semibold  text-center">
                {number}
              </h3>
            </div>
            <div>
              <FontAwesomeIcon
                icon="fa-solid fa-circle-plus"
                size="xl"
                color="#fa849c"
                className=""
                onClick={() => {
                  setNumber(number + 1);
                }}
              />
            </div>
          </div>
          <div className="mx-5 bg-red-200">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold  px-4 rounded-full"
            >
              Comprar
            </button>
          </div>
        </div>
        <div>
          <p>
            <span>Id:</span> {product.id_pro}
          </p>
          <p>
            <span>Categoría:</span> {product.categoria}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsProduct;
