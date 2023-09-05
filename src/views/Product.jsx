import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import DetailsProduct from "../components/DetailsProduct";
import ProductService from "../services/ProductServices";

function Product() {
  const id = useParams().id;
  const [product, setProduct] = useState({});
  useEffect(() => {
    ProductService.getProductDetail(id)
      .then((result) => {
        setProduct(result[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  console.log(product);
  return (
    <div>
      <div>
        <Banner title={`Detalle ${product.id_pro}`} />
      </div>
      <div>
        <DetailsProduct product={product} />
      </div>
    </div>
  );
}

export default Product;
