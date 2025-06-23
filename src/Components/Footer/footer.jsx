
import React from "react";
import { SocialIcon } from "react-social-icons";
import { NavLink } from "react-router-dom";
import {
  Home,
  Info,
  Users,
  Medal,
  Image as GalleryIcon,
} from "lucide-react";

function Footer() {
  const navItems = [
    { name: "Home", path: "/", icon: <Home size={18} className="mr-2" /> },
    { name: "About Us", path: "/about", icon: <Info size={18} className="mr-2" /> },
    { name: "Faculty", path: "/faculty", icon: <Users size={18} className="mr-2" /> },
    { name: "Presidents", path: "/presidents", icon: <Medal size={18} className="mr-2" /> },
    { name: "Gallery", path: "/gallery", icon: <GalleryIcon size={18} className="mr-2" /> },
  ];

  return (
    <footer className="bg-gradient-to-br from-indigo-900 to-indigo-700 text-white shadow-xl  mt-20">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Info */}
        <div>
          <h2 className="text-2xl font-serif font-semibold tracking-wide mb-2">
            MADHAIPUR A.R. HIGH SCHOOL (H.S.)
          </h2>
          <p className="text-sm mb-2">
            257Q+9H2, Madhaipur, West Bengal 732101
          </p>
          <p className="text-sm">hm.mparhs@gamail.com</p>
          <p className="text-sm">+91 7908621154</p>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="text-lg font-bold mb-2 underline underline-offset-4 decoration-yellow-400">
            Quick Links
          </h3>
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 flex items-center transition-all"
                  : "flex items-center text-white hover:text-yellow-300 transition"
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Social & Alumni */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4">
            <SocialIcon url="https://facebook.com" target="_blank" fgColor="#fff" bgColor="transparent" />
            <SocialIcon url="https://linkedin.com" target="_blank" fgColor="#fff" bgColor="transparent" />
            <SocialIcon url="mailto:madhaipurschool@gmail.com" fgColor="#fff" bgColor="transparent" />
            <SocialIcon url="https://instagram.com" target="_blank" fgColor="#fff" bgColor="transparent" />
          </div>
          <div className="flex items-center gap-3">
            <img
              src="src/images/Logo/DP.jpg"
              alt="School Logo"
              className="w-20 h-20 rounded-full border border-white shadow-sm"
            />
           
<p className="text-center text-sm text-gray-300 italic mt-4">
  Designed & Developed by{" "}
  <NavLink
    to="/portfolio"
    className="text-yellow-300 font-xl font-bold hover:underline"
  >
    Hamim Reja
  </NavLink>, Alumni of Madhaipur A.R. High School
</p>
          </div>
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
      <div className="bg-indigo-950 text-indigo-300 text-center py-3 text-xs border-t border-indigo-700">
        © {new Date().getFullYear()} MADHAIPUR A.R. HIGH SCHOOL (H.S.). All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
