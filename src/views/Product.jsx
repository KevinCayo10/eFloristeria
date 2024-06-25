import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import ProductService from "../services/ProductServices";
import DetailsProduct from "../components/DetailsProduct";

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
    <div className="mt-32">
      <section>
        <Banner title={`Detalle ${product.id_pro}`} />
      </section>
      <section>
        <DetailsProduct product={product} />
      </section>
    </div>
  );
}

export default Product;
