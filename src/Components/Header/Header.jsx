import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Info,
  Users,
  Medal,
  Image as GalleryIcon,
  Menu,
  X,
  ShieldUser,
} from "lucide-react";

import { SocialIcon } from "react-social-icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: <Home size={18} className="mr-2" /> },
    {
      name: "About Us",
      path: "/about",
      icon: <Info size={18} className="mr-2" />,
    },
    {
      name: "Faculty",
      path: "/faculty",
      icon: <Users size={18} className="mr-2" />,
    },
    {
      name: "Presidents",
      path: "/presidents",
      icon: <Medal size={18} className="mr-2" />,
    },
    {
      name: "Gallery",
      path: "/gallery",
      icon: <GalleryIcon size={18} className="mr-2" />,
    },
  ];

  return (
    <header className="w-full">
      {/* Top Contact Strip */}
      {/* <div className="w-full bg-indigo-950 text-white text-xs sm:text-sm flex justify-between items-center px-4 py-2 font-medium font-poppins">
        <span>📧 contact@madhaipurschool.ac.in</span>
        <span>📞 +91 92725228335</span>
      </div> */}
      {/* Top Header Strip */}
      <div className="w-full bg-indigo-950 text-white text-xs sm:text-sm px-4 py-2 font-medium font-poppins flex justify-between items-center">
        {/* Tagline or Motto */}
        <span className="hidden sm:block tracking-wide text-gray-300">
          🎓 Dedicated to Excellence in Education
        </span>

        {/* Social Media Icons */}
        <div className="flex gap-4 ">
          <span>📧 contact@madhaipurschool.ac.in</span>
          <span>📞 +91 92725228335</span>
          <SocialIcon
            url="https://facebook.com"
            target="_blank"
            fgColor="#fff"
            bgColor="transparent"
            style={{ height: 30, width: 30 }}
          />
          <SocialIcon
            url="mailto:madhaipurschool@gmail.com"
            fgColor="#fff"
            bgColor="transparent"
            style={{ height: 30, width: 30 }}
          />
          <NavLink
            to="/adminLogin"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold flex items-center"
                : "text-white hover:text-yellow-300 transition flex items-center"
            }
          >
          <ShieldUser
            fgColor="#fff"
            bgColor="transparent"
            style={{ height: 20, width: 20 }}
            className="mt-1"
          />
          </NavLink>
        </div>
      </div>

      {/* Branding */}
      <div className="bg-white py-6 px-4 flex justify-center flex-col md:flex-row items-center gap-5 md:gap-10 shadow-sm">
        <img
          src="src/images/Logo/51588971215.png"
          alt="School Logo"
          className="h-20 w-auto"
        />
        <div className="text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold font-serif text-slate-800">
            MADHAIPUR A.R. HIGH SCHOOL (H.S)
          </h1>
          <p className="text-base sm:text-lg font-semibold text-indigo-600">
            মাধইপুর এ.আর. উচ্চ বিদ্যালয় (এইচ.এস.)
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Under the Department of Education, Govt. of West Bengal
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-indigo-800 text-white font-medium shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex justify-end md:justify-center items-center h-16">
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-x-10 items-center">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 border-b-2 border-yellow-400 pb-1 flex items-center"
                    : "hover:text-yellow-300 transition-all flex items-center"
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              aria-label="Menu Button"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-indigo-700 px-4 py-4 flex flex-col space-y-4"
            >
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-400 font-semibold flex items-center"
                      : "text-white hover:text-yellow-300 transition flex items-center"
                  }
                >
                  {item.icon}
                  {item.name}
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Navbar;
