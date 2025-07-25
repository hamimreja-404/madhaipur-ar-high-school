import React, { useState } from "react";
import Photos from "../../Data/Photos";
import GalleryBox from "./GalleryBox";
import Activity from "../../Data/Activity";
import GloriousMoments from "../../Data/GloriousMoments";
import { NavLink } from "react-router-dom";
import Collage from "../../images/Logo/Collage.jpg";
import { div } from "framer-motion/client";
function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="bg-white py-12 font-sans ">
      <div className="flex justify-center mt-10">
        <div className="relative w-full max-w-7xl h-[350px] sm:h-[450px] rounded-xl overflow-hidden shadow-md">
          <img
            className="w-full h-full object-cover"
            src={Collage}
            alt="Faculty Group"
          />
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 ">
              Capture the Spirit of Madhaipur A.R. High School(H.S)
            </h1>
            <p className="max-w-2xl text-sm sm:text-lg">
              Explore our vibrant gallery showcasing memorable events, lively
              campus activitis, community.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        {/* <h2 className="text-3xl font-bold text-center text-indigo-800 mb-10 mt-10">
          Glorious Moments
        </h2> */}
        <h2 class="mb-10 mt-10 text-4xl font-bold text-center md:5">
          <span class="bg-gradient-to-r from-indigo-900 via-purple-700 to-purple-900 bg-clip-text text-transparent">
            Glorious Moments
          </span>
        </h2>
        <div className="justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {GloriousMoments.map((photo, index) => (
            <GalleryBox key={index} image={photo.image} title={photo.title} />
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <h2 class="mb-10 mt-10 text-4xl font-bold text-center md:5">
          <span class="bg-gradient-to-r from-indigo-900 via-purple-700 to-purple-900 bg-clip-text text-transparent">
            Various Events
          </span>
        </h2>

        <div className="justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Activity.map((photo, index) => (
            <GalleryBox key={index} image={photo.image} title={photo.title} />
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <h2 class="mb-10 mt-10 text-4xl font-bold text-center md:5">
          <span class="bg-gradient-to-r from-indigo-900 via-purple-700 to-purple-900 bg-clip-text text-transparent">
            Explore All Photos
          </span>
        </h2>

        <div className="justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Photos.map((photo, index) => (
            <GalleryBox key={index} image={photo.image} title={photo.title} />
          ))}
        </div>
      </div>
      <div></div>
      <div className="mt-24 mb-16 text-center font-sans">
        <div className="flex flex-col items-center px-6">
          {/* Icon */}
          <div className="mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-indigo-500 animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h4m1 8a9 9 0 110-18 9 9 0 010 18z"
              />
            </svg>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 tracking-tight">
            Have Photos to Share?
          </h2>

          {/* Description */}
          <p className="text-gray-600 max-w-2xl mx-auto text-md md:text-lg leading-relaxed mb-8">
            Captured a special school moment? Share your best photos with us and
            help preserve the vibrant memories of our events, celebrations, and
            student life. Your contribution could be featured in our official
            gallery!
          </p>

          <NavLink
            to="/photoShare"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold flex items-center"
                : "text-white hover:text-yellow-300 transition flex items-center"
            }
          >
            <p className="bg-indigo-600 hover:bg-indigo-700 transition duration-300 ease-in-out text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-xl transform hover:-translate-y-1">
              📤 Submit Your Photos
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
