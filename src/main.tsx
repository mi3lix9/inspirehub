import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./layouts/Layout.tsx";
import AboutUs from "./pages/about-us.tsx";
import ContactUs from "./pages/contact-us.tsx";
import EditProfile from "./pages/EditProfilePage.tsx";
import NewPassword from "./pages/NewPassword.tsx";
import Policy from "./components/Policy.tsx";
import ShowProfilePage from "./pages/ShowProfilePage.tsx";
import Login from "./pages/login.tsx";
import Register from "./pages/register.tsx";
import HomePage from "./pages/Home.tsx";
import AddProject from "./pages/UploadProject.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  // {
  //   path: "/ai",
  //   element: <AI />,
  // },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/edit-profile",
    element: <EditProfile />,
  },
  {
    path: "/forgot-password",
    element: <EditProfile />,
  },
  {
    path: "/new-password",
    element: <NewPassword />,
  },
  {
    path: "/policy",
    element: <Policy />,
  },
  {
    path: "/show-profile",
    element: <ShowProfilePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/upload-project",
    element: <AddProject />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);
