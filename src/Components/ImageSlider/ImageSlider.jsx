import React, { useEffect, useState } from "react";
import { imageList } from "../../Data/ImageSlider";

export default function AutoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="w-full bg-white py-4">
      {/* Responsive aspect ratios: mobile -> tablet -> desktop */}
      <div className="w-7xl h-7xl max-w-7xl mx-auto relative overflow-hidden rounded-lg shadow aspect-square sm:aspect-[4/3] md:aspect-video">
        {imageList.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Slide ${idx + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover rounded-lg transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex ? "opacity-100 fade z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {imageList.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              idx === currentIndex ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
