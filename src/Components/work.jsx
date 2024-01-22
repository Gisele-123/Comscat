import React, { useState } from "react";
import web_design from "../Assets/webde.png";
import mob_app from "../Assets/mobApp.png";
import animations from "../Assets/animations.png";
import { useSwipeable } from "react-swipeable";
import { Icon } from "@iconify-icon/react";
const Work = () => {
  const images = [web_design, mob_app, animations];
  const names = ["WEB DESIGN", "MOBILE APPLICATION", "ANIMATIONS"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleSwipe = (delta) => {
    const newIndex = currentIndex + delta;
    const lastIndex = 2;
    const updatedIndex = Math.max(0, Math.min(newIndex, lastIndex));
    setCurrentIndex(updatedIndex);
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe(1),
    onSwipedRight: () => handleSwipe(-1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  const handleArrowClick = (delta) => {
    handleSwipe(delta);
  };
  return (
    <section
      className="flex flex-col justify-center items-center bg-[#3B71FC] gap-36 p-9 "
      id="work"
      {...handlers}
    >
      <div className="flex justify-start">
        <div className="flex justify-start items-center absolute md:left-28 left-0">
          <div className="bg-[#94B2FF] md:w-36 w-28 md:h-36 h-28 rounded-full z-10"></div>
          <div className="bg-[#264595] md:w-28 md:h-28 w-24 h-24 rounded-full absolute left-14 z-0 top-[-10%]"></div>
        </div>
        <div className="font-extrabold text-white text-4xl flex items-center justify-center">
          OUR WORK
        </div>
      </div>
      <div className="flex gap-5 justify-center items-center">
        <div className="cursor-pointer" onClick={() => handleArrowClick(-1)}>
          <Icon icon="ep:arrow-left-bold" />
        </div>
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex flex-col justify-center items-center gap-3 ${
              index === currentIndex ? "" : "hidden"
            }`}
          >
            <img src={image} alt="" width={450} height={301.63} />
            <p className="text-lg font-bold text-[#eef3ff]">{names[index]}</p>
          </div>
        ))}
        <div className="cursor-pointer" onClick={() => handleArrowClick(1)}>
          <Icon icon="ep:arrow-right-bold" />
        </div>
      </div>
    </section>
  );
};

export default Work;
