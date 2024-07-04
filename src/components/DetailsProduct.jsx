import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Magnifier } from "./utils/Magnifier";

function DetailsProduct({ product, categoria }) {
  const [number, setNumber] = useState(1);

  const whatsappHandles = () => {
    const message =
      `Hola, estoy interesado en el siguiente producto: \n\n` +
      `ID: ${product.id_pro}\n` +
      `Precio: ${product.prec_pro}\n` +
      `Imagen: ${product.img_pro}\n`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/+593999160223?text=${encodedMessage}`, "_blank");
    window.open(`https://wa.me/+593999160223?text=${message}`, "_blank");
  };
  useEffect(() => {
    console.log("CATEGORIA : ", categoria);
  }, []);
  return (
    <div className=" flex flex-col md:flex-row max-w-screen-xl px-4 py-4 mx-auto lg:px-6  m-auto  gap-6 justify-center">
      {/* sección de la imagen */}
      <div className="flex  justify-center max-w-5xl  ">
        <div
          className="relative w-full h-full"
          style={{ width: "300px", height: "450px" }}
        >
          <Magnifier imageURL={product.img_pro} />
        </div>
      </div>
      {/* Sección del detalle */}
      <div className="flex flex-col  w-full md:w-1/2  px-4">
        <h2 className="text-3xl font-extrabold tracking-tight mb-4">
          {product.id_pro}
        </h2>
        <p className="font-bold text-xl text-pink-600 mb-4 ">
          ${product.prec_pro}
        </p>
        <p className=" font-light lg:text-xl mb-4">{product.desc_pro}</p>
        {/* Comprar 1 o mas */}
        <div className=" flex flex-row  py-4">
          <div className="flex flex-row items-center">
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
            <div className="mx-5 rounded-full border-2 border-gray-300 bg-white w-10 font-light lg:text-xl ">
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
          <div className="mx-5 ">
            <button
              type="button"
              className="bg-pink-600 hover:bg-pink-500 text-white font-light lg:text-xl  px-4 rounded-full py-2 "
            >
              Comprar
              <FontAwesomeIcon
                icon="fa-solid fa-cart-shopping"
                className="px-2"
              />
            </button>
          </div>
        </div>
        <p className="font-light lg:text-xl  py-2">
          <span>Categoría:</span> {categoria.nom_cate}
        </p>
        <button
          className="bg-green-600 hover:bg-green-500 text-white font-light lg:text-xl   px-4 rounded-full py-2 w-1/2"
          onClick={whatsappHandles}
        >
          Ordenar por Whatsapp
          <FontAwesomeIcon icon="fa-brands fa-whatsapp" className="px-2" />
        </button>
      </div>
    </div>
  );
}

export default DetailsProduct;
