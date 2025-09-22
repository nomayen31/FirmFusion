import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiMapPin, FiBriefcase, FiDollarSign, FiClock, FiCheckCircle } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";

const JobDetails = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/public/companies.json")
      .then((res) => res.json())
      .then((companies) => {
        let selectedJob = null;
        for (const company of companies) {
          selectedJob = company.jobs?.find((job) => job.id.toString() === jobId.toString());
          if (selectedJob) {
            selectedJob.companyName = company.name;
            selectedJob.companyLogo = company.logo;
            break;
          }
        }
        setJob(selectedJob);
      });
  }, [jobId]);

  if (!job) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <p className="text-xl font-medium text-gray-600">Loading job details...</p>
      </div>
    );
  }

  const handleApply = () => {
    toast.success(`Your application for ${job.title} at ${job.companyName} was successful!`);
    setTimeout(() => {
      navigate("/");
    }, 2000); // wait 2 seconds before redirect
  };

  return (
    <div className="min-h-screen px-4 py-16 bg-[#0A0C34] sm:px-6 lg:px-8">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="mx-auto mt-12 max-w-7xl">
        {job.bannerImage && (
          <div className="mb-8 overflow-hidden shadow-xl rounded-2xl">
            <img
              src={job.bannerImage}
              alt={job.title}
              className="object-cover w-full h-48 md:h-64"
            />
          </div>
        )}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div className="p-6 bg-white border border-gray-100 shadow-lg sm:p-8 rounded-xl">
              <div className="flex items-center mb-4 space-x-4">
                {job.companyLogo && (
                  <img
                    src={job.companyLogo}
                    alt={job.companyName}
                    className="object-contain w-12 h-12 p-1 border border-gray-200 rounded-lg"
                  />
                )}
                <p className="text-lg font-semibold text-gray-600">{job.companyName}</p>
              </div>
              <h1 className="text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
                {job.title}
              </h1>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="flex items-center px-3 py-1 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full">
                  <FiClock className="w-4 h-4 mr-1" /> Full-Time
                </span>
                <span className="flex items-center px-3 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full">
                  <FiDollarSign className="w-4 h-4 mr-1" /> {job.salary}
                </span>
                <span className="flex items-center px-3 py-1 text-sm font-medium text-yellow-700 bg-yellow-100 rounded-full">
                  <FiMapPin className="w-4 h-4 mr-1" /> {job.location}
                </span>
              </div>
            </div>

            <div className="p-6 bg-white border border-gray-100 shadow-lg sm:p-8 rounded-xl">
              <h2 className="pb-2 mb-4 text-2xl font-bold text-gray-900 border-b">Job Summary</h2>
              <p className="leading-relaxed text-gray-700 whitespace-pre-wrap">{job.description}</p>
            </div>

            {job.requirements && job.requirements.length > 0 && (
              <div className="p-6 bg-white border border-gray-100 shadow-lg sm:p-8 rounded-xl">
                <h2 className="pb-2 mb-4 text-2xl font-bold text-gray-900 border-b">Key Requirements</h2>
                <ul className="space-y-3 text-gray-700">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheckCircle className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-green-500" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky space-y-6 top-10">
              <div className="p-6 bg-white border border-indigo-200 shadow-2xl rounded-xl">
                <button
                  onClick={handleApply}
                  className="w-full px-6 py-4 text-lg font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-[1.02] shadow-xl"
                >
                  Apply Now
                </button>
                <p className="mt-4 text-sm text-center text-gray-500">Takes less than 5 minutes to apply.</p>
              </div>

              <div className="p-6 bg-white border border-gray-100 shadow-lg rounded-xl">
                <h3 className="pb-2 mb-4 text-xl font-bold text-gray-800 border-b">Key Facts</h3>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between text-gray-700">
                    <span className="flex items-center font-medium">
                      <FiBriefcase className="mr-2 text-indigo-500" /> Job Type
                    </span>
                    <span className="font-semibold text-gray-900">{job.jobType || "N/A"}</span>
                  </li>
                  <li className="flex items-center justify-between text-gray-700">
                    <span className="flex items-center font-medium">
                      <FiDollarSign className="mr-2 text-indigo-500" /> Salary Range
                    </span>
                    <span className="font-semibold text-gray-900">{job.salary || "Negotiable"}</span>
                  </li>
                  <li className="flex items-center justify-between text-gray-700">
                    <span className="flex items-center font-medium">
                      <FiMapPin className="mr-2 text-indigo-500" /> Location
                    </span>
                    <span className="font-semibold text-gray-900">{job.location || "Remote"}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
