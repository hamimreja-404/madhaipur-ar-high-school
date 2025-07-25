import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { FiLoader } from "react-icons/fi";

export default function AdminLogin() {
  const [formData, setFormData] = useState({
    mobileNumber: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        formData
      );
      toast.success("Login Successful!");

      setTimeout(() => {
        navigate("/dashboard"); // Change this to your actual dashboard route
      }, 1000);
    } catch (error) {
      console.error("Login Error:", error);
      toast.error(error?.response?.data?.message || "Login Failed. Try Again.");
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = formData.mobileNumber && formData.password;

  return (
    <div className="mt-10 flex items-center justify-center px-4">
      <Toaster position="top-center" />
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-extrabold text-center text-indigo-600 mb-8">
          Admin Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <input
              type="text"
              name="mobileNumber"
              placeholder="Enter Mobile Number"
              className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            disabled={!isFormValid || loading}
            className={`mt-8 w-full flex justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-md transition transform hover:-translate-y-1 hover:shadow-lg text-lg disabled:opacity-50`}
          >
            {loading ? (
              <>
                <FiLoader className="animate-spin" size={20} />
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
