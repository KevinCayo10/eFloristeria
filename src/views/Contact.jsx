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
      <div className="max-w-screen-xl px-4 py-8 mx-auto  lg:px-6">
        <div className="row mx-0 rounded-2xl bg-gray-50 px-10 shadow-lg lg:py-10 grid grid-cols-1 sm:grid-cols-3 gap-2 ">
          {Comunicate.map((item) => {
            return (
              <div className="px-10 py-5 text-center sm:col-6 lg:col-3 lg:py-0">
                <FontAwesomeIcon icon={item.icon} size="2xl" color="gray" />
                <h2 className="my-2 text-2xl font-extrabold tracking-tight text-gray-900">
                  {item.title}
                </h2>
                <a
                  href={item.url}
                  target="__blank"
                  className="font-light lg:text-xl hover:text-gray-600 py-2 hover:border-b-2"
                >
                  <span>{item.description}</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col  lg:flex-row lg:gap-5  mt-5 mb-5  max-w-screen-xl px-4 py-8 mx-auto  lg:px-6 ">
        <div className="w-full  lg:w-1/2 border rounded-md shadow-sm p-5 bg-gray-100 ">
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
        <div className="w-full lg:w-1/2 border rounded-md shadow-sm mt-5 p-5 lg:mt-0">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
            Formulario de contacto
          </h2>
          <div className="pt-5">
            <form>
              <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-4  ">
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
                rows={6}
                id="message"
                name="message"
                className="p-2 border rounded-md w-full font-light lg:text-xl "
              />

              <button
                type="submit"
                className="border rounded-full my-4 py-2 px-4 bg-pink-600 text-white hover:bg-pink-400 font-light lg:text-xl "
              >
                Enviar
                <FontAwesomeIcon
                  icon="fa-solid fa-paper-plane"
                  className="px-2"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="py-5"></div>
    </section>
  );
}

export default Contact;
