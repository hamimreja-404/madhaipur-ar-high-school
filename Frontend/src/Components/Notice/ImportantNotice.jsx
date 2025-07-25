import React from 'react'
import { CalendarDays, Download, FileText, BadgeInfo } from "lucide-react";

import Notices from "../../Data/Notice";

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
export default function ImportantNotice(){
    const importantNotices = Notices.filter((n) => n.important);
    return(
      <>
        <div className="w-full lg:w-[450px] order-1 lg:order-2 bg-white border-l-4 border-red-500 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-700 mb-4 border-b-2 pb-2 border-yellow-500 inline-block">
            🚨 Important Notices
          </h2>

          <ul className="space-y-4 mt-4">
            {importantNotices.length > 0 ? (
              importantNotices.map((notice) => (
                <li
                  key={notice.id}
                  className="bg-red-50 p-3 rounded-md hover:bg-red-100 transition"
                >
                  <div className="flex justify-between items-start gap-3">
                    <div className="flex items-start gap-2">
                      <BadgeInfo className="text-red-600 mt-1" size={20} />
                      <div>
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                          <CalendarDays size={14} />
                          {new Date(notice.date).toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          })}
                        </p>
                        <p className="font-medium text-red-800 text-sm">
                          {notice.title}
                          {isNewNotice(notice.date) && (
                            <span className="ml-2 px-2 py-0.5 text-[11px] font-bold uppercase text-white bg-red-400 rounded-full shadow-[0_0_8px_2px_rgba(34,197,94,0.6)]">
                              NEW
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                    <a
                      href={notice.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-800"
                      title="Download Important Notice"
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
      </>
    )
  
}
