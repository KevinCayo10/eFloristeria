import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Slider() {
  const [slider, setSlider] = useState(2);
  const prevSlider = () => {
    const isFirtSlide = slider === 0;
    const newIndex = isFirtSlide ? SliderData.length - 1 : slider - 1;
    setSlider(newIndex);
  };
  const nextSlider = () => {
    const islastSlider = slider === SliderData.length - 1;
    const newIndex = islastSlider ? 0 : slider + 1;
    setSlider(newIndex);
  };
  return (
    <div className="max-w-[1440px h-[480px] w-full m-auto py-4 px-4 relative">
      <div
        style={{ backgroundImage: `url(${SliderData[slider].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/*Left arrow */}
      <div className=" absolute top-[50%] -translate-x-0 translate-y-[25%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <FontAwesomeIcon icon="chevron-circle-left" onClick={prevSlider} />
      </div>
      {/*Right arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[25%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <FontAwesomeIcon icon="chevron-circle-right" onClick={nextSlider} />
      </div>
    </div>
  );
}

export default Slider;
