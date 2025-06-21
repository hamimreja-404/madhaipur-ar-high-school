import React from "react";

function GalleryBox({ title, image }) {
  return (
    <div className="bg-stone-50  border border-indigo-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
      <div className="flex justify-center">
        <img
          className="w-full h-full rounded-2xl object-cover shadow-sm hover:scale-105 transition duration-300"
          src={image}
        />
      </div> 
      <div className="text-center mt-4 space-y-1">
        <h3 className="text-lg font-bold text-indigo-900">{title}</h3>
      </div>
    </div>
  );
}

export default GalleryBox;
