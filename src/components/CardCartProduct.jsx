import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

function CardCartProduct() {
  const [carrito, setCarrito] = useState([]);
  useEffect(() => {
    const carrito = JSON.parse(localStorage.getItem("carrito"));
    setCarrito(carrito || []); // Si no hay datos en localStorage, establece un arreglo vacío
  }, []);
  const deleteProduct = (item) => {
    console.log("Entro a delete");
    const carritoUpdate = carrito.filter(
      (product) => product.id_pro !== item.id_pro
    );
    setCarrito(carritoUpdate);
    setOrderNumber(carritoUpdate.length);
    localStorage.setItem("carrito", JSON.stringify(carritoUpdate));
  };
  return (
    <div className="w-[150px]">
      {carrito.map((item, index) => {
        return (
          <div
            className="grid grid-cols-9  gap-1 bg-red-200 my-1 "
            key={item.id_pro}
          >
            <div className="col-span-2 bg-green-200">
              {/* imagen */}
              <img src={item.img_pro} alt="" className="w-10 " />
            </div>
            <div className="col-span-5 bg-gray-200 flex flex-col justify-start items-center">
              {/* texto */}
              <p>{item.id_pro}</p>
              <p>
                <span>$ </span>
                {item.pre_pro}
              </p>
            </div>
            <div className="col-span-2 bg-blue-200 flex items-center justify-center">
              {/* button delete */}
              <button
                type="button"
                className=""
                onClick={() => {
                  deleteProduct(item);
                }}
              >
                <FontAwesomeIcon icon="fa-solid fa-xmark" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardCartProduct;
