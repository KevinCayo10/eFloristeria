import React, { useEffect, useState } from "react";
import CategoryServices from "../services/CategoryServices";

function FilterProduct({ selectedCategory, onSelectCategory }) {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    CategoryServices.getCategories().then((result) => {
      console.log("Categorias : ", result);
      const categoriesWithAll = [{ id_cate: 0, nom_cate: "All" }, ...result];
      setCategory(categoriesWithAll);
    });
  }, []);

  return (
    <div className="">
      {category.map((item, index) => {
        return (
          <h3
            key={item.id_cate}
            onClick={() => onSelectCategory(item.nom_cate)}
            className={`cursor-pointer ${
              item.nom_cate === selectedCategory ? "text-black" : ""
            }`}
          >
            {item.nom_cate}
          </h3>
        );
      })}
    </div>
  );
}

export default FilterProduct;
