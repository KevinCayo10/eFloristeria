import React from "react";
import Slider from "../components/Slider";
import Title from "../components/Title";
import CardProduct from "../components/CardProduct";
import ButtonsPlus from "../components/ButtonsPlus";
import CardDuty from "../components/CardDuty";
import CardCategory from "../components/CardCategory";
import "../App.css";

function Home() {
  return (
    <div>
      <section>
        <Slider />
      </section>
      <section className="my-20">
        <Title
          title="Más populares"
          subtitle="Detalles que hablan: Flores que expresan lo que las palabras no pueden"
        />
        <CardProduct />
        <ButtonsPlus url="/shop" title="Ver más" />
      </section>
      <section className="my-20">
        <Title
          title="Nuestros compromisos"
          subtitle="Creando momentos con detalles únicos"
        />
        <CardDuty />
      </section>
      <section className="my-20 ">
        <Title
          title="Diversidad de selección"
          subtitle="Explora una amplia gama de opcinoes para cada gusto"
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
