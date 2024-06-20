import React from "react";
import Banner from "../components/Banner";
import { Comunicate } from "../data/RedesData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputForm from "../components/InputForm";
function Contact() {
  return (
    <section>
      <Banner
        title={"Contactos"}
        description={
          "Aquí encontraras información para que te comuniques con nosotros"
        }
      ></Banner>
      <div className="flex justify-center items-center text-center w-[80%] m-auto">
        <div className="flex flex-row gap-5">
          {Comunicate.map((item) => {
            return (
              <div className="flex flex-col  items-center  gap-2   w-[250px] p-10">
                <FontAwesomeIcon icon={item.icon} size="2xl" color="gray" />
                <h2 className="text-xl font-bold text-gray-600 py-2">
                  {item.title}
                </h2>
                <a
                  href={item.url}
                  target="__blank"
                  className="text-lg font-light text-gray-600 hover:text-gray-400 py-2 hover:border-b-2"
                >
                  <span>{item.description}</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col  lg:flex-row lg:gap-5 w-[80%] m-auto mt-5 mb-5 ">
        <div className="w-full  lg:w-1/3 border rounded-md shadow-sm p-5 bg-gray-100 ">
          <img src="" alt="" />
        </div>
        <div className="w-full lg:w-2/3 border rounded-md shadow-sm mt-5 p-5 lg:mt-0">
          <h2 className="text-gray-600 text-2xl font-bold">
            Formulario de contacto
          </h2>
          <div className="pt-5">
            <form>
              <div className="flex flex-col sm:flex-row sm:gap-3 ">
                <div className="flex-1 sm:w-1/2">
                  <InputForm
                    inputType="text"
                    inputName="names"
                    placeholderText="Nombres completos"
                    arialLabelName="names"
                    inputId="names"
                  />
                </div>
                <div className="flex-1 sm:w-1/2">
                  <InputForm
                    inputType="text"
                    inputName="phone"
                    placeholderText="Número de celular"
                    arialLabelName="phone"
                    inputId="phone"
                  />
                </div>
              </div>
              <InputForm
                inputType="text"
                inputName="email"
                placeholderText="Email"
                arialLabelName="email"
                inputId="email"
              />

              <textarea
                placeholder="Mensaje"
                cols={10}
                rows={2}
                id="message"
                name="message"
                className="p-2 border rounded-md w-full "
              />

              <button
                type="submit"
                className="border rounded-full py-2 px-4 bg-pink-400 text-white hover:border-pink-600"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="py-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189461.8462166307!2d-79.41698447145447!3d0.13631015875863983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2aaf0d38063f87%3A0x4310ca1de0c75b10!2sDETALLES%20Y%20FLORISTERIA%20EL%20REGALO%20IDEAL!5e0!3m2!1ses-419!2sec!4v1716707787387!5m2!1ses-419!2sec"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
