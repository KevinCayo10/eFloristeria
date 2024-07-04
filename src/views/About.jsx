import React from "react";
import Banner from "../components/Shared/Banner";
import Counter from "../components/Counter";
import { infoData, teamData, valuesData } from "../data/HomeData";
import CardsEffect from "../components/CardsEffect";
import about from "../assets/images/about.webp";
import about_section from "../assets/images/about_section.webp";
import Title from "../components/Shared/Title";
function About() {
  return (
    <div className="mt-32">
      <Banner
        title={"Nosotros"}
        description={"Aquí encontraras la historía"}
      ></Banner>

      <section class="py-4 ">
        <div class="max-w-screen-xl px-4 py-4 mx-auto lg:px-6 ">
          <div class="items-center gap-8   md:grid md:grid-cols-2 xl:gap-16">
            <div class="text-gray-500 sm:text-lg ">
              <h6 className="text-pink-400">
                Detalles y Floristeria El Regalo Ideal
              </h6>
              <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 ">
                Quienes somos
              </h2>
              <p class="mb-8 font-light lg:text-xl">
                Somos Detalles y Floristería El Regalo Ideal, una empresa con 5
                años de experiencia en la venta y entrega de flores y regalos a
                domicilio en Puerto Quito. Nos dedicamos a crear momentos
                inolvidables con nuestros hermosos arreglos florales y detalles
                personalizados.
              </p>

              <p class="mb-8 font-light lg:text-xl">
                Las flores siempre hacen que la gente sea mejor y más feliz, son
                sol y medicina para el alma. En Detalles y Floristería El Regalo
                Ideal, estamos aquí para ayudarte a celebrar la vida y sus
                momentos especiales con belleza y estilo. ¡Gracias por confiar
                en nosotros!
              </p>
            </div>
            <img
              class="w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src={about}
              alt="dashboard feature image"
            />
          </div>
        </div>
      </section>
      <section className="py-0 sm:py-4">
        <div className="max-w-screen-xl px-4 py-8 mx-auto  lg:px-6 ">
          <div className="row mx-0 rounded-2xl bg-gray-50 px-10 shadow-lg lg:py-10 grid grid-cols-1 sm:grid-cols-3 gap-2 ">
            {infoData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="px-10 py-5 text-center sm:col-6 lg:col-3 lg:py-0"
                >
                  <Counter target={item.target} color={item.color} />
                  <p className="font-light lg:text-xl">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-4">
        <div class="relative max-w-screen-xl px-4 py-8 mx-auto  lg:px-6  ">
          <div className="text-center">
            <Title
              title="Nuestros valores"
              subtitle="  En Detalles y Floristería El Regalo Ideal, nuestros valores
              fundamentales guían cada aspecto de nuestro negocio:"
              aling="center"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
            {valuesData.map((item, key) => (
              <div key={key} className="flex justify-center">
                <CardsEffect
                  title={item.title}
                  description={item.description}
                  color={item.color}
                  icon={item.icon}
                  key={item.id}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Imagen */}
      <section className="h-auto py-4">
        <div>
          <img
            src={about_section}
            alt=""
            className="w-full max-h-80 object-cover"
          />
        </div>
      </section>

      {/* Equipo */}
      <section className="py-4">
        <div class="relative max-w-screen-xl mx-auto py-2 sm:py-4 ">
          <div className="text-center">
            <Title
              title="Nuestro Equipo"
              subtitle="En Detalles y Floristería El Regalo Ideal, nos inspiramos en
              nuestros valores fundamentales que orientan cada aspecto de
              nuestro trabajo:"
              aling="center"
            />
          </div>
          <div className="flex flex-col gap-4  justify-center px-2 sm:flex-row">
            {teamData.map((item, key) => (
              <div key={key} className="flex justify-center">
                <CardsEffect
                  title={item.title}
                  description={item.description}
                  color={item.color}
                  icon={item.icon}
                  key={item.id}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
