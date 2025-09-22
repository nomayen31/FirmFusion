import React from "react";
import { FiArrowUpRight, FiMapPin, FiGlobe } from "react-icons/fi"; // Added FiGlobe for the website link
import { Link } from "react-router-dom";

const CompanyCard = ({ data }) => {
  const { name, logo, location, website, id } = data;

  return (
    <Link 
      to={`/company/${id}`} 
      className="relative block w-[280px] h-[320px] cursor-pointer group"
    >
      <div className="absolute inset-0 w-full h-full transition-all duration-500 scale-95 bg-gray-200 rounded-xl group-hover:scale-100 group-hover:shadow-xl"></div>
      
      <div 
        className="relative z-10 flex flex-col justify-between w-full h-full p-6 transition-all duration-500 bg-white border border-gray-100 shadow-lg rounded-xl group-hover:-translate-y-2 group-hover:shadow-2xl"
      >
        
        <div className="flex flex-col items-center flex-grow">
          <div className="p-3 mb-4 bg-white border border-gray-100 rounded-lg shadow-inner">
            <img
              src={logo}
              alt={name}
              className="w-[100px] h-[60px] object-contain"
            />
          </div>
          <h2 className="mb-1 text-xl font-bold text-center text-gray-800 transition-colors duration-300 group-hover:text-indigo-600">
            {name}
          </h2>
          <p className="flex items-center text-sm font-medium text-gray-500">
            <FiMapPin className="mr-1 text-xs" />
            {location}
          </p>
        </div>
        <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100">
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-2 text-sm font-semibold text-gray-600 transition-all duration-300 bg-gray-100 rounded-full hover:bg-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <FiGlobe size={18} />
          </a>
          <span className="flex items-center space-x-2 text-sm font-semibold text-indigo-600 transition-all duration-300">
            <span>See All Jobs</span>
            <FiArrowUpRight size={18} className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CompanyCard;