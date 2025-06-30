import DP from "../../images/Logo/DP.jpg";
import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  Home,
  Info,
  Bell,
  Users,
  Medal,
  Image as GalleryIcon,
} from "lucide-react";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHashLink = (path) => {
    const [basePath, hash] = path.split("#");
    if (location.pathname === basePath) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      sessionStorage.setItem("scrollToId", hash);
      navigate(basePath);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-indigo-900 to-indigo-700 text-white mt-20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center lg:text-left">

        {/* Column 1: School Info */}
        <div>
          <h2 className="text-2xl font-serif font-semibold mb-3 tracking-wide">
            MADHAIPUR A.R. HIGH SCHOOL (H.S.)
          </h2>
          <p className="text-sm text-indigo-200">257Q+9H2, Madhaipur, West Bengal 732142</p>
          <p className="text-sm text-indigo-200">hm.mparhs@gmail.com</p>
          <p className="text-sm text-indigo-200">+91 7908621154</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 underline underline-offset-4 decoration-yellow-400">
            Quick Links
          </h3>
          <div className="flex flex-col gap-2 text-sm text-indigo-200">
            <NavLink to="/" className="flex items-center gap-2 hover:text-yellow-300 transition"><Home size={16} /> Home</NavLink>
            <NavLink to="/about" className="flex items-center gap-2 hover:text-yellow-300 transition"><Info size={16} /> About Us</NavLink>
            <NavLink to="/notice" className="flex items-center gap-2 hover:text-yellow-300 transition"><Bell size={16} /> Notice Board</NavLink>
            <NavLink to="/faculty" className="flex items-center gap-2 hover:text-yellow-300 transition"><Users size={16} /> Faculty</NavLink>
            <NavLink to="/presidents" className="flex items-center gap-2 hover:text-yellow-300 transition"><Medal size={16} /> Our Pillars</NavLink>
            <NavLink to="/gallery" className="flex items-center gap-2 hover:text-yellow-300 transition"><GalleryIcon size={16} /> Gallery</NavLink>
          </div>
        </div>

        {/* Column 3: Admission & Academics */}
        <div>
          <h3 className="text-lg font-bold mb-4 underline underline-offset-4 decoration-yellow-400">
            Admission & Academics
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm text-indigo-200">
            <div>
              <p className="font-semibold mb-2">📝 Admission</p>
              <button onClick={() => handleHashLink("/admission#notice")} className="block hover:text-yellow-300">• Notices</button>
              <button onClick={() => handleHashLink("/admission#procedure")} className="block hover:text-yellow-300">• Procedure</button>
              <button onClick={() => handleHashLink("/admission#instructions")} className="block hover:text-yellow-300">• Instructions</button>
              <button onClick={() => handleHashLink("/admission#fee")} className="block hover:text-yellow-300">• Fee Structure</button>
            </div>
            <div>
              <p className="font-semibold mb-2">🎓 Academics</p>
              <button onClick={() => handleHashLink("/academics#examination")} className="block hover:text-yellow-300">• Examination</button>
              <button onClick={() => handleHashLink("/academics#holidayList")} className="block hover:text-yellow-300">• Holiday List</button>
              <button onClick={() => handleHashLink("/academics#syllabus")} className="block hover:text-yellow-300">• Syllabus</button>
            </div>
          </div>
        </div>

        {/* Column 4: Developer Credit */}
        <div className="flex flex-col items-center lg:items-end gap-3">
          <img
            src={DP}
            alt="Developer"
            className="w-20 h-20 rounded-full border-2 border-white shadow-lg"
          />
          <p className="text-[15px] text-indigo-200 text-center lg:text-right italic leading-tight">
            Designed & Developed by{" "}
            <NavLink to="/portfolio" className="text-yellow-300 font-semibold hover:underline">
              Hamim Reja
            </NavLink><br />
            Alumni of Madhaipur A.R. High School
          </p>
        </div>
      </div>

      {/* Google Map */}
      <iframe
        className="w-full h-56 md:h-64 border-none shadow-md"
        loading="lazy"
        title="school-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.947866683464!2d88.1899048934904!3d25.01388528464579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb02403b0665f7%3A0xc58c8e9469c4461b!2sMADHAIPUR%20A.%20R.%20HIGH%20SCHOOL(H.S)!5e0!3m2!1sen!2sin!4v1750220950127!5m2!1sen!2sin"
      ></iframe>

      {/* Bottom Bar */}
      <div className="bg-indigo-950 text-indigo-300 text-center py-3 text-xs border-t border-indigo-700 tracking-wide">
        © {new Date().getFullYear()} MADHAIPUR A.R. HIGH SCHOOL (H.S.). All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
