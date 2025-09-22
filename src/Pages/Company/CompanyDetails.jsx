import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FiMapPin, FiGlobe, FiBriefcase } from "react-icons/fi";
import Companies from "../Companies/Companies";
import { Helmet } from "react-helmet";

const CompanyDetails = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    fetch("/public/companies.json")
      .then(res => res.json())
      .then(data => {
        const selectedCompany = data.find(c => c.id.toString() === id.toString());
        setCompany(selectedCompany);
      });
  }, [id]);

  if (!company) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <p className="text-xl font-medium text-gray-600">Loading company details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-16 mt-16 bg-[#0A0C34] sm:px-6 lg:px-12">
      <Helmet>
  <title>Job Details | JobFinder</title>
  <meta name="description" content="View and manage your JobFinder profile." />
</Helmet>

      <div className="mx-auto space-y-12 max-w-7xl">
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 transform transition-transform duration-500 hover:scale-[1.01]">
          <div className="flex flex-col space-y-6 md:flex-row md:items-start md:space-y-0 md:space-x-10">
            <div className="flex-shrink-0">
              <img 
                src={company.logo} 
                alt={company.name} 
                className="object-contain w-24 h-24 p-2 border border-gray-200 shadow-lg bg-gray-50 rounded-xl" 
              />
            </div>
            <div className="flex-grow">
              <h1 className="text-4xl font-extrabold leading-tight text-gray-900">
                {company.name}
              </h1>
              <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
                <span className="flex items-center font-medium">
                  <FiMapPin className="w-4 h-4 mr-1 text-indigo-500" /> 
                  {company.location || "N/A"}
                </span>
                <a 
                  href={company.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center font-medium text-indigo-600 transition-colors duration-200 hover:text-indigo-800"
                >
                  <FiGlobe className="w-4 h-4 mr-1" /> 
                  Visit Website
                </a>
              </div>
            </div>
          </div>
          {company.description && (
            <div className="pt-6 mt-8 border-t border-gray-100">
              <h2 className="mb-3 text-xl font-bold text-gray-800">About {company.name}</h2>
              <p className="text-base leading-relaxed text-gray-700 whitespace-pre-wrap">
                {company.description}
              </p>
            </div>
          )}
        </div>
        <div>
          <h2 className="flex items-center mb-6 text-3xl font-extrabold text-white">
            <FiBriefcase className="w-6 h-6 mr-3 text-white" /> 
            Open Positions ({company.jobs?.length || 0})
          </h2>
          {company.jobs && company.jobs.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {company.jobs.map((job, index) => (
                <Companies key={job.id || index} job={job} />
              ))}
            </div>
          ) : (
            <div className="p-8 text-center bg-white shadow-md rounded-xl">
              <p className="text-lg text-gray-500">No open jobs listed at this time. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
