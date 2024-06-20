import React from "react";
import Banner from "../components/Banner";
import image from "../assets/images/arreglos.jpg";

function About() {
  return (
    <div>
      <Banner
        title={"Nosotros"}
        description={"Aquí encontraras la historía"}
      ></Banner>

      <section className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-5 w-[80%] m-auto  bg-gray-200">
        <div className="w-full sm:w-1/2">
          <h2 className="text-2xl font-bold text-center">Historia</h2>
          <p className="text-center text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus, quidem, dolores, quae accusantium voluptates
            repudiandae quod quos nemo nesciunt consequuntur. Quisquam
            voluptatibus, quidem, dolores, quae accusantium voluptates
            repudiandae quod quos nemo nesciunt consequuntur. Quisquam
            voluptatibus, quidem, dolores, quae accusantium voluptates
          </p>
        </div>
        <div className="w-full sm:w-1/2 flex flex-row bg-green-500 gap-5">
          <div className="w-2/3 flex flex-col gap-y-3  bg-red-500 ">
            <div className="w-[125px] h-[125px] ">
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="w-[125px] h-[125px]">
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="w-1/3  object-cover rounded-xl bg-yellow-400">
            <img src={image} alt="" />
          </div>
        </div>
      </section>
      <section className="w-[80%] m-auto mt-5">
        <div className="rounded-full shadow-md flex flex-row justify-around">
          <div>
            <p>1</p>
          </div>
          <div>
            <p>2</p>
          </div>
          <div>
            <p>3</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
