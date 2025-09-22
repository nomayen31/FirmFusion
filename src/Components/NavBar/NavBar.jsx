import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import header_sidebar from "../../../public/image/header_sidebar.webp";
import { AuthContext } from "../../providers/AuthProvider";

const NavBar = () => {
  const { user, logout, auth } = useContext(AuthContext);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinks = [
    { title: "Home", to: "/" },
    { title: "Case Study", to: "/case-study" },
    { title: "Blog", to: "/blog" },
    { title: "Contact", to: "/contact" },
  ];

  const toggleProfileMenu = () => setIsProfileMenuOpen((v) => !v);
  const toggleSidebar = () => setIsSidebarOpen((v) => !v);

  const handleLogout = () => {
    logout(auth)
      .then(() => alert("You have successfully logged out!"))
      .catch(() => alert("An error occurred while logging out."));
  };

  const linkBase =
    "font-medium transition-colors duration-300";
  const linkActive =
    "text-indigo-300";
  const linkInactive =
    "text-white hover:text-indigo-200";

  const sidebarLinkBase =
    "block w-full rounded-lg px-4 py-3 text-left transition-colors duration-200";
  const sidebarLinkActive =
    "bg-neutral-800 text-indigo-300";
  const sidebarLinkInactive =
    "text-neutral-200 hover:bg-neutral-800 hover:text-white";

  return (
    <>
      <nav className="fixed w-[90%] mx-auto rounded-xl z-50 py-4 top-0 left-0 right-0 bg-[#0A0A0A] shadow-lg transition-all duration-300">
        <div className="px-4 md:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <NavLink to="/" className="select-none">
                <span className="text-2xl font-extrabold tracking-tight text-white md:text-3xl drop-shadow-sm">
                  <span className="uppercase">Firm</span>
                  <span className="uppercase opacity-90">Fusion</span>
                </span>
              </NavLink>
            </div>

            <div className="items-center hidden space-x-6 lg:flex">
              {navLinks.map((link) => (
                <NavLink
                  key={link.title}
                  to={link.to}
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? linkActive : linkInactive}`
                  }
                  onClick={() => setIsProfileMenuOpen(false)}
                >
                  {link.title}
                </NavLink>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              {user && (
                <span className="hidden font-semibold text-indigo-400 md:block">
                  Hi, {user.displayName || "User"}
                </span>
              )}

              {user ? (
                <div className="relative">
                  <button
                    onClick={toggleProfileMenu}
                    className="w-10 h-10 overflow-hidden rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <img
                      src={user?.photoURL || "https://i.pravatar.cc/300"}
                      alt="User Profile"
                      className="object-cover w-full h-full"
                    />
                  </button>

                  {isProfileMenuOpen && (
                    <div className="absolute right-0 z-50 w-48 py-2 mt-2 rounded-lg shadow-xl bg-neutral-800">
                      <NavLink
                        to="/auth/myProfile"
                        className="block px-4 py-2 text-sm transition-colors duration-200 text-neutral-300 hover:bg-neutral-700 hover:text-white"
                        onClick={() => setIsProfileMenuOpen(false)}
                      >
                        Visit Profile
                      </NavLink>
                      <NavLink
                        to="/auth/profileUpdate"
                        className="block px-4 py-2 text-sm transition-colors duration-200 text-neutral-300 hover:bg-neutral-700 hover:text-white"
                        onClick={() => setIsProfileMenuOpen(false)}
                      >
                        Update Your Profile
                      </NavLink>
                      <button
                        onClick={handleLogout}
                        className="block w-full px-4 py-2 text-sm font-semibold text-left text-red-400 hover:bg-neutral-700 hover:text-red-300"
                      >
                        Log Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  to="/auth/login"
                  className="px-6 py-2 font-semibold text-white transition-colors duration-300 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700"
                >
                  Sign In
                </NavLink>
              )}

              <button
                onClick={toggleSidebar}
                className="p-2 text-white transition-colors duration-300 rounded-full hover:bg-neutral-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-neutral-900 shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <button
              onClick={toggleSidebar}
              className="p-2 text-white transition-colors duration-300 rounded-full hover:bg-blue-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-2xl font-bold text-white">About Author</h3>
              <p className="text-neutral-400">
                FirmFusion is a smart job-finding platform that connects job seekers with the right opportunities and helps companies hire top talent faster. Discover jobs, apply easily, and build your career with confidence.
              </p>
            </div>

            <img src={header_sidebar} alt="Office" className="w-full rounded-lg shadow-lg" />

            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">Quick Links</h3>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.title}
                    to={link.to}
                    className={({ isActive }) =>
                      `${sidebarLinkBase} ${isActive ? sidebarLinkActive : sidebarLinkInactive}`
                    }
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {link.title}
                  </NavLink>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">Contact Info</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-neutral-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.125l-2.732 1.366a11.05 11.05 0 006.103 6.103l1.366-2.732a1 1 0 011.125-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1800-001-658
                </li>
                <li className="flex items-center text-neutral-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12h-1.5z" />
                  </svg>
                  info@firmfusion.com
                </li>
                <li className="flex items-center text-neutral-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  5th Street, 21st Floor, New York, USA
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
