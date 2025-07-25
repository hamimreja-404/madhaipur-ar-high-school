import React from "react";
import { CalendarDays, Download, FileText, BadgeInfo } from "lucide-react";

import Notices from "../../Data/Notice";
import ImportantNotice from "./ImportantNotice";
// Detect if notice is recent (last 7 days)
const isNewNotice = (dateStr) => {
  const today = new Date();
  const noticeDate = new Date(dateStr);

  // Normalize both to start of day
  today.setHours(0, 0, 0, 0);
  noticeDate.setHours(0, 0, 0, 0);

  const diffInTime = today.getTime() - noticeDate.getTime();
  const diffInDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24));

  return diffInDays >= 0 && diffInDays <= 7;
};

const handleDownload = async (url, filename) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const fileReader = new FileReader();

    fileReader.onload = () => {
      const bufferUrl = fileReader.result;

      // Now use JS to simulate a download
      const blobObj = new Blob([blob]);
      const objectUrl = URL.createObjectURL(blobObj);

      // Create a download by triggering a URL download without <a>
      const clickHandler = () => {
        const iframe = document.createElement("iframe");
        iframe.style.display = "none";
        iframe.src = objectUrl;
        document.body.appendChild(iframe);
        setTimeout(() => document.body.removeChild(iframe), 100);
      };

      clickHandler();
    };

    fileReader.readAsArrayBuffer(blob);
  } catch (error) {
    console.error("Download failed:", error);
  }
};



export default function Notice() {
  const generalNotices = Notices.filter((n) => !n.important);
  // const importantNotices = Notices.filter((n) => n.important);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
      <ImportantNotice/>

        {/* General Notices */}
        <div className="flex-1 w-full order-2 lg:order-1 bg-green-50 border-l-4 border-green-600 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-800 mb-4 border-b-2 pb-2 border-yellow-500 inline-block">
            📋 General Notices
          </h2>

          <ul className="space-y-5 mt-4">
            {generalNotices.length > 0 ? (
              generalNotices.map((notice) => (
                <li
                  key={notice.id}
                  className="bg-white p-4 rounded-md shadow hover:shadow-md transition border border-green-200"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <FileText className="text-green-700 mt-1" size={22} />
                      <div>
                        <h3 className="text-md font-semibold text-green-900">
                          {notice.title}
                          {isNewNotice(notice.date) && (
                            <span className="ml-2 px-2 py-0.5 text-[11px] font-bold uppercase text-white bg-green-600 rounded-full shadow-[0_0_8px_2px_rgba(34,197,94,0.6)]">
                              NEW
                            </span>
                          )}
                        </h3>
                        <div className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                          <CalendarDays size={16} />
                          {new Date(notice.date).toLocaleDateString()}
                          <span className="ml-3 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded">
                            {notice.fileType}
                          </span>
                        </div>
                      </div>
                    </div>

                    <a
                      href={notice.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-800"
                      title="Download Notice"
                    >
                      <button
                        onClick={() =>
                          handleDownload(notice.fileUrl, notice.title)
                        }
                        className="text-green-600 hover:text-green-800 cursor-pointer"
                        title="Download Notice"
                      >
                        <Download size={20} />
                      </button>
                    </a>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-gray-500 italic">
                📢 No Notices available at this moment.
              </p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}


