// AcademicsPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import syllabusList from "../../Data/syllabusList";
import holidays2025 from "../../Data/HolidayList";
import examDetails from "../../Data/examDetails";

const currentMonth = new Date().getMonth() + 1;
const parseIndianDate = (dateStr) => {
  const [day, month, year] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day);
};
const upcomingHolidays = holidays2025
  .map((h) => ({
    ...h,
    dateObj: parseIndianDate(h.in.split(" to ")[0]), // handles ranges
  }))
  .filter((h) => h.dateObj >= new Date()) // only future holidays
  .sort((a, b) => a.dateObj - b.dateObj) // sort ascending
  .slice(0, 5); // take next 5

const AcademicsPage = () => {
  const handleDownload = (fileUrl) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", fileUrl.split("/").pop());
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="w-full px-4 py-8 md:px-10 lg:px-24 font-poppins space-y-16">
      {/* Examination Section */}
      {/* Examination Section */}
      <motion.section
        id="examination"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-6 rounded-xl shadow-md"
      >
        <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
          Examination Details
        </h3>
        <div className="space-y-4">
          {examDetails.length > 0 ? (
            examDetails.map((exam, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between bg-gray-50 p-4 rounded border hover:shadow"
              >
                <div>
                  <p className="text-sm text-gray-800 font-medium">
                    {exam.title}
                  </p>
                  <p className="text-xs text-gray-500">📅 {exam.date}</p>
                </div>
                <button
                  onClick={() => handleDownload(exam.fileUrl)}
                  className="text-indigo-600 hover:text-indigo-800 transition"
                  title="Download Schedule"
                >
                  <Download size={20} />
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic">
              📢 No examination updates available at this moment.
            </p>
          )}
        </div>
      </motion.section>

      {/* Holiday List */}
      <motion.section
        id="holidayList"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-6 rounded-xl shadow-md"
      >
        <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
          Holiday List 2025
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {upcomingHolidays.length > 0 ? (
            upcomingHolidays.map((holiday, idx) => (
              <li key={idx}>
                <strong>{holiday.name}:</strong> {holiday.in}
              </li>
            ))
          ) : (
            <li>No upcoming holidays for this Year.</li>
          )}
        </ul>
        <div className="mt-4">
          <button
            onClick={() =>
              handleDownload("src/Data/Holiday List/Modelholidaylist2025.pdf")
            }
            className="text-indigo-600 hover:text-indigo-800 flex items-center gap-2 text-sm font-medium cursor-pointer"
          >
            <Download size={18} /> Download Full Holiday List (PDF)
          </button>
        </div>
      </motion.section>

      {/* Syllabus Downloads */}
      <motion.section
        id="syllabus"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-6 rounded-xl shadow-md"
      >
        <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
          Syllabus
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {syllabusList.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-gray-50 p-4 rounded border hover:shadow"
            >
              <p className="text-sm font-medium text-gray-800">{item.class}</p>
              <button
                onClick={() => handleDownload(item.fileUrl)}
                className="text-indigo-600 hover:text-indigo-800 transition cursor-pointer"
                title="Download Syllabus"
              >
                <Download size={20} />
              </button>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default AcademicsPage;
