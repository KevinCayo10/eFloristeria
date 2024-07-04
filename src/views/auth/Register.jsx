import React, { useState } from "react";
import InputForm from "../../components/Shared/InputForm";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Validate from "../../utils/validate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "../../assets/images/amor.webp";
import AuthService from "../../services/AuthService";

function Register() {
  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = (data) => {
    if (
      !Validate.isPassword(data.pass_usu) ||
      !Validate.isPhone(data.celu_usu)
    ) {
      setMessage("Datos incorrectos");
      return;
    }
    AuthService.register(data)
      .then((response) => {
        if (response.status === 200) {
          // setMessage(response.message);
          localStorage.setItem("accessToken", response.data.token);
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          setMessage("Usuario ya registrado");
        } else {
          setMessage("Error con la peticion");
        }
      });
  };
  return (
    <article className="mt-32">
      <section>
        <div className="max-h-screen">
          <section class="  flex items-center justify-center  m-5 max-h-screen ">
            <div class="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl">
              <div class="md:w-1/2 px-5">
                <h2 class="text-2xl font-extrabold text-pink-600">
                  Registrarse
                </h2>
                <p class="text-sm mt-4 text-gray-500">
                  Si no tienes una cuenta, registrate
                </p>
                <form class="mt-6" action="#" onSubmit={handleSubmit(onSubmit)}>
                  {message && (
                    <div className="flex items-center justify-start gap-2 mt-4 px-2  py-2  bg-red-200 rounded-md text-gray-700">
                      <FontAwesomeIcon
                        icon="fa-solid fa-circle-exclamation"
                        className="w-1/7 "
                      />
                      <p className="w-full ">{message}</p>
                    </div>
                  )}
                  <div className="flex flex-row gap-2 mt-4">
                    <InputForm
                      register={register}
                      inputType="text"
                      inputName="nom_usu"
                      placeholderText="Nombre"
                      inputId="nom_usu"
                      autofocus
                      autocomplete
                      required
                    />
                    <InputForm
                      register={register}
                      inputType="text"
                      inputName="ape_usu"
                      placeholderText="Apellido"
                      inputId="ape_usu"
                      autofocus
                      autocomplete
                      required
                    />
                  </div>
                  <div>
                    <InputForm
                      register={register}
                      inputType="number"
                      inputName="celu_usu"
                      placeholderText="# Celular"
                      inputId="celu_usu"
                      autofocus
                      autocomplete
                      required
                    />
                  </div>
                  <div>
                    <InputForm
                      register={register}
                      inputType="email"
                      inputName="email_usu"
                      placeholderText="email@gmail.com"
                      inputId="email_usu"
                      autofocus
                      autocomplete
                      required
                    />
                  </div>

                  <div class="mt-4">
                    <InputForm
                      register={register}
                      inputType="password"
                      inputName="pass_usu"
                      placeholderText="123****a"
                      inputId="pass_usu"
                      autofocus
                      autocomplete
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    class="w-full block bg-pink-500 hover:bg-pink-400 focus:bg-pink-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
                  >
                    Crear cuenta
                  </button>
                </form>

                <div class="mt-7 grid grid-cols-1 items-center text-gray-500">
                  <hr class="border-gray-500" />
                </div>

                <div class="text-sm flex justify-between items-center mt-3">
                  <p>Ya tienes una cuenta...</p>
                  <Link
                    class="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-pink-400  "
                    to="/login"
                  >
                    Iniciar sesión
                  </Link>
                </div>
              </div>

              <div class="w-1/2 md:block hidden ">
                <img
                  src={image}
                  class="rounded-2xl"
                  alt="page img"
                  className="h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    </article>
  );
}

export default Register;
