import React, { useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { FiUploadCloud } from "react-icons/fi";

export default function AdminHomePage() {
  const [formData, setFormData] = useState({
    title: "",
    file: null,
  });

  const [loading, setLoading] = useState(false);

  const isFormValid = formData.title.trim() !== "" && formData.file !== null;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) {
      toast.error("Please fill all fields");
      return;
    }

    const payload = new FormData();
    payload.append("title", formData.title);
    payload.append("noticeUpload", formData.file); // ✅ MUST match multer field name

    try {
      setLoading(true);
      await axios.post(`${import.meta.env.VITE_API_URL}/dashboard`, payload);
      toast.success("Notice uploaded successfully!");
      setFormData({ title: "", file: null });
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 px-4 py-10">
      <Toaster position="top-center" />

      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-10">
        <h1 className="text-3xl font-bold text-indigo-600 text-center">
          Admin Panel - Upload Notice
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="title"
            placeholder="Enter Notice Title"
            className="w-full p-3 border border-gray-300 rounded-xl"
            value={formData.title}
            onChange={handleChange}
          />

          <input
            type="file"
            name="file"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-xl"
          />
          {formData.file && (
            <p className="text-sm text-gray-500">
              Selected: <strong>{formData.file.name}</strong>
            </p>
          )}

          <button
            type="submit"
            disabled={!isFormValid || loading}
            className="mt-6 w-full flex justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl disabled:opacity-50"
          >
            {loading ? (
              <>
                <FiUploadCloud className="animate-spin" size={20} />
                Uploading...
              </>
            ) : (
              <>
                <FiUploadCloud size={20} />
                Upload Notice
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
