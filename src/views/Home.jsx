import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import CardProduct from "../components/CardProduct";
import ButtonsPlus from "../components/ButtonsPlus";
import CardDuty from "../components/CardDuty";
import CardCategory from "../components/CardCategory";
import "../App.css";
// import { Products } from "../data/Product";
import ProductService from "../services/ProductServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DutyData } from "../data/DutyData";
import { Category } from "../data/Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import home from "../assets/images/home.png";
import { NextArrow, PrevArrow } from "../components/utils/Arrows";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProductsOrders()
      .then((result) => {
        console.log(result);
        setProducts(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <section className="">
        <div className="w-full border flex ">
          <div className="w-1/3">
            <h1>holla</h1>
          </div>
          <img src={home} alt="" class />
        </div>
      </section>
      <section className="my-20">
        <div className="max-w-screen-xl px-4 py-4 mx-auto lg:px-6 ">
          <Title
            title="Más populares"
            subtitle="Detalles que hablan: Flores que expresan lo que las palabras no pueden"
            align="center"
          />
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 sm:max-w-7xl mx-auto gap-6 ">
            {products.map((item, index) => {
              return <CardProduct producto={item} />;
            })}
          </div>
          <ButtonsPlus url="/shop" title="Ver más" />
        </div>
      </section>
      <section className="my-4">
        <div className="max-w-screen-xl px-4  mx-auto lg:px-6">
          <Title
            title="Nuestros compromisos"
            subtitle="Creando momentos con detalles únicos"
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3   h-auto sm:max-w-7xl mx-auto gap-2">
            {DutyData.map((item, index) => {
              return (
                <CardDuty
                  id={item.id}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="my-20 ">
        <div className="max-w-screen-xl px-4 py-4 mx-auto lg:px-6 ">
          <Title
            title="Diversidad de selección"
            subtitle="Explora una amplia gama de opcinoes para cada gusto"
            align="center"
          />
          <section className=" ">
            <div className="  mx-auto gap-2 ">
              <Slider {...settings}>
                {Category.map((item, index) => {
                  return (
                    <CardCategory
                      id={item.id}
                      img={item.img}
                      category={item.category}
                    />
                  );
                })}
              </Slider>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Home;
