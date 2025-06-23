import React from "react";

function TeacherBox({ name, role, image, subjects,Avatar }) {
  return (
    <div className="bg-stone-50 border border-indigo-100 rounded-2xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
      <div className="flex justify-center">
        <img
          className="w-28 h-28 rounded-full object-cover shadow-sm hover:scale-105 transition duration-300"
          src={image || Avatar}
          alt={name}
        />
      </div>

      <div className="text-center mt-4">
        <h3 className="text-xl font-bold text-indigo-900">{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {subjects.map((subject, idx) => (
          <span
            key={idx}
            className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full hover:bg-indigo-200 transition-colors duration-300"
          >
            {subject}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TeacherBox;
