import React from "react";

function Title(title) {
  return (
    <div className=" m-3">
      <h2 className={`text-${title.align} font-bold text-xl text-[#383838]`}>
        {title.title}
      </h2>
      <p className="text-center font-sm text-[#8e8e8e]">{title.subtitle}</p>
    </div>
  );
}

export default Title;
