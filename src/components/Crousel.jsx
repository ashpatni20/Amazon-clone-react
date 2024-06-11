import React, { useState } from "react";

const IMG1 =
  "https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/MED_MAY/Tall_Hero_1500X600_BAU_NewLaunches._CB554931622_.jpg";
const IMG2 =
  "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2024/5299-HI---HMD---Hero---May-8-UN-REC-BAU_Pc_1._CB554790996_.jpg";
const IMG3 =
  "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg";
const IMG4 =
  "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/GW/WRS/updated/Skin_-_PC._CB556645268_.jpg";
const IMG5 =
  "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg";
const IMG6 =
  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/BAU/Hero/Unrec/D91435399_WLA-BAU-Unrec-Hero_DesktopTallHero_3000x1200._CB582928607_.jpg";
const IMG7 =
  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200_V3._CB558389732_.jpg";

export let courselimgs = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7];

const Crousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === courselimgs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? courselimgs.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className=" relative w-full mx-auto border-red-500 p-0">
      <div className="overflow-hidden relative border border-red-500 w-full h-[550px]">
        {courselimgs.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full transition-transform duration-500 ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/4 left-1 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" 
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/4 right-1 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ❯
      </button>
    </div>
  );
};

export default Crousel;
