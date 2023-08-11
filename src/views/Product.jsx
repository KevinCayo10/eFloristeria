import React from "react";
import { useParams } from "react-router-dom";

function Product() {
  const id = useParams().id;
  console.log(id);
  return <div>Product</div>;
}

export default Product;
