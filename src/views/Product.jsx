import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/Shared/Banner";
import DetailsProduct from "../components/DetailsProduct";
import ProductService from "../services/ProductServices";

function Product() {
  const { id } = useParams(); // Obtener el ID directamente aquí
  const [product, setProduct] = useState({});

  useEffect(() => {
    console.log("Inside useEffect, PRODUCT ID 2: ", id);

    if (id) {
      ProductService.getProductDetail(id)
        .then((result) => {
          console.log("CATEGORIAS SERVICE  : : ", result.categorias.nom_cate);
          setProduct(result);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  return (
    <div className="mt-32">
      <section>
        <Banner title={`Detalle ${product.id_pro}`} />
      </section>
      <section>
        {product.categorias && (
          <DetailsProduct product={product} categoria={product.categorias} />
        )}
      </section>
    </div>
  );
}

export default Product;
