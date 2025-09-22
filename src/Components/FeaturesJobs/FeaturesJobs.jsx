import React from 'react';
import FeaturesJobSingleCard from '../featuresJobSingleCard/featuresJobSingleCard';

const FeaturesJobs = ({ data }) => {
  const softwareDev = data ? data.find(item => item.id === "1") : null;
  if (!softwareDev || !softwareDev.jobs || softwareDev.jobs.length === 0) {
    return (
      <section className="py-12 text-white bg-[#0e111a]">
        <div className="w-[90%] mx-auto">
          <h2 className="text-3xl font-bold text-gray-200">Software Development Jobs </h2>
          <p className="mt-4 text-lg text-gray-400">No jobs found in this category.</p>
        </div>
      </section>
    );
  }

  const cardBackgroundColors = [
    'bg-blue-50',    
    'bg-green-50',    
    'bg-yellow-50',   
    'bg-pink-50',     
    'bg-indigo-50',
  ];

  return (
    <section className="py-12 text-white ">
      <div className="w-[90%] mx-auto grid grid-cols-12 gap-12">
        <div className="col-span-12 mb-10 lg:col-span-7 lg:sticky lg:top-10 lg:self-start">
          <h2 className="text-3xl font-bold text-gray-200">
            {softwareDev.industry} Jobs 👨‍💻
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Explore the latest job openings in the **{softwareDev.industry}** industry. Find roles that match your skills and experience from top companies around the world.
          </p>
          <div className="flex flex-col mt-8 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <a
              href="/jobs/software-development" 
              className="px-6 py-3 text-lg font-semibold text-white transition duration-300 ease-in-out bg-indigo-600 rounded-full hover:bg-indigo-500"
            >
              Explore All Jobs
            </a>
            <a
              href="/contact" 
              className="px-6 py-3 text-lg font-semibold text-indigo-600 transition duration-300 ease-in-out border border-indigo-600 rounded-full hover:bg-indigo-100"
            >
              Can't Find a Job? Contact Us
            </a>
          </div>
          <div className="hidden mt-8 text-sm text-gray-500 lg:block">
            <p>Scroll down to see more jobs.</p>
          </div>
        </div>
        <div
          className="col-span-12 lg:col-span-5 max-h-[600px] overflow-y-auto scrollbar-hide"
        >
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-gray-400 uppercase">
            Latest Jobs
          </h3>
          <div className="flex flex-col space-y-6">
            {softwareDev.jobs.map((job, index) => (
              <FeaturesJobSingleCard
                job={job}
                key={job.id}  
                bgColor={cardBackgroundColors[index % cardBackgroundColors.length]} // Assign a background color
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesJobs;