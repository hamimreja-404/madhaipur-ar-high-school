import AutoSlider from "../ImageSlider/ImageSlider";
import {
  BookOpen,
  Eye,
  Star,
  ShieldCheck,
  GraduationCap,
  Shirt,
  School,
  Award
} from "lucide-react";
import Uniform from "../../images/Logo/Uniform.jpg"
import Campus from "../../images/Logo/Campus.jpg"
const timeline = [
  {
    year: "1974",
    event:
      "Established by the generous donation and vision of Haji Amiruddin, Ramjan Mandal & Radhakishan Ram"
  },
  {
    year: "1984",
    event:
      "Received official Government recognition as a Junior High School"
  },
  {
    year: "2006",
    event: "Upgraded to a High School, expanding curriculum and capacity"
  },
  {
    year: "2012",
    event:
      "Became a Higher Secondary School (HS) with new science and arts streams"
  },
  {
    year: "2020s",
    event:
      "Integrated digital smart classrooms, skill-based training, and cultural initiatives"
  }
];

function AboutUs() {
  return (
    <div className="bg-white text-gray-800 font-poppins">
      <AutoSlider />
      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-indigo-800 mb-6 transition duration-300 hover:text-indigo-600">
          Welcome to Madhaipur A. R. High School (H.S)
        </h1>
        <p className="text-lg leading-relaxed text-justify">
          Founded in <strong>1974</strong>, Madhaipur A. R. High School (H.S) is the result of a powerful vision held by three eminent local pioneers — <strong>Haji Amiruddin</strong>, <strong>Ramjan Mandal</strong>, and <strong>Radhakishan Ram</strong>. With a goal to spread the light of education in Madhaipur and its neighboring villages, they donated land and laid the foundation for a learning institution that continues to shape young minds to this day.
          <br />
          <br />
          The name "A. R." in the school title honors their legacy, reminding every student and teacher of their noble contribution. Today, the school stands tall as a pillar of knowledge, character-building, and inclusive education in the region.
        </p>
      </section>

      {/* Mission Vision Values */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          {[{
            icon: <BookOpen className="text-indigo-600 mx-auto group-hover:scale-110 transition-transform duration-300" size={36} />,
            title: "Our Mission",
            color: "text-indigo-800",
            text: "To empower students with knowledge, values, and skills essential for leading meaningful and successful lives in a rapidly evolving world."
          }, {
            icon: <Eye className="text-green-600 mx-auto group-hover:scale-110 transition-transform duration-300" size={36} />,
            title: "Our Vision",
            color: "text-green-800",
            text: "To be a transformative educational institution nurturing leaders of tomorrow through excellence in academics, creativity, and social responsibility."
          }, {
            icon: <Star className="text-yellow-500 mx-auto group-hover:scale-110 transition-transform duration-300" size={36} />,
            title: "Our Core Values",
            color: "text-yellow-700",
            text: (
              <ul className="text-gray-700 list-disc list-inside text-left mt-2">
                <li>Integrity and Honesty</li>
                <li>Discipline and Determination</li>
                <li>Community and Collaboration</li>
                <li>Excellence in Learning</li>
                <li>Respect for All</li>
              </ul>
            )
          }].map((item, index) => (
            <div key={index} className="bg-stone-50 shadow p-6 rounded-xl transform transition-transform duration-300 hover:scale-105 group">
              {item.icon}
              <h3 className={`text-xl font-semibold mt-4 mb-2 ${item.color} transition-colors duration-300 hover:opacity-90`}>
                {item.title}
              </h3>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Motto, Uniform, Campus, Academics */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid gap-10 md:grid-cols-2">
        {[{
          icon: <ShieldCheck className="text-indigo-700 mx-auto group-hover:scale-110 transition-transform duration-300" size={36} />,
          title: "Our Motto",
          color: "text-indigo-800",
          text: "\"Shiksha Hi Shakti Hai\" — Education is Power. Our motto reflects our belief that education is the greatest tool for transformation."
        }, {
          icon: <GraduationCap className="text-purple-700 mx-auto group-hover:scale-110 transition-transform duration-300" size={36} />,
          title: "Academics",
          color: "text-purple-800",
          text: "We offer a strong academic foundation from primary to higher secondary levels, with Science, Arts, and Vocational streams aligned to 21st-century skills."
        }, {
          icon: <Shirt className="text-blue-700 mx-auto group-hover:scale-110 transition-transform duration-300" size={36} />,
          title: "School Uniform",
          color: "text-blue-800",
          image: Uniform,
          alt: "School Uniform",
          text: "Boys wear sky white shirts with navy trousers. Girls wear sky blue skirts with white salwar. Our uniform fosters unity and discipline."
        }, {
          icon: <School className="text-green-700 mx-auto group-hover:scale-110 transition-transform duration-300" size={36} />,
          title: "Our Campus",
          color: "text-green-800",
          image: Campus,
          alt: "School Campus",
          text: "Our lush green campus includes modern classrooms, a library, playgrounds, and an open learning environment for holistic development."
        }].map((item, index) => (
          <div key={index} className="bg-indigo-50 rounded-xl shadow p-6 transform transition-transform duration-300 hover:scale-105 group">
            {item.icon}
            <h3 className={`text-2xl font-semibold text-center mt-4 mb-2 ${item.color} transition-colors duration-300`}>
              {item.title}
            </h3>
            {item.image && (
              <img
                src={item.image}
                alt={item.alt}
                className="rounded-lg my-4 w-full h-56 object-cover"
              />
            )}
            <p className="text-center text-gray-700">{item.text}</p>
          </div>
        ))}
      </section>
      
      {/* Timeline */}
      {/* <section className="bg-gray-100 py-14">
        <h2 className="text-3xl font-bold text-indigo-800 text-center mb-10 transition duration-300 hover:text-indigo-600">
          Our Journey Through the Years
        </h2>
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-300"></div>
          {timeline.map((item, index) => (
            <div
              key={index}
              className="mb-12 flex justify-between items-center w-full"
            >
              {index % 2 === 0 ? (
                <div className="w-2/5">
                  <div className="bg-white p-4 rounded-lg shadow transition duration-300 hover:shadow-lg">
                    <h3 className="text-indigo-700 font-bold text-lg mb-2">
                      {item.year}
                    </h3>
                    <p className="text-gray-700">{item.event}</p>
                  </div>
                </div>
              ) : (
                <div className="w-2/5"></div>
              )}
              <div className="w-1/5 flex justify-center items-center relative">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-indigo-400 flex flex-col items-center justify-center shadow text-indigo-800 font-semibold">
                  {item.year}
                </div>
              </div>
              {index % 2 !== 0 ? (
                <div className="w-2/5">
                  <div className="bg-white p-4 rounded-lg shadow transition duration-300 hover:shadow-lg">
                    <h3 className="text-indigo-700 font-bold text-lg mb-2">
                      {item.year}
                    </h3>
                    <p className="text-gray-700">{item.event}</p>
                  </div>
                </div>
              ) : (
                <div className="w-2/5"></div>
              )}
            </div>
          ))}
        </div>
      </section> */}

      {/* Founders Section */}
      <section className="bg-indigo-50 py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <Award className="mx-auto text-indigo-700 hover:scale-110 transition-transform duration-300" size={40} />
          <h2 className="text-3xl font-bold text-indigo-800 mt-4 mb-4 transition duration-300 hover:text-indigo-600">
            Honoring Our Founders
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Madhaipur A. R. High School (HS) would not have been possible without the selfless contributions of <strong>Haji Amiruddin</strong>, <strong>Ramjan Mandal</strong>, and <strong>Radhakishan Ram</strong>. Their commitment to education and social upliftment remains etched in the fabric of our institution. Their vision continues to guide us toward excellence, inclusivity, and community development.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;