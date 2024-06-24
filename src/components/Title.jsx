import React from "react";

function Title(title) {
  return (
    <div className=" m-3">
      <h2
        className={`text-${title.align} text-3xl font-extrabold tracking-tight text-gray-900 mb-4`}
      >
        {title.title}
      </h2>
      <p className="text-center font-light lg:text-xl mb-4">{title.subtitle}</p>
    </div>
  );
}

export default Title;
