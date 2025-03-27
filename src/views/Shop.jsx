import React, { useState } from "react";
import Banner from "../components/Shared/Banner";
import FilterProduct from "../components/FilterProduct";
import Title from "../components/Shared/Title";
import CardProduct from "../components/CardProduct";
import { useEffect } from "react";
import ProductService from "../services/ProductServices";
import Dropdown from "../components/Dropdown";
import { Select, SelectItem, Slider } from "@nextui-org/react";
import { CategoryData } from "../data/CategoryData";

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [productos, setProductos] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    ProductService.getProducts()
      .then((data) => {
        setProductos(data);
        setFilterProducts(data);
      })
      .catch((error) => {
        console.error("Error en la petición getProducts:", error);
      });
  }, []);

  const handleCategoryFilter = (category) => {
    console.log("categoria : ", category);
    console.log("producto categoria : ", productos[2].categorias.nom_cate);

    const filteredProducts =
      category === "All"
        ? productos
        : productos.filter(
            (product) => product.categorias.nom_cate === category
          );
    console.log("Productos filtrados : ", filterProducts);
    setFilterProducts(filteredProducts);
  };

  useEffect(() => {}, []);

  return (
    <div className="mt-32">
      <div>
        <Banner
          title={"Tienda"}
          description={"Aqui encontraras los mejores detalles"}
        ></Banner>
      </div>

      <div className="  max-w-screen-xl px-4 py-4 mx-auto  lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Select label="Filtar por categoría">
            <SelectItem onClick={() => handleCategoryFilter("All")} value="All">
              Todos
            </SelectItem>
            {CategoryData.map((item) => {
              return (
                <SelectItem
                  onClick={() => handleCategoryFilter(item.category)}
                  value={item.category}
                  key={item.id}
                >
                  {item.category}
                </SelectItem>
              );
            })}
          </Select>
          <Slider
            label="Rango de precio"
            step={5}
            minValue={0}
            maxValue={100}
            defaultValue={[5, 20]}
            formatOptions={{ style: "currency", currency: "USD" }}
            className="max-w-md"
          />
        </div>
        <div className="lg:col-span-9 w-full sm:max-w-7xl mx-auto my-5 ">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 sm:max-w-7xl mx-auto gap-6 my-5 ">
            {filterProducts.map((item, index) => {
              return <CardProduct key={index} producto={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
