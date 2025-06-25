import React from "react";

function PresidentBox({ name, number, year, }) {
  return (
    <div className="bg-stone-50 border border-indigo-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
      <div className="flex justify-center">
        <h1 className="font-bold text-3xl">{number}</h1>
      </div>

      <div className="text-center mt-4 space-y-1">
        <h3 className="text-lg font-bold text-indigo-900">{name}</h3>
        <p className="text-sm text-indigo-600 font-medium">{year}</p>
        {/* <div className="bg-indigo-50 rounded-lg p-3 mt-2 text-sm text-gray-700">
          <h4 className="font-semibold text-indigo-800 mb-1">Notable Efforts:</h4>
          <p>{work}</p>
        </div> */}
      </div>
    </div>
  );
}

export default PresidentBox;
