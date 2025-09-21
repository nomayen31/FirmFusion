import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayouts/MainLayout";
import Home from "../Pages/Home/Home";
import CompanyList from "../Components/CompanyList/CompanyList";
import CompanyDetails from "../Pages/Company/CompanyDetails";
import JobDetails from "../Pages/JobDetails/JobDetails";
import Login from "../Pages/Auth/Login";
import AuthLayout from "../Layout/AuthLayout/AuthLayout";
import Register from "../Pages/Auth/Register";
import ProfileUpdate from "../Pages/Profile/ProfileUpdate";
import MyProfile from "../Pages/Profile/MyProfile";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("/public/companies.json"),
      },
      {
        path: "/companyList",
        element: <CompanyList></CompanyList>,
      },
      {
        path: "/company/:id",
        element: (
          <ProtectedRoute>
            <CompanyDetails />,
          </ProtectedRoute>
        ),
        loader: () => fetch("/public/companies.json"),
      },
      {
        path: "/job/:jobId",
        element: (
          <ProtectedRoute>
            <JobDetails />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
      {
        path: "/auth/profileUpdate",
        element: (
          <ProtectedRoute>
            <ProfileUpdate />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/auth/myProfile",
        element: (
          <ProtectedRoute>
            <MyProfile />,
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
