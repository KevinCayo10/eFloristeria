import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CardProduct({ producto }) {
  const [compra, setCompra] = useState(false);

  const handleAddToCart = () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let numOrden = 1;
    if (carrito.length > 0) {
      const ultimoProducto = carrito[carrito.length - 1];
      numOrden = ultimoProducto.numOrden + 1;
    }
    producto.numOrden = numOrden;
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    setCompra(true);
  };

  return (
    <div
      className="w-5/6 p-2 m-auto rounded-xl transform transition-all hover:translate-y-1 duration-200 shadow-lg hover:shadow-xl  "
      key={producto.id_pro}
    >
      <div className="flex flex-col productos-center">
        {/* Agregamos una clase flex y centrado vertical */}
        <img
          src={producto.img_pro}
          alt=""
          className="w-full  h-[200px] object-cover rounded-2xl" // Ajustamos el tamaño de la imagen
        />
        <Link to={`/producto/${producto.id_pro}`}>
          <h2 className="font-bold text-lg">{producto.id_pro}</h2>
        </Link>
        <div className=" flex-col ">
          <p className="text-sm text-gray-500">$ {producto.pre_pro}</p>
          <FontAwesomeIcon
            icon={faCartPlus}
            className={`mx-2 cursor-pointer ${
              compra ? "text-green-500" : "text-blue-500"
            }`}
            style={{ pointerEvents: compra ? "none" : "auto" }}
            onClick={compra ? null : handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
