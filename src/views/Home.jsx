import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import Title from "../components/Title";
import CardProduct from "../components/CardProduct";
import ButtonsPlus from "../components/ButtonsPlus";
import CardDuty from "../components/CardDuty";
import CardCategory from "../components/CardCategory";
import "../App.css";
// import { Products } from "../data/Product";
import ProductService from "../services/ProductServices";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProductsOrders()
      .then((result) => {
        setProducts(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <section className="">
        <div className=""></div>
        <div className=""></div>
      </section>
      <section className="my-20">
        <Title
          title="Más populares"
          subtitle="Detalles que hablan: Flores que expresan lo que las palabras no pueden"
          align="center"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-[80%] sm:max-w-7xl mx-auto gap-2 ">
          {products.map((item, index) => {
            return <CardProduct producto={item} />;
          })}
        </div>
        <ButtonsPlus url="/shop" title="Ver más" />
      </section>
      <section className="my-20">
        <Title
          title="Nuestros compromisos"
          subtitle="Creando momentos con detalles únicos"
          align="center"
        />
        <CardDuty />
      </section>
      <section className="my-20 ">
        <Title
          title="Diversidad de selección"
          subtitle="Explora una amplia gama de opcinoes para cada gusto"
          align="center"
        />
        <section className=" mt-10 sm:mt-[120px]">
          <CardCategory />
          <ButtonsPlus url="/shop" title="Ver más" />
        </section>
      </section>
    </div>
  );
}

export default Home;
