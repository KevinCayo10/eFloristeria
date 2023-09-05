import React, { useEffect, useState } from "react";
import CategoryServices from "../services/CategoryServices";

function FilterProduct({ selectedCategory, onSelectCategory }) {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    CategoryServices.getCategories().then((result) => {
      console.log(result);
      setCategory(result);
    });
  }, []);

  return (
    <div className="border-2">
      {category.map((item, index) => {
        console.log(item.categoria);
        return (
          <h3
            key={item.id_cate}
            onClick={() => onSelectCategory(item.categoria)}
            className={`cursor-pointer ${
              item.category === selectedCategory
                ? "text-black"
                : "text-green-300"
            }`}
          >
            - {item.categoria}
          </h3>
        );
      })}
    </div>
  );
}

export default FilterProduct;
