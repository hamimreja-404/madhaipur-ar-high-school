// AcademicsPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const examDetails = [
  {
    title: "Mid-Term Examination 2025",
    date: "Starts: August 1, 2025",
    fileUrl: "/downloads/midterm-schedule-2025.pdf",
  },
  {
    title: "Final Examination 2025",
    date: "Starts: December 5, 2025",
    fileUrl: "/downloads/final-exam-2025.pdf",
  },
];

const holidays = [
  {
    occasion: "Independence Day",
    date: "August 15, 2025",
  },
  {
    occasion: "Durga Puja Break",
    date: "October 1 - October 10, 2025",
  },
  {
    occasion: "Christmas Day",
    date: "December 25, 2025",
  },
];

const syllabusList = [
  {
    class: "Class V",
    fileUrl: "/downloads/syllabus-class5.pdf",
  },
  {
    class: "Class VI",
    fileUrl: "/downloads/syllabus-class6.pdf",
  },
  {
    class: "Class VII",
    fileUrl: "/downloads/syllabus-class7.pdf",
  },
  {
    class: "Class VIII",
    fileUrl: "/downloads/syllabus-class8.pdf",
  },
  {
    class: "Class IX",
    fileUrl: "/downloads/syllabus-class9.pdf",
  },
  {
    class: "Class X",
    fileUrl: "/downloads/syllabus-class10.pdf",
  },
  {
    class: "Class XI",
    fileUrl: "/downloads/syllabus-class11.pdf",
  },
  {
    class: "Class XII",
    fileUrl: "/downloads/syllabus-class12.pdf",
  },
];

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
          {examDetails.map((exam, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-gray-50 p-4 rounded border hover:shadow"
            >
              <div>
                <p className="text-sm text-gray-800 font-medium">{exam.title}</p>
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
          ))}
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
          {holidays.map((holiday, idx) => (
            <li key={idx}>
              <strong>{holiday.occasion}:</strong> {holiday.date}
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <button
            onClick={() => handleDownload("/downloads/holiday-list-2025.pdf")}
            className="text-indigo-600 hover:text-indigo-800 flex items-center gap-2 text-sm font-medium"
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
        <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Syllabus</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {syllabusList.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-gray-50 p-4 rounded border hover:shadow"
            >
              <p className="text-sm font-medium text-gray-800">{item.class}</p>
              <button
                onClick={() => handleDownload(item.fileUrl)}
                className="text-indigo-600 hover:text-indigo-800 transition"
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