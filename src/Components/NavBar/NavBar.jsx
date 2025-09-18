import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/image/logo.png';
import header_sidebar from '../../../public/image/header_sidebar.webp';

const NavBar = () => {
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const navLinks = [
        { title: 'Home', to: '/' },
        { title: 'Jobs', to: '/jobs' },
        { title: 'Companies', to: '/companies' },
        { title: 'Case Study', to: '/case-study' },
        { title: 'Blog', to: '/blog' },
        { title: 'Contact', to: '/contact' },
    ];

    const toggleProfileMenu = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {/* Navigation Bar */}
            <nav className="fixed w-[90%] mt-8 mx-auto rounded-xl z-50 py-4 top-0 left-0 right-0 bg-neutral-900 shadow-lg transition-all duration-300">
                <div className="px-4 md:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <div className="flex items-center">
                            <img
                                src={logo}
                                alt="FirmFusion Logo"
                                className="h-12 w-auto rounded"
                            />
                        </div>

                        {/* Desktop Menu (hidden on mobile) */}
                        <div className="hidden lg:flex items-center space-x-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.title}
                                    to={link.to}
                                    className="text-white font-medium hover:text-blue-500 transition-colors duration-300"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>

                        {/* Action Buttons & Sidebar Toggle */}
                        <div className="flex items-center space-x-4">
                            {/* User Profile Dropdown (visible on desktop) */}
                            <div className="relative hidden lg:block">
                                <button
                                    onClick={toggleProfileMenu}
                                    className="w-10 h-10 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    <img
                                        src="https://placehold.co/40x40/2563EB/ffffff?text=U"
                                        alt="User Profile"
                                    />
                                </button>
                                {isProfileMenuOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-neutral-800 rounded-lg shadow-xl py-2 z-50">
                                        <Link
                                            to="/profile"
                                            className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-700 hover:text-white transition-colors duration-200"
                                        >
                                            Visit Profile
                                        </Link>
                                        <Link
                                            to="/update-profile"
                                            className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-700 hover:text-white transition-colors duration-200"
                                        >
                                            Update Your Profile
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Sign In Button */}
                            <Link to='/login' className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300 shadow-lg">
                                Sign In
                            </Link>

                            {/* Sidebar Toggle Button (visible on all sizes) */}
                            <button
                                onClick={toggleSidebar}
                                className="p-2 text-white rounded-full hover:bg-neutral-800 transition-colors duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Global Sidebar (Mobile & Desktop) */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-neutral-900 shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <button
                            onClick={toggleSidebar}
                            className="text-white p-2 hover:bg-blue-700 rounded-full transition-colors duration-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-white text-2xl font-bold mb-2">About Author</h3>
                            <p className="text-neutral-400">
                                FirmFusion is a smart job-finding platform that connects job seekers with the right opportunities and helps companies hire top talent faster. Discover jobs, apply easily, and build your career with confidence.
                            </p>
                        </div>

                        <img src={header_sidebar} alt="Office" className="rounded-lg shadow-lg w-full" />

                        <div>
                            <h3 className="text-white text-2xl font-bold mb-4">Contact Info</h3>
                            <ul className="space-y-2">
                                <li className="text-neutral-400 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.125l-2.732 1.366a11.05 11.05 0 006.103 6.103l1.366-2.732a1 1 0 011.125-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    +1800-001-658
                                </li>
                                <li className="text-neutral-400 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12h-1.5z" />
                                    </svg>
                                    info@firmfusion.com
                                </li>
                                <li className="text-neutral-400 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    5th Street, 21st Floor, New York, USA
                                </li>
                            </ul>
                        </div>

                        <div className="flex justify-center space-x-4 pt-4">
                            <a href="#" className="p-3 bg-neutral-800 rounded-full text-white hover:bg-blue-600 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.962 3.652 9.096 8.438 9.873v-6.985H7.21V12h3.228V9.395c0-3.19 1.947-4.938 4.795-4.938 1.366 0 2.54.102 2.885.148v3.155h-1.874c-1.503 0-1.795.715-1.795 1.766V12h3.535l-.57 3.238h-2.965v6.985A10 10 0 0022 12z" /></svg>
                            </a>
                            <a href="#" className="p-3 bg-neutral-800 rounded-full text-white hover:bg-blue-600 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.163c3.204 0 3.584.013 4.858.071 1.25.059 1.932.257 2.457.464.526.208.97.472 1.414.916.444.444.708.888.916 1.414.207.525.405 1.207.464 2.458.058 1.274.071 1.654.071 4.858s-.013 3.584-.071 4.858c-.059 1.25-.257 1.932-.464 2.457-.208.526-.472.97-.916 1.414-.444.444-.888.708-1.414.916-.525.207-1.207.405-2.457.464-1.274.058-1.654.071-4.858.071s-3.584-.013-4.858-.071c-1.25-.059-1.932-.257-2.457-.464-.526-.208-.472-.97-.916-1.414-.444-.444-.888-.708-1.414-.916-.525-.207-1.207-.405-2.457-.464C8.416 2.176 8.796 2.163 12 2.163zm0 2.138c-3.18 0-3.57.012-4.81.071-1.23.059-1.78.257-2.09.366-.31.109-.59.261-.85.521-.26.26-.412.54-.52.85-.109.31-.207.86-.366 2.09-.059 1.24-.071 1.63-.071 4.81s.012 3.57.071 4.81c.059 1.23.257 1.78.366 2.09.109.31.261.59.52.85.26.26.54.412.85.52.31.109.86.207 2.09.366 1.24.059 1.63.071 4.81.071s3.57-.012 4.81-.071c1.23-.059 1.78-.257 2.09-.366.31-.109.261-.59.52-.85.26-.26.412-.54.52-.85.109-.31.207-.86.366-2.09.059-1.24.071-1.63.071-4.81s-.012-3.57-.071-4.81c-.059-1.23-.257-1.78-.366-2.09-.109-.31-.261-.59-.52-.85-.26-.26-.54-.412-.85-.52-.31-.109-.86-.207-2.09-.366-1.24-.059-1.63-.071-4.81-.071zM12 15a3 3 0 110-6 3 3 0 010 6z" /></svg>
                            </a>
                            <a href="#" className="p-3 bg-neutral-800 rounded-full text-white hover:bg-blue-600 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.325 15.656h-2.732V11.2h2.732v6.456zM13.292 9.537h-.028A1.56 1.56 0 0111.758 8a1.562 1.562 0 011.534-1.537c.85 0 1.543.687 1.568 1.537a1.565 1.565 0 01-1.568 1.537zm6.708 8.119h-2.732V12.7c0-.85-.34-1.433-1.074-1.433-.585 0-.933.395-.933.916v5.473h-2.732s.036-6.495 0-7.149h2.732v1.176c.41-.61 1.103-1.484 2.457-1.484 1.79 0 3.16 1.13 3.16 3.738v3.72z" /></svg>
                            </a>
                            <a href="#" className="p-3 bg-neutral-800 rounded-full text-white hover:bg-blue-600 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3 8h-2v3h2v-3zm-3-2V7h2v1h-2z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
