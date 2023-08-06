import React from "react";

function Title(title) {
  return (
    <div>
      <h2>{title.title}</h2>
      <p>{title.subtitle}</p>
    </div>
  );
}

export default Title;
