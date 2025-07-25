import React, { useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

export default function AdminHomePage() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [pendingImages, setPendingImages] = useState([]);
  const [gallery, setGallery] = useState([]);

  const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/<your-cloud-name>/image/upload";
  const UPLOAD_PRESET = "<your-upload-preset>"; // From Cloudinary settings

  const handleUpload = async () => {
    if (!file || !title) {
      toast.error("Please enter title and choose an image.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      toast.loading("Uploading image...");
      const response = await axios.post(CLOUDINARY_URL, formData);
      toast.dismiss();
      toast.success("Image uploaded successfully");

      setPendingImages((prev) => [
        ...prev,
        { title, url: response.data.secure_url },
      ]);

      setTitle("");
      setFile(null);
    } catch (error) {
      toast.dismiss();
      toast.error("Upload failed");
      console.error(error);
    }
  };

  const handleVerify = (img) => {
    setGallery([...gallery, img]);
    setPendingImages(pendingImages.filter((item) => item.url !== img.url));
    toast.success("Image verified and moved to gallery.");
  };

  const handleCancel = (img) => {
    setPendingImages(pendingImages.filter((item) => item.url !== img.url));
    toast("Image removed.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 px-4 py-10">
      <Toaster position="top-center" />
      
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-10">
        <h1 className="text-3xl font-bold text-indigo-600 text-center">Admin Panel - Photo Upload</h1>

        {/* Upload Section */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter Image Title"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            className="w-full p-2"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button
            onClick={handleUpload}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition"
          >
            Upload Photo
          </button>
        </div>

        {/* Pending Verification Section */}
        {pendingImages.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Uploaded Photos for Verification</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {pendingImages.map((img, idx) => (
                <div
                  key={idx}
                  className="bg-gray-100 p-4 rounded-xl shadow flex flex-col items-center"
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-48 object-cover rounded-xl mb-2"
                  />
                  <p className="font-semibold">{img.title}</p>
                  <div className="flex gap-4 mt-4">
                    <button
                      onClick={() => handleVerify(img)}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                      Verify
                    </button>
                    <button
                      onClick={() => handleCancel(img)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery Section */}
        {gallery.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Verified Gallery</h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {gallery.map((img, idx) => (
                <div key={idx} className="rounded-xl shadow-lg overflow-hidden">
                  <img src={img.url} alt={img.title} className="object-cover w-full h-40" />
                  <div className="p-2 bg-white text-center font-medium">{img.title}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
