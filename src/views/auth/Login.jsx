import React from "react";
import InputForm from "../../components/Shared/InputForm";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import AuthService from "../../services/AuthService";
import Validate from "../../utils/validate";
import image from "../../assets/images/amarilla.webp";

function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (!Validate.isPassword(data.pass_usu)) {
      console.log("Contraseña correcta");
    }
    AuthService.login(data)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
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
                  Iniciar sesión
                </h2>
                <p class="text-sm mt-4 text-gray-500">
                  Si tiene una cuenta, inicie sesión
                </p>
                <form class="mt-6" action="#" onSubmit={handleSubmit(onSubmit)}>
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

                  {/* <div class="text-right mt-2">
                    <a
                      href="#"
                      class="text-sm font-semibold text-gray-700 hover:text-pink-600 focus:text-pink-600"
                    >
                      ¿Olvido la contraseña?
                    </a>
                  </div> */}

                  <button
                    type="submit"
                    class="w-full block bg-pink-500 hover:bg-pink-400 focus:bg-pink-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
                  >
                    Iniciar sesión
                  </button>
                </form>

                <div class="mt-7 grid grid-cols-3 items-center text-gray-500">
                  <hr class="border-gray-500" />
                  <p class="text-center text-sm">OR</p>
                  <hr class="border-gray-500" />
                </div>

                {/* <button class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 ">
                  <span class="ml-4">Iniciar sesión con Google</span>
                </button> */}

                <div class="text-sm flex justify-between items-center mt-3">
                  <p>Si no tienes una cuenta...</p>
                  <Link
                    class="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-pink-400  "
                    to="/register"
                  >
                    Registrarse
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

export default Login;
