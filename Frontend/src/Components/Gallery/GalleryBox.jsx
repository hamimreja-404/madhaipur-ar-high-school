import React, { useState } from "react";

function GalleryBox({ title, image }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* One gallery box */}
      <div
        className="relative group rounded-xl overflow-hidden cursor-pointer"
        onClick={() => setSelectedImage(image)}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Hover overlay */}
        <div className="absolute  inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
          <svg
            className="w-14 h-14 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
        </div>

        {/* Title at bottom */}
        <div className="absolute bottom-0 w-full pt-[10%] pb-4 px-3 bg-gradient-to-t from-white to-transparent">
          <h3 className="text-md font-bold text-[#3f4e50] text-center truncate">
            {title}
          </h3>
        </div>
      </div>

      {/* Modal */}
{selectedImage && (
  <div
    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
    onClick={() => setSelectedImage(null)}
  >
    {/* Modal container to isolate click behavior */}
    <div
      className="relative"
      onClick={(e) => e.stopPropagation()} // prevent closing when clicking on image
    >

      <button
        onClick={() => setSelectedImage(null)}
        className="absolute top-2 right-2 text-white text-3xl font-bold cursor-pointer px-2"
      >
        ❌
      </button>

      {/* Image */}
      <img
        src={selectedImage}
        alt="Full View"
        className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-xl border-4 border-white"
      />
    </div>
  </div>
)}
    </>
  );
}

export default GalleryBox;
