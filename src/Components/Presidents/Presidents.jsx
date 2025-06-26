import React from "react";
import presidentsList from "../../Data/presidentsList";
import PresidentBox from "./PresidentBox";
import past_Presidents from "../../Data/Past_Presidents";
import Rabiul from "../../images/Logo/Rabiul.jpg";
import A_Sports_8 from "../../images/Photo/A_Sports_8.jpg";
import Founding_Committee from "../../Data/Founding_Committee";
import Organiser from "../../Data/Organiser";
function Presidents() {
    const earlyTeachers = [
    {
      name: "Tabarok Hossain",
      role: "Teacher-in-Charge",
     
    },
    {
      name: "Amol Roy",
      role: "Assistant Teacher",
      
    },
    {
      name: "Kisor Guhu",
      role: "Assistant Teacher",
      
    },
    {
      name: "Sk Habibuddin",
      role: "Assistant Teacher",
   
    },
    {
      name: "Susanta Kumar Mondol",
      role: "Assistant Teacher",
     
    },
    {
      name: "Abdu Samad",
      role: "Clerk",
      
    },
    {
      name: "Mortuja",
      role: "Peon",
     
    },
  ];
  return (
    <div className="bg-white py-12 font-sans">
      <div className="flex justify-center  md-5">
        <div className="relative w-full max-w-7xl h-[350px] sm:h-[450px] rounded-xl overflow-hidden shadow-md">
          <img
            className="w-full h-full object-cover"
            src={A_Sports_8}
            alt="Faculty Group"
          />
          <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 mt-25">
              Our Visionary Leaders
            </h1>
            <p className="max-w-2xl text-sm sm:text-lg">
              We proudly recognize the leaders who have shaped Madhaipur A.R.
              High School’s legacy. Their vision and dedication continue to
              guide our journey of excellence and integrity.
            </p>
          </div>
        </div>
      </div>

      {/* The Pillars of Our Legacy: Founding Committee & Dedicated Educators*/}
      <div className="max-w-7xl mt-5 mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-10">
          The Pillars of Our Legacy <br /> Founding Committee & Dedicated
          Educators
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Founding_Committee.map((president, index) => (
            <PresidentBox
              key={index}
              name={president.name}
              image={president.image}
              Avatar={president.Avatar}
              year={president.year}
              work={president.work}
            />
          ))}
        </div>
      </div>
      <div className="max-w-7xl mt-5 mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-10">
          Organiser Teachers and Non-teaching Staff
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Organiser.map((president, index) => (
            <PresidentBox
              key={index}
              name={president.name}
              image={president.image}
              Avatar={president.Avatar}
              year={president.year}
              work={president.work}
            />
          ))}
        </div>
      </div>
    <div className="bg-white py-12 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-4">
            Organizational History & Early Contributors
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-md md:text-lg leading-relaxed">
            Madhaipur A.R. High School began its journey in <strong>1974</strong> as a community-driven institution. It received official recognition from the West Bengal Board of Secondary Education (WBBSE) on <strong>01/01/1984</strong> as a Junior High School.
            <br /><br />
            Following this, the Managing Committee appointed several teachers and staff members who laid the foundation for its academic growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {earlyTeachers.map((teacher, index) => (
            <PresidentBox
              key={index}
              name={teacher.name}
              work={teacher.role}

            />
          ))}
        </div>

        <div className="text-center text-gray-700 text-md md:text-lg max-w-3xl mx-auto">
          <p className="mb-4">
            A few <strong>organizer teachers</strong> who played a crucial role during the school's foundation period unfortunately could not be officially appointed due to <strong>unknown reasons</strong>.
          </p>
          <p className="font-semibold text-indigo-800 mt-6">
            The first appointed Headmaster was <strong>Munsur Ali</strong>, whose leadership and vision guided the school in its formative years.
          </p>
          <div className="mt-6 flex justify-center">
            <PresidentBox
              name="Munsur Rahaman"
              role="Headmaster (First)"
            />
          </div>
        </div>
      </div>
    </div>


      {/* Past Presidents */}
      <div className="max-w-7xl mx-auto px-4 mt-5">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-10">
          Ex-Secretaries
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {presidentsList.map((president, index) => (
            <PresidentBox
              key={index}
              number={index + 1}
              name={president.name}
              image={president.image}
              Avatar={president.Avatar}
              year={president.year}
              work={president.work}
            />
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-5">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-10">
          Presidents
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {past_Presidents.map((president, index) => (
            <PresidentBox
              key={index}
              number={index + 1}
              name={president.name}
              image={president.image}
              Avatar={president.Avatar}
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
