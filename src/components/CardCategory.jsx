import React from "react";

function CardCategory({ id, img, category }) {
  return (
    <div
      className={`w-5/6 m-auto rounded-xl transform transition-all hover:translate-y-1 duration-200 shadow-lg hover:shadow-xl`}
      key={id}
    >
      <div className="flex flex-col items-center">
        {/* Agregamos una clase flex y centrado vertical */}
        <img
          src={img}
          alt=""
          className="w-full  object-cover rounded-2xl" // Ajustamos el tamaño de la imagen
        />
        {/* <h2 className="font-bold text-lg ">{category}</h2> */}
      </div>
    </div>
  );
}

export default CardCategory;
