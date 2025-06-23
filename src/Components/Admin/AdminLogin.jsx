import React from 'react';

function AdminLogin() {
  return (
    <div className="w-full h-[500px] flex items-center justify-center  px-4">
      <div className="w-full max-w-md bg-gradient-to-r from-slate-100 to-slate-200 rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-extrabold text-center text-indigo-600 mb-8">
          Admin Login
        </h1>

        <div className="space-y-6">
          <input
            type="text"
            placeholder="Enter Username"
            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        <button
          className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-md transition transform hover:-translate-y-1 hover:shadow-lg text-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;
