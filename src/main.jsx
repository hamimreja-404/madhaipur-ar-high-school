import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout";
import Home from "./Components/Home/Home";
import Faculty from "./Components/Faculty/Faculty";
import Presidents from "./Components/Presidents/Presidents.jsx";
import Gallery from "./Components/Gallery/Gallery.jsx";
import AboutUs from "./Components/About/About.jsx";
import AdminLogin from "./Components/Admin/AdminLogin.jsx";
import PhotoShare from "./Components/Photo/photoShare.jsx";
import AdmissionPage from "./Components/Admission/Admission.jsx";
import Notice from "./Components/Notice/Notice.jsx";
import AcademicsPage from "./Components/Academics/Acadamics.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="Faculty" element={<Faculty />} />
      <Route path="presidents" element={<Presidents />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="photoShare" element={<PhotoShare />} />
      <Route path="admission" element={<AdmissionPage/>}/>
      <Route path="academics" element={<AcademicsPage/>}/>
      <Route path="notice" element={<Notice/>}/>
      <Route path="about" element={<AboutUs />} />
      <Route path="adminLogin" element={<AdminLogin />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
