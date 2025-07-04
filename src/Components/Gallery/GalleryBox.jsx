// import React, { useState } from "react";

// function GalleryBox({ title, image }) {
//   const [selectedImage, setSelectedImage] = useState(null);

//   return (
//     <div className="rounded-2xl transition duration-300">
//       <div className="relative w-full max-w-xs mx-auto rounded-xl overflow-hidden shadow-lg group">
//         {/* Clickable Image + Overlay */}
//         <div
//           className="relative group overflow-hidden cursor-pointer"
//           onClick={() => setSelectedImage(image)}
//         >
//           <img
//             className="w-full h-64 rounded-xl object-cover shadow-sm transition duration-300 group-hover:scale-105"
//             src={image}
//             alt={title}
//           />

//           {/* Black Zoom Icon Overlay */}
//           <div className="z-40 absolute inset-2 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
//             <svg
//               className="w-14 h-14 text-white"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
//               />
//             </svg>
//           </div>

//           {/* White Gradient */}
//           <div className="w-auto absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none">

//           {/* Title Text */}
//           <div className=" absolute bottom-4 w-full text-center">
//             <h3 className="text-2xl font-bold text-indigo-800 drop-shadow">
//               {title}
//             </h3>
//           </div>
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
//           onClick={() => setSelectedImage(null)}
//         >
//           <img
//             src={selectedImage}
//             alt="Full view"
//             className="max-w-[90%] max-h-[90%] rounded-xl shadow-lg border-4 border-white"
//           />
//         </div>
//       )}
//     </div>

//   );
// }

// export default GalleryBox;

// import React, { useState } from "react";

// function GalleryBox({ title, image }) {
//   const [selectedImage, setSelectedImage] = useState(null);

//   return (
//     <>
//       <div
//         className="relative rounded-xl overflow-hidden group cursor-pointer shadow-lg transition-all hover:scale-105"
//         onClick={() => setSelectedImage(image)}
//       >
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-64 object-cover transition-all duration-300"
//         />

//         {/* Bottom Fade + Title */}
//         <div className="absolute mt-10 bottom-0 w-full h-24 bg-gradient-to-t from-white to-transparent flex items-end justify-center">
//           <h3 className="mt-10 text-2xl font-bold text-gray-900 mb-4 text-center px-2">
//             {title}
//           </h3>
//         </div>

//         {/* Hover overlay */}
//         <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <svg
//             className="w-12 h-12 text-white"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
//             />
//           </svg>
//         </div>
//       </div>

//       {/* Modal */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
//           onClick={() => setSelectedImage(null)}
//         >
//           <img
//             src={selectedImage}
//             alt="Enlarged"
//             className="max-w-[90%] max-h-[90%] rounded-xl border-4 border-white shadow-xl"
//           />
//         </div>
//       )}
//     </>
//   );
// }

// export default GalleryBox;

// import React, { useState } from "react";

// function GalleryBox({ title, image }) {
//   const [selectedImage, setSelectedImage] = useState(null);

//   return (
//     <>
//       <div
//         className="relative w-full max-w-xs overflow-hidden rounded-xl shadow-lg cursor-pointer transition-transform hover:scale-105"
//         onClick={() => setSelectedImage(image)}
//       >
//         {/* Full image */}
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-[300px] object-cover"
//         />

//         {/* Gradient overlay at bottom */}
//         <div className="absolute bottom-0 w-full h-[30%] bg-gradient-to-t from-white to-transparent flex items-end justify-center px-2 pb-3">
//           <h3 className="text-lg font-bold text-gray-900 text-center drop-shadow">
//             {title}
//           </h3>
//         </div>
//       </div>

//       {/* Modal full image view */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
//           onClick={() => setSelectedImage(null)}
//         >
//           <img
//             src={selectedImage}
//             alt="Full View"
//             className="max-w-[90%] max-h-[90%] rounded-xl shadow-xl border-4 border-white"
//           />
//         </div>
//       )}
//     </>
//   );
// }

// export default GalleryBox;

import React, { useState } from "react";

function GalleryBox({ title, image }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* Container must have 'group' for hover effects to work */}
      <div
        className="relative w-full max-w-xs mx-auto group overflow-hidden rounded-xl shadow-lg cursor-pointer transition-transform hover:scale-105"
        onClick={() => setSelectedImage(image)}
      >
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-[300px] object-cover"
        />

        {/* Hover overlay (Zoom icon) */}
        <div className="absolute z-100 inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            className="w-12 h-12 text-white"
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

        {/* Gradient Text Box */}
        <div className="absolute bottom-0 w-full pt-[10%] pb-4 px-3 bg-gradient-to-t from-white to-transparent">
          <h3 className="text-lg font-semibold text-gray-900 text-center truncate">
            {title}
          </h3>
        </div>
      </div>

      {/* Modal View */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full View"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-xl border-4 border-white"
          />
        </div>
      )}
    </>
  );
}

export default GalleryBox;
