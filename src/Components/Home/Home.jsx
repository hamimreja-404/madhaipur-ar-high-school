import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import AutoSlider from "../ImageSlider/ImageSlider";
import { BookOpen, Eye, ArrowRightCircle } from "lucide-react";
import Photos from "../../Data/Photos";
import TeacherBox from "../Faculty/facultyBox/teacherBox";
import teachersList from "../../Data/teachersList";
import ImportantNotice from "../Notice/ImportantNotice";

import All from "../../images/Logo/All.jpg";

// function Gallery({ photos }) {
//   const [selectedImage, setSelectedImage] = useState(null);
// }
function Counter({ end, label }) {
  const [count, setCount] = useState(0);

  const ref = useRef();
  console.log(Photos);
  console.log(TeacherBox);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = end / 100;
          const interval = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(interval);
            } else {
              setCount(Math.ceil(start));
            }
          }, 10);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div
      ref={ref}
      className="text-center transition-transform duration-500 hover:scale-105"
    >
      <p className="text-yellow-400 text-4xl font-extrabold font-sans">
        {count}+
      </p>
      <p className="mt-1 text-white text-lg font-light font-sans">{label}</p>
    </div>
  );
}

function HomePage() {
  const [selImage, setSelImage] = useState(null);
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 font-sans">
      {/* Hero Section */}
      <section className="relative w-full bg-black/50 overflow-hidden mb-12">
        <AutoSlider />
        <div className="w-full h-[477px] mt-5 absolute inset-0 z-10 flex flex-col items-center justify-center text-white bg-black/50 text-center px-4 transition-opacity duration-500 hover:opacity-95">
          <h1 className="text-3xl sm:text-5xl font-bold drop-shadow font-serif">
            Welcome to Madhaipur A.R. High School (H.S.)
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-2xl drop-shadow font-light">
            Dedicated to excellence in education since 1974 — inspiring
            knowledge, discipline, and character.
          </p>
          <NavLink to="/about">
            <div className="mt-6 group relative inline-flex items-center gap-2 px-6 py-2 bg-indigo-900 text-white rounded-full shadow-md hover:bg-indigo-800 transition-all duration-300">
              <span className="text-sm font-medium">Learn More About Us</span>
              <ArrowRightCircle
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </div>
          </NavLink>
        </div>
      </section>
      {/* About and Notice Section */}
      <div className="flex flex-col md:flex-row-reverse gap-6 mb-16">
        {/* Important Notice - appears first on mobile, right on desktop */}
        <div className="w-full mt-20 md:w-1/3">
          <ImportantNotice />
        </div>

        {/* About Section */}
        <div className="w-full md:w-2/3">
          <section>
            <h2 class="text-4xl font-bold text-center md:5">
              <span class="bg-gradient-to-r from-indigo-900 via-purple-700 to-purple-900 bg-clip-text text-transparent">
                About Us
              </span>
            </h2>
            <p className="mt-10 text-gray-700 leading-relaxed text-lg mb-4 font-light">
              Established in 1974, Madhaipur A.R. High School (H.S) was founded
              through the vision and generosity of Haji Amiruddin, Ramjan
              Mandal, and Radhakishan Ram, who donated land to bring education
              to the region. Guided by early leaders like Ramjan Mandal, Ayub
              Ali, Abdul Latif, and Headmaster Md. Matiur Rahaman, the school
              grew into a center of discipline, values, and academic excellence.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-4 font-light">
              The name "A. R." in the school title honors their legacy,
              reminding every student and teacher of their noble contribution.
              Today, the school stands tall as a pillar of knowledge,
              character-building, and inclusive education in the region.
            </p>
          </section>
        </div>
      </div>

      <div className="mt-1 p-6 shadow flex flex-col md:flex-row md:justify-between gap-8">
        <div className="md:w-1/2 bg-indigo-50 rounded-lg p-3 flex flex-col items-center text-center transition-transform duration-500 hover:scale-105">
          <BookOpen className="text-indigo-600 mb-4" size={40} />
          <h3 className="text-2xl font-semibold text-indigo-800 mb-2 font-serif">
            Our Mission
          </h3>
          <p className="text-gray-700 text-base font-light">
            To create a nurturing and inclusive educational environment where
            every student is empowered to grow intellectually, morally, and
            socially. We aim to build a community of learners committed to
            excellence and compassion.
          </p>
        </div>

        <div className="md:w-1/2 bg-indigo-50 rounded-lg p-3 flex flex-col items-center text-center transition-transform duration-500 hover:scale-105">
          <Eye className="text-green-600 mb-4" size={40} />
          <h3 className="text-2xl font-semibold text-green-800 mb-2 font-serif">
            Our Vision
          </h3>
          <p className="text-gray-700 text-base font-light">
            To be a leading institution in rural education, producing
            responsible citizens who contribute positively to society through
            innovation, leadership, and lifelong learning.
          </p>
        </div>
      </div>

      <NavLink
        to="/about"
        className="mt-6 group relative inline-flex items-center gap-2 px-6 py-2 bg-indigo-900 text-white rounded-full shadow-md hover:bg-indigo-800 transition-all duration-300"
      >
        <span className="text-sm font-medium">Read More</span>
        <ArrowRightCircle
          size={20}
          className="transition-transform group-hover:translate-x-1"
        />
      </NavLink>

      {/* Faculty Section */}
      <section className="mb-16 mt-10">
        <h2 class="text-4xl font-bold text-center md:5">
          <span class="bg-gradient-to-r from-indigo-900 via-purple-700 to-purple-900 bg-clip-text text-transparent">
            Our Faculty
          </span>
        </h2>
        {/* <h2 className="text-2xl font-bold text-indigo-900 mb-4 font-serif">
          Our Faculty
        </h2> */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachersList.slice(0, 3).map((teacher, index) => (
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
        <NavLink
          to="/Faculty"
          className="mt-6  group relative inline-flex items-center gap-2 px-6 py-2 bg-indigo-900 text-white rounded-full shadow-md hover:bg-indigo-800 transition-all duration-300"
        >
          <span className="text-sm font-medium">View Full Faculty</span>
          <ArrowRightCircle
            size={20}
            className="transition-transform group-hover:translate-x-1"
          />
        </NavLink>
      </section>

      {/* Gallery Section */}
      <section className="mb-16">
        {/* <h2 className="text-2xl font-bold text-indigo-900 mb-4 font-serif">
          Glimpses of Campus Life
        </h2> */}
        <h2 class="text-4xl font-bold text-center md:5">
          <span class="bg-gradient-to-r from-indigo-900 via-purple-700 to-purple-900 bg-clip-text text-transparent">
            Glimpses of Campus Life
          </span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-10">
          {Photos.slice(0, 8).map((img, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden "
              onClick={() => setSelImage(img.image)}
            >
              <img
                src={img.image}
                alt={`gallery-${index}`}
                className="rounded-xl w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-2 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl cursor-zoom-in">
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
            </div>
          ))}
        </div>

        {/* Modal */}
        {selImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
            onClick={() => setSelImage(null)}
          >
            <img
              src={selImage}
              alt="Full view"
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-lg border-4 border-white"
            />
          </div>
        )}

        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-10">
          {Photos.slice(0, 8).map((img, index) => (
            <img
              key={index}
              alt={`gallery-${index}`}
              src={img.image}
              className="rounded-xl shadow-md object-cover w-full h-[200px] transition-transform duration-500 hover:scale-105"
            />
          ))}
          
        </div> */}
        <NavLink
          to="/gallery"
          className="mt-6 group relative inline-flex items-center gap-2 px-6 py-2 bg-indigo-900 text-white rounded-full shadow-md hover:bg-indigo-800 transition-all duration-300"
        >
          <span className="text-sm font-medium">View Full Gallery</span>
          <ArrowRightCircle
            size={20}
            className="transition-transform group-hover:translate-x-1"
          />
        </NavLink>
      </section>

      {/* Stats Section */}
      <section className="relative w-full max-w-7xl h-[400px] sm:h-[450px] rounded-xl overflow-hidden shadow-md mx-auto mb-20">
        <img
          className="w-full h-full object-cover"
          src={All}
          alt="School Community"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 font-serif tracking-wide">
            Meet Our Vibrant School Family
          </h2>
          <div className="flex flex-wrap justify-center gap-8 text-lg sm:text-xl font-medium">
            <Counter end={20} label="Qualified Teachers" />
            <Counter end={950} label="Brilliant Students" />
            <Counter end={3} label="Support Staff" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
