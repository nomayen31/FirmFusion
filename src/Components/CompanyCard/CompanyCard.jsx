import React from "react";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi"; // Added FiMapPin for location
import { Link } from "react-router-dom";

const CompanyCard = ({ data }) => {
  const { name, logo, location, website, id } = data;

  return (
    <div className="relative w-[280px] h-[320px] cursor-pointer group">
      
     
      <div className="absolute inset-0 w-full h-full transition-all duration-500 scale-95 bg-gray-200 rounded-xl group-hover:scale-100 group-hover:shadow-xl"></div>
      
      
      <div 
        className="relative z-10 flex flex-col justify-between w-full h-full p-6 transition-all duration-500 bg-white border border-gray-100 shadow-lg rounded-xl group-hover:-translate-y-2 group-hover:shadow-2xl"
        onClick={() => window.open(website, "_blank")} // Make the whole card clickable
      >
        
        {/* Company Logo and Details */}
        <div className="flex flex-col items-center flex-grow">
          
          {/* Company Logo */}
          <div className="p-3 mb-4 bg-white border border-gray-100 rounded-lg shadow-inner">
            <img
              src={logo}
              alt={name}
              className="w-[100px] h-[60px] object-contain"
            />
          </div>

          {/* Company Name (Stronger typography) */}
          <h2 className="mb-1 text-xl font-bold text-center text-gray-800 transition-colors duration-300 group-hover:text-indigo-600">
            {name}
          </h2>

          {/* Location (Icon and Text) */}
          <p className="flex items-center text-sm font-medium text-gray-500">
            <FiMapPin className="mr-1 text-xs" />
            {location}
          </p>
        </div>
        
        <div className="pt-4 mt-4 border-t border-gray-100">
          <Link
            to={`/company/${id}`}
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 space-x-2 text-sm font-semibold text-indigo-600 transition-all duration-300 rounded-lg bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-700"
            onClick={(e) => e.stopPropagation()} 
          >
            <span>See All Jobs </span>
            <FiArrowUpRight size={18} className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;