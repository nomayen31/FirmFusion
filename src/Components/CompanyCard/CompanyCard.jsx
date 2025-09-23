import React from "react";
import { FiArrowUpRight, FiMapPin, FiGlobe } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const CompanyCard = ({ data }) => {
  const { name, logo, location, website, id } = data;
  const navigate = useNavigate();

  const handleSeeJobs = (e) => {
    e.stopPropagation(); // Prevent card navigation
    navigate(`/company/${id}/jobs`); // Redirect to company's jobs page
  };

  const handleWebsite = (e) => {
    e.stopPropagation(); // Prevent card navigation
    window.open(website, "_blank");
  };

  return (
    <div
      onClick={() => navigate(`/company/${id}`)}
      className="relative w-[280px] h-[320px] cursor-pointer group"
    >
      <div className="absolute inset-0 w-full h-full transition-all duration-500 scale-95 bg-gray-200 rounded-xl group-hover:scale-100 group-hover:shadow-xl"></div>

      <div className="relative z-10 flex flex-col justify-between w-full h-full p-6 transition-all duration-500 bg-white border border-gray-100 shadow-lg rounded-xl group-hover:-translate-y-2 group-hover:shadow-2xl">
        <div className="flex flex-col items-center flex-grow">
          <div className="p-3 mb-4 bg-white border border-gray-100 rounded-lg shadow-inner">
            <img src={logo} alt={name} className="w-[100px] h-[60px] object-contain" />
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
          {/* Website Button */}
          <div
            onClick={handleWebsite}
            className="flex items-center justify-center p-2 text-sm font-semibold text-gray-600 transition-all duration-300 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200"
          >
            <FiGlobe size={18} />
          </div>

          {/* See All Jobs */}
          <div
            onClick={handleSeeJobs}
            className="flex items-center space-x-2 text-sm font-semibold text-indigo-600 transition-all duration-300 cursor-pointer"
          >
            <span>See All Jobs</span>
            <FiArrowUpRight
              size={18}
              className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
