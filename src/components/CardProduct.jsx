import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function CardProduct({ producto }) {
  const [compra, setCompra] = useState(false);
  console.log("PRODUCTO CARD PRODUCTO : ", producto.id);
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
    <div className="w-full group ">
      <div className="relative overflow-hidden shadow-sm  hover:shadow-md border rounded-2xl pb-4 ">
        <img
          src={producto.img_pro}
          alt=""
          className="w-full max-h-60 md:max-h-80 h-auto object-cover rounded-2xl"
        />
        <div className="absolute h-full w-full bg-black/0 flex justify-end items-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex flex-col justify-end  gap-2 px-4">
            <Link
              className="bg-white border rounded-full text-pink-500 font-light lg:text-x flex items-center justify-center w-10 h-10"
              title="Detallar"
              to={`/product/${producto.id_pro}`}
            >
              <FontAwesomeIcon icon="fa-solid fa-eye" />
            </Link>
            <button
              className="bg-white border rounded-full text-pink-500 font-light lg:text-x flex items-center justify-center w-10 h-10"
              title="Me gusta"
            >
              <FontAwesomeIcon icon="fa-regular fa-heart" />
            </button>
            <button
              className="bg-white border rounded-full text-pink-500 font-light lg:text-x flex items-center justify-center w-10 h-10"
              onClick={compra ? null : handleAddToCart}
              title="Agregar a carrito"
            >
              <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-2 sm:py-4">
          <h5 className="font-medium lg:text-x text-pink-600 ">
            {producto.categorias.nom_cate} * {producto.id_pro}
          </h5>
          <p className="font-bold lg:text-x  ">${producto.prec_pro}</p>
        </div>
      </div>
    </div>

    // <div
    //   className="w-5/6 p-2 m-auto rounded-xl transform transition-all hover:translate-y-1 duration-200 shadow-lg hover:shadow-xl  "
    //   key={producto.id_pro}
    // >
    //   <div className="flex flex-col productos-center">
    //     {/* Agregamos una clase flex y centrado vertical */}
    //     <img
    //       src={producto.img_pro}
    //       alt=""
    //       className="w-full  h-[200px] object-cover rounded-2xl" // Ajustamos el tamaño de la imagen
    //     />
    //     <Link to={`/producto/${producto.id_pro}`}>
    //       <h2 className="font-bold text-lg">{producto.id_pro}</h2>
    //     </Link>
    //     <div className=" flex-col ">
    //       <p className="text-sm text-gray-500">$ {producto.pre_pro}</p>
    //       <FontAwesomeIcon
    //         icon={faCartPlus}
    //         className={`mx-2 cursor-pointer ${
    //           compra ? "text-green-500" : "text-blue-500"
    //         }`}
    //         style={{ pointerEvents: compra ? "none" : "auto" }}
    //         onClick={compra ? null : handleAddToCart}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}

export default CardProduct;
