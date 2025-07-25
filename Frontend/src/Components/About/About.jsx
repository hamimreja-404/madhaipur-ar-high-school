import React from "react";
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
import Uniform from "../../images/Logo/Uniform.jpg";
import Campus from "../../images/Logo/Campus.jpg";

const timeline = [
  { year: "1974", event: "School founded by local visionaries." },
  { year: "1984", event: "Received government recognition as Junior High School." },
  { year: "2006", event: "Upgraded to High School." },
  { year: "2012", event: "Introduced Higher Secondary curriculum." },
  { year: "2020s", event: "Implemented digital learning and vocational training." }
];

function AboutUs() {
  return (
    <div className="bg-white text-gray-800 font-poppins">
      <AutoSlider />

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center  mb-7 bg-gradient-to-r from-indigo-900 via-purple-700 to-purple-900 bg-clip-text text-transparent">
          Welcome to Madhaipur A.R. High School (H.S)
        </h1>
        <p className="text-lg leading-relaxed text-justify text-gray-800">
          Madhaipur A.R. High School (H.S) was founded in <strong>1974</strong>, inspired by the powerful vision of local pioneers — <strong>Haji Amiruddin</strong>, <strong>Ramjan Mandal</strong>, and <strong>Radhakishan Ram</strong> — who generously donated land to establish a center of learning for Madhaipur and its surrounding villages.
          <br /><br />
          While their contribution laid the physical foundation, it was the <strong>founding committee and early educators</strong> who truly built the institution’s heart and spirit. Led by <strong>Ramjan Mandal (President)</strong>, <strong>Ayub Ali (Vice-President)</strong>, and <strong>Abdul Latif (Secretary)</strong>, along with other dedicated members and the first headmaster <strong>Md. Matiur Rahaman</strong>, they nurtured the school’s values, discipline, and academic culture from the ground up.
          <br /><br />
          The name <strong>“A.R.”</strong> honors the memory of its visionary land donors, but the legacy of this institution stands equally on the shoulders of those who taught, guided, and led it in its earliest and most crucial years. Their dedication continues to echo in every classroom, inspiring generations.
        </p>
      </section>

      {/* Mission Vision Values */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          {[{
            icon: <BookOpen className="text-indigo-600 mx-auto" size={36} />,
            title: "Our Mission",
            color: "text-indigo-800",
            text: "To empower students with knowledge, values, and life skills to thrive in a changing world."
          }, {
            icon: <Eye className="text-green-600 mx-auto" size={36} />,
            title: "Our Vision",
            color: "text-green-800",
            text: "To be a transformative institution nurturing compassionate leaders of tomorrow."
          }, {
            icon: <Star className="text-yellow-500 mx-auto" size={36} />,
            title: "Our Core Values",
            color: "text-yellow-700",
            text: (
              <ul className="text-gray-700 list-disc list-inside text-left mt-2">
                <li>Integrity and Responsibility</li>
                <li>Discipline and Respect</li>
                <li>Inclusivity and Collaboration</li>
                <li>Curiosity and Innovation</li>
                <li>Excellence in Learning</li>
              </ul>
            )
          }].map((item, index) => (
            <div key={index} className="bg-stone-50 shadow p-6 rounded-xl transition-transform hover:scale-105 group">
              {item.icon}
              <h3 className={`text-xl font-semibold mt-4 mb-2 ${item.color}`}>{item.title}</h3>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Motto, Campus, Uniform, Academics */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid gap-10 md:grid-cols-2">
        {[{
          icon: <ShieldCheck className="text-indigo-700 mx-auto" size={36} />,
          title: "Our Motto",
          color: "text-indigo-800",
          text: "\"Shiksha Hi Shakti Hai\" — Education is Power. It defines our mission to uplift through learning."
        }, {
          icon: <GraduationCap className="text-purple-700 mx-auto" size={36} />,
          title: "Academics",
          color: "text-purple-800",
          text: "Offering Science, Arts, and Vocational streams, our curriculum is aligned with 21st-century learning goals."
        }, {
          icon: <Shirt className="text-blue-700 mx-auto" size={36} />,
          title: "School Uniform",
          color: "text-blue-800",
          image: Uniform,
          alt: "School Uniform",
          text: "Boys wear white shirts with navy trousers; girls wear navy skirts and salwars. Uniform fosters unity and discipline."
        }, {
          icon: <School className="text-green-700 mx-auto" size={36} />,
          title: "Our Campus",
          color: "text-green-800",
          image: Campus,
          alt: "School Campus",
          text: "Our green campus includes modern classrooms, labs, a library, and open spaces supporting all-round development."
        }].map((item, index) => (
          <div key={index} className="bg-indigo-50 rounded-xl shadow p-6 hover:scale-105 transition-transform">
            {item.icon}
            <h3 className={`text-2xl font-semibold text-center mt-4 mb-2 ${item.color}`}>{item.title}</h3>
            {item.image && <img src={item.image} alt={item.alt} className="rounded-lg my-4 w-full h-56 object-cover" />}
            <p className="text-center text-gray-700">{item.text}</p>
          </div>
        ))}
      </section>

      {/* Timeline */}
      {/* <section className="bg-gray-100 py-14">
        <h2 className="text-3xl font-bold text-indigo-800 text-center mb-10">
          Our Journey Through the Years
        </h2>
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-300"></div>
          {timeline.map((item, index) => (
            <div key={index} className="mb-12 flex justify-between items-center w-full">
              {index % 2 === 0 ? (
                <div className="w-2/5">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-indigo-700 font-bold text-lg mb-2">{item.year}</h3>
                    <p className="text-gray-700">{item.event}</p>
                  </div>
                </div>
              ) : <div className="w-2/5"></div>}
              <div className="w-1/5 flex justify-center items-center">
                <div className="w-14 h-14 rounded-full bg-white border-4 border-indigo-400 flex items-center justify-center text-indigo-800 font-bold shadow">
                  {item.year}
                </div>
              </div>
              {index % 2 !== 0 ? (
                <div className="w-2/5">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-indigo-700 font-bold text-lg mb-2">{item.year}</h3>
                    <p className="text-gray-700">{item.event}</p>
                  </div>
                </div>
              ) : <div className="w-2/5"></div>}
            </div>
          ))}
        </div>
      </section> */}

      {/* Honoring Founders */}
          <section className="bg-indigo-50 text-gray-800 py-12 px-6 md:px-16 lg:px-32" id="acknowledgement">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-900 via-purple-700 to-purple-900 bg-clip-text text-transparent">
          Acknowledging Our Founders & Early Leaders
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          There was a time when the children of Madhaipur and nearby villages had no school to attend — no institution close by to nurture their dreams or guide their futures. In those days, education was a distant privilege, not a local right. But a group of visionary individuals came forward, determined to change that reality.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Thanks to their unwavering resolve and selfless contributions, today we have <strong>Madhaipur A.R. High School (H.S)</strong> — a flourishing institution that stands tall not only in infrastructure but in academic excellence and community impact.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Established in <strong>1974</strong>, the school’s foundation was laid through the generous land donations of <strong>Haji Amiruddin</strong>, <strong>Ramjan Mandal</strong>, and <strong>Radhakishan Ram</strong>, whose gifts of land turned a dream into a possibility. But the real heartbeat of the school was created by a group of passionate and forward-thinking founders.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Led by <strong>Ramjan Mandal</strong> as the first President, and supported by committed individuals like <strong>Ayub Ali</strong>, <strong>Abdul Latif</strong>, and others, they didn’t just form a committee — they lit a torch of knowledge for generations to come. The values they instilled — <em>discipline, excellence, and service</em> — continue to guide the school’s journey to this day.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          The name “<strong>A.R.</strong>” honors the memory and mission of these founders. And their vision was brought to life in the classrooms by early educators such as <strong>Md. Matiur Rahaman</strong> and <strong>Md. Serajul Islam</strong>, whose tireless teaching and dedication shaped the first batches of students and laid the groundwork for a thriving academic culture.
        </p>
        <p className="text-lg leading-relaxed">
          Today, Madhaipur A.R. High School is more than just a school — it is a symbol of what collective willpower and community spirit can achieve. We remain forever grateful to those who turned hope into heritage.
        </p>
      </div>
    </section>
    </div>
  );
}

export default AboutUs;
