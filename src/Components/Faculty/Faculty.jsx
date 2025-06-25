import React from "react";
import TeacherBox from "./facultyBox/teacherBox";
import teachersList from "../../Data/teachersList";
import paraTeachers from "../../Data/paraTeachers";
import nonTeaching from "../../Data/nonTeaching";
import headTeacher from "../../Data/headTeacher";


function Faculty() {
  return (
    <>
      <div className="bg-white min-h-screen ">
        {/* Header Banner */}
        <div className="flex justify-center mt-10">
          <div className="relative w-full max-w-7xl h-[350px] sm:h-[450px] rounded-xl overflow-hidden shadow-md">
            <img
              className="w-full h-full object-cover"
              
              src="src/images/Group/All.jpg"
              alt="Faculty Group"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center px-4">
              <h1 className="text-3xl sm:text-5xl font-bold mb-4 mt-25">
                Meet Our Exceptional Faculty
              </h1>
              <p className="max-w-2xl text-sm sm:text-lg">
                Our dedicated educators are passionate about fostering growth
                and academic excellence, guiding students through engaging
                learning experiences.
              </p>
            </div>
          </div>
        </div>

        {/* ✅ Head Teacher Box */}
        <div className="max-w-4xl mx-auto px-4 mt-10">
          <h2 className="text-3xl font-bold text-center text-indigo-800 mb-6">
            Head Teacher 
          </h2>
          <div className="flex justify-center">
            <TeacherBox
              name={headTeacher.name}
              role={headTeacher.role}
              image={headTeacher.image}
              Avatar={headTeacher.Avatar}
              subjects={headTeacher.subjects}
            />
          </div>
        </div>

        {/* Regular Teachers */}
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-indigo-800 mt-10 mb-10">
            Assistance Teachers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachersList.map((teacher, index) => (
              <TeacherBox
                key={index}
                name={teacher.name}
                role={teacher.role}
                image={teacher.image}
                subjects={teacher.subjects}
                Avatar={teacher.Avatar}
              />
            ))}
          </div>
        </div>

        {/* Para-Teachers */}
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-indigo-800 mt-10 mb-10">
            Para Teachers 
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {paraTeachers.map((teacher, index) => (
              <TeacherBox
                key={index}
                name={teacher.name}
                role={teacher.role}
                image={teacher.image}
                subjects={teacher.subjects}
                Avatar={teacher.Avatar}
              />
            ))}
          </div>
        </div>

        {/* Non-Teaching Staff */}
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-indigo-800 mt-10 mb-10">
            Non-Teaching Staff
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {nonTeaching.map((teacher, index) => (
              <TeacherBox
                key={index}
                name={teacher.name}
                role={teacher.role}
                image={teacher.image}
                subjects={teacher.subjects}
                Avatar={teacher.Avatar}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Faculty;
