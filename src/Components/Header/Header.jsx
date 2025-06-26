import Logo_ from "../../images/Logo/Logo_.jpg"
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
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
  Bell,
  ChevronDown,
} from "lucide-react";
import { SocialIcon } from "react-social-icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const scrollId = sessionStorage.getItem("scrollToId");
    if (scrollId) {
      const section = document.getElementById(scrollId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
          sessionStorage.removeItem("scrollToId");
        }, 100);
      }
    }
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/home", icon: <Home size={18} className="mr-2" /> },
    {
      name: "About Us",
      path: "/about",
      icon: <Info size={18} className="mr-2" />,
    },
    {
      name: "Notice Board",
      path: "/notice",
      icon: <Bell size={18} className="mr-2" />,
    },
    {
      name: "Admission",
      path: "/admission",
      hasDropdown: true,
      submenu: [
        { name: "Admission Notices", path: "/admission#notice" },
        { name: "Admission Procedure", path: "/admission#procedure" },
        { name: "General Instructions", path: "/admission#instructions" },
        { name: "Fee Structure", path: "/admission#fee" },
      ],
    },
    {
      name: "Academics",
      path: "/academics",
      hasDropdown: true,
      submenu: [
        { name: "Examination", path: "/academics#examination" },
        { name: "Holiday List", path: "/academics#holidayList" },
        { name: "Syllabus", path: "/academics#syllabus" },
      ],
    },
    {
      name: (
        <span className="flex items-center gap-1">
          <span className="ml-1">Faculty & Leadership</span>
        </span>
      ),
      path: "/Faculty&Leadership",
      hasDropdown: true,
      submenu: [
        {
          name: (
            <span className="flex items-center">
              <Users size={14} className="mr-2" />
              Faculty
            </span>
          ),
          path: "/faculty&leadership#faculty",
        },
        {
          name: (
            <span className="flex items-center">
              <Medal size={14} className="mr-2" />
              Presidents
            </span>
          ),
          path: "/faculty&leadership#presidents",
        },
      ],
    },
    // {
    //   name: "Faculty & Leadership",
    //   path: "/Faculty&Leadership",
    //   hasDropdown: true,
    //   submenu: [
    //     { name: "Faculty", path: "/faculty",icon: <Users size={15} className="mr-2" />  },
    //     { name: "Presidents", path: "/presidents", icon: <Medal size={15} className="mr-2" /> }
    //   ],
    // },
    // { name: "Faculty", path: "/faculty", icon: <Users size={18} className="mr-2" /> },
    // { name: "Presidents", path: "/presidents", icon: <Medal size={18} className="mr-2" /> },
    {
      name: "Gallery",
      path: "/gallery",
      icon: <GalleryIcon size={18} className="mr-2" />,
    },
  ];

  const handleSubmenuClick = (path) => {
    const [basePath, hash] = path.split("#");
    if (location.pathname === basePath) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      sessionStorage.setItem("scrollToId", hash);
      navigate(basePath);
    }
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="w-full">
      <div className="w-full bg-indigo-950 text-white text-xs sm:text-sm px-4 py-2 font-medium font-poppins flex justify-between items-center">
        <span className="hidden sm:block tracking-wide text-gray-300">
          🎓 Dedicated to Excellence in Education
        </span>
        <div className="flex gap-4 ">
          <span>📧 hm.mparhs@gmail.com</span>
          <span>📞 +91 7908621154</span>

          <SocialIcon
            url="mailto:hm.mparhs@gmail.com"
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
            <ShieldUser style={{ height: 20, width: 20 }} className="mt-1" />
          </NavLink>
        </div>
      </div>

      <div className="bg-white py-6 px-4 flex justify-center flex-col md:flex-row items-center gap-5 md:gap-10 shadow-sm">
        <img
          src= {Logo_}
          alt="School Logo"
          className="h-20 w-auto"
        />
        <div className="text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold font-serif text-slate-800">
            MADHAIPUR A.R. HIGH SCHOOL (H.S.)
          </h1>
          <p className="text-base sm:text-lg font-semibold text-indigo-600">
            মাধাইপুর এ.আর. উচ্চ বিদ্যালয় (উঃমাঃ)
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Under the school Education Department of West Bengal <br />
             School Index: R1226 | H.S. Score: 111179 <br /> Dice Code: 19060806004
          </p>
        </div>
      </div>

      <nav className="bg-indigo-800 text-white font-medium shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex justify-end md:justify-center items-center h-16">
          <div className="hidden md:flex gap-x-10 items-center">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.hasDropdown ? (
                  <div className="flex items-center">
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-yellow-400 border-b-2 border-yellow-400 pb-1 flex items-center"
                          : "hover:text-yellow-300 transition-all flex items-center"
                      }
                      onMouseEnter={() => setOpenDropdown(index)}
                      onClick={() =>
                        setOpenDropdown(openDropdown === index ? null : index)
                      }
                    >
                      {item.icon}
                      {item.name}
                      <ChevronDown size={16} />
                    </NavLink>
                  </div>
                ) : (
                  <NavLink
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
                )}

                {item.hasDropdown && openDropdown === index && (
                  <div
                    onMouseLeave={() => setOpenDropdown(null)}
                    className="absolute top-full left-0 bg-indigo-900 shadow-md py-2 px-4 rounded mt-1 w-56 z-50"
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <button
                        key={subIndex}
                        onClick={() => handleSubmenuClick(subItem.path)}
                        className="block text-left w-full py-1 text-sm text-white hover:text-yellow-300 transition"
                      >
                        {subItem.icon}
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

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

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-indigo-700 px-4 py-4 flex flex-col space-y-4"
            >
              {navItems.map((item, index) => (
                <div key={index} className="relative">
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === index ? null : index)
                        }
                        className="text-white hover:text-yellow-300 transition flex items-center w-full"
                      >
                        {item.icon}
                        {item.name}
                        <ChevronDown size={16} className="ml-1" />
                      </button>

                      {openDropdown === index && (
                        <div className="mt-2 bg-indigo-800 rounded px-3 py-2 space-y-2">
                          {item.submenu.map((subItem, subIndex) => (
                            <button
                              key={subIndex}
                              onClick={() => handleSubmenuClick(subItem.path)}
                              className="block text-sm text-white hover:text-yellow-300 transition"
                            >
                              {subItem.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      onClick={() => {
                        setIsOpen(false);
                        setOpenDropdown(null);
                      }}
                      className={({ isActive }) =>
                        isActive
                          ? "text-yellow-400 font-semibold flex items-center"
                          : "text-white hover:text-yellow-300 transition flex items-center"
                      }
                    >
                      {item.icon}
                      {item.name}
                    </NavLink>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Navbar;
