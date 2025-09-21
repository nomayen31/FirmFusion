import React from "react";
import { Link } from "react-router-dom";
import { FiMapPin, FiBriefcase, FiDollarSign } from "react-icons/fi";

const Companies = ({ job }) => {
  const { 
    id,
    bannerImage, 
    title, 
    companyName, 
    jobType, 
    location, 
    salary, 
    description,
  } = job;

  // Fixed background color for the card
  const cardBg = "bg-white"; 

  return (
    // Card with a fixed white background, sharp border, and strong hover lift
    <div className={`p-6 border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group ${cardBg} text-gray-900 flex flex-col`}>
      
      <div className="flex items-start mb-5">
        <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 mr-4 overflow-hidden border border-gray-200 shadow-sm bg-gray-50 rounded-xl">
          <img 
            src={bannerImage} 
            alt={title} 
            className="object-contain w-14 h-14"
          />
        </div>
        
        {/* Job Title & Company Name */}
        <div className="flex-1">
          {/* Job Title: Set to black/very dark gray for strong contrast */}
          <h3 className="text-xl font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
            {title}
          </h3>
          {/* Company Name: Set to black/dark gray */}
          <p className="mt-1 text-sm text-gray-700">
            {companyName}
          </p>
        </div>
      </div>

      {/* Job Details: Location, Type, Salary as tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {/* Tags use a light gray background to stand out from the white card */}
        <span className="flex items-center px-3 py-1 text-xs font-medium text-gray-900 bg-gray-100 border border-gray-200 rounded-full">
          <FiMapPin className="w-3 h-3 mr-1 text-gray-500" /> {location}
        </span>
        <span className="flex items-center px-3 py-1 text-xs font-medium text-gray-900 bg-gray-100 border border-gray-200 rounded-full">
          <FiBriefcase className="w-3 h-3 mr-1 text-gray-500" /> {jobType}
        </span>
        <span className="flex items-center px-3 py-1 text-xs font-medium text-gray-900 bg-gray-100 border border-gray-200 rounded-full">
          <FiDollarSign className="w-3 h-3 mr-1 text-gray-500" /> {salary}
        </span>
      </div>

      {/* Description */}
      <p className="flex-grow mb-6 text-sm leading-relaxed text-gray-700 line-clamp-3">
        {description}
      </p>

      {/* See Details Button: Retains a color (Indigo) for the CTA to stand out */}
      <Link 
        to={`/job/${id}`} 
        className="w-full px-5 py-3 mt-auto text-sm font-semibold text-center text-white transition-colors duration-300 bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        View Details
      </Link>
    </div>
  );
};

export default Companies;