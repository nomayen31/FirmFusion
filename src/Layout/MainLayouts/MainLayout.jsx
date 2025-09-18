import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
