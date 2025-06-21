import React from "react";
import presidentsList from "../../Data/presidentsList";
import PresidentBox from "./PresidentBox";

function Presidents() {
  return (
    <div className="bg-white py-12 font-sans">
      {/* Header Section */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl font-extrabold text-indigo-800 mb-4">
          Our Visionary Leaders
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We proudly recognize the leaders who have shaped Madhaipur A.R. High School’s legacy. Their vision and dedication continue to guide our journey of excellence and integrity.
        </p>
      </div>

      {/* Current President */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">Current President</h2>
      </div>

      <div className="flex justify-center items-center px-4 mb-16">
        <div className="flex flex-col md:flex-row bg-stone-50 border border-gray-200 rounded-2xl p-6 shadow-lg w-full max-w-5xl">
          <img
            className="w-40 h-40 md:w-48 md:h-48 rounded-xl object-cover border border-gray-300 mx-auto md:mx-0"
            src="src/images/Logo/DP.jpg"
            alt="Labib Hasan"
          />
          <div className="mt-4 md:mt-0 md:ml-8">
            <h3 className="text-2xl font-bold text-indigo-900">Labib Hasan</h3>
            <p className="text-sm text-indigo-600 font-medium">President (2022 - Present)</p>
            <blockquote className="mt-2 italic text-gray-500 border-l-4 pl-4 border-indigo-300">
              "Education isn’t about filling minds with facts, but igniting the curiosity to explore."
            </blockquote>
            <h4 className="mt-4 text-lg font-semibold text-gray-800">Key Contributions</h4>
            <p className="text-gray-700">
              Led the digital transformation of school infrastructure, supported student initiatives,
              and strengthened parent-teacher collaboration. His leadership inspires innovation and excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Past Presidents */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-10">
          Past Presidents
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {presidentsList.map((president, index) => (
            <PresidentBox
              key={index}
              name={president.name}
              image={president.image}
              year={president.year}
              work={president.work}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Presidents;
