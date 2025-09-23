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
import NotFound from "../Pages/NotFound/NotFound";
import CompanyLayout from "../Layout/CompanyLayout/CompanyLayout";
import CaseStudy from "../Pages/CaseStudy/CaseStudy";
import Blog from "../Pages/Blog/Blog";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import Contact from "../Pages/Contact/Contact";
import ForgotPassword from "../Pages/Auth/ForgotPassword";
import Loading from "../Components/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("/public/companies.json")
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />
      },
      {
          path:'/contact',
          element:<Contact/>
      }
      ,
      {
        path: "/companyList",
        element: <CompanyList />
      },
      {
        path: "/company/:id",
        element: (
          <ProtectedRoute>
            <CompanyDetails />
          </ProtectedRoute>
        ),
        loader: () => fetch("/public/companies.json"),
        hydrateFallbackElement:<Loading/>
      },
      {
        path: "/job/:jobId",
        element: (
          <ProtectedRoute>
            <JobDetails />
          </ProtectedRoute>
        ),
        hydrateFallbackElement:<Loading/>
      },
      {
        path: "/jobs/:jobId",
        element: (
          <ProtectedRoute>
            <JobDetails />
          </ProtectedRoute>
        ),
        hydrateFallbackElement:<Loading/>
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />
      },
      {
          path:'/auth/forgetPass',
          element:<ForgotPassword/>
      },
      {
        path: "/auth/register",
        element: <Register />
      },
      {
        path: "/auth/profileUpdate",
        element: (
          <ProtectedRoute>
            <ProfileUpdate />
          </ProtectedRoute>
        ),
        hydrateFallbackElement:<Loading/>
      },
      {
        path: "/auth/myProfile",
        element: (
          <ProtectedRoute>
            <MyProfile />
          </ProtectedRoute>
        ),
        hydrateFallbackElement:<Loading/>
      },
    ],
  },
  {
    path: "/case-study",
    element: <CompanyLayout />,
    children: [
      {
        index: true,
        element: <CaseStudy />,
        loader: () => fetch("/public/caseStudy.json"),
      }
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
