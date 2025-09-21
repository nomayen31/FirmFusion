import React from 'react';
import FeaturesJobSingleCard from '../featuresJobSingleCard/featuresJobSingleCard'; 

const FeaturesJobs = ({ data }) => {
  // Find the software development industry data
  const softwareDev = data ? data.find(item => item.id === "1") : null;

  // Defensive check: If 'softwareDev' or 'softwareDev.jobs' is null/undefined/empty, return early.
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
    'bg-blue-50',     // Light blue
    'bg-green-50',    // Light green
    'bg-purple-50',   // Light purple
    'bg-yellow-50',   // Light yellow
    'bg-pink-50',     // Light pink
    'bg-indigo-50',   // Light indigo
  ];

  return (
    // Outer section with a dark background 
    <section className="py-12 text-white ">
      <div className="w-[90%] mx-auto grid grid-cols-12 gap-12">
        
        {/* Left Side: Information Panel (7 columns) */}
        <div className="col-span-12 mb-10 lg:col-span-7 lg:sticky lg:top-10 lg:self-start">
          <h2 className="text-3xl font-bold text-gray-200">
            {softwareDev.industry} Jobs 👨‍💻
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Explore the latest job openings in the **{softwareDev.industry}** industry. Find roles that match your skills and experience from top companies around the world.
          </p>
          <div className="hidden mt-8 text-sm text-gray-500 lg:block">
            <p>Scroll down to see more jobs.</p>
          </div>
        </div>

        {/* Right Side: Vertically Stacked & Scrolling Cards (5 columns) */}
        <div 
          // CRUCIAL CHANGE: Added 'scrollbar-hide' to remove the visible bar.
          // The 'pr-4' is no longer needed as the scrollbar isn't visible, 
          // but removing it tightens the layout. We will keep 'overflow-y-auto'.
          className="col-span-12 lg:col-span-5 max-h-[600px] overflow-y-auto scrollbar-hide" 
        >
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