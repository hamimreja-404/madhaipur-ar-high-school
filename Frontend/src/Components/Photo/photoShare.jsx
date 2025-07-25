import React from 'react';
import { UploadCloud } from 'lucide-react'; // Using Lucide icons (already used in your project?)

function PhotoShare() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 font-sans">
      {/* Icon */}
      <div className="mb-6">
        <UploadCloud className="w-16 h-16 text-indigo-500 animate-bounce" />
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Photo Share Coming Soon!
      </h1>

      {/* Message */}
      <p className="text-gray-600 max-w-xl text-lg mb-6">
        I'm working hard on building a feature that will let you easily
        upload and share your favorite school moments. Stay tuned – this section
        is under development and will be available soon!
      </p>

      {/* CTA (Optional Button) */}
      <button
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
        disabled
      >
        🚧 Stay Tuned
      </button>
      
    </div>
  );
}

export default PhotoShare;
