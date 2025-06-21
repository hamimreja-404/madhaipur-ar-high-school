import React from "react";
import Photos from "../../Data/Photos";
import GalleryBox from "./GalleryBox";
import Activity from "../../Data/Activity";
import GloriousMoments from "../../Data/GloriousMoments";

import { app } from "../Firebase";
import { getStorage,ref ,uploadBytes,getDownloadURL } from "firebase/storage";
function Gallery() {
  return (
    <div className="bg-white py-12 font-sans">
      <div className="flex justify-center mt-10">
        <div className="relative w-7xl max-w-7xl h-7xl sm:h-[450px] rounded-xl overflow-hidden shadow-md">
          <img
            className="w-full h-full object-cover"
            src="/src/images/Photo/Collage.jpg"
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
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-10 mt-10">
          Glorious Moments
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {GloriousMoments.map((photo, index) => (
            <GalleryBox key={index} image={photo.image} title={photo.title} />
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-10 mt-10">
          Various Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Activity.map((photo, index) => (
            <GalleryBox key={index} image={photo.image} title={photo.title} />
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-10 mt-10">
          Explore All Photos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Photos.map((photo, index) => (
            <GalleryBox key={index} image={photo.image} title={photo.title} />
          ))}
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}

export default Gallery;
