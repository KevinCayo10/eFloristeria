import React, { useState } from "react";
import Banner from "../components/Banner";
import FilterProduct from "../components/FilterProduct";
import Title from "../components/Title";
import CardProduct from "../components/CardProduct";
import { useEffect } from "react";
import ProductService from "../services/ProductServices";

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    ProductService.getProducts()
      .then((data) => {
        setProductos(data);
      })
      .catch((error) => {
        console.error("Error en la petición getProducts:", error);
      });
  }, []);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? productos
      : productos.filter((product) => product.categoria === selectedCategory);

  return (
    <div className="">
      <div>
        <Banner
          title={"Tienda"}
          description={"Aqui encontraras los mejores detalles"}
        ></Banner>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 w-[80%] m-auto">
        <div className="lg:col-span-9 w-full sm:max-w-7xl mx-auto my-5 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:max-w-7xl mx-auto gap-2 my-5 ">
            {filteredProducts.map((item, index) => {
              return <CardProduct producto={item} />;
            })}
          </div>
        </div>

        <div className="lg:col-span-3 p-4">
          <Title title="Categorías" align="left" />
          <FilterProduct
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategoryFilter}
          />
        </div>
      </div>
    </div>
  );
}

export default Shop;
