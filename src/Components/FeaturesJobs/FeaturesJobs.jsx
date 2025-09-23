import React, { useState } from 'react';
import FeaturesJobSingleCard from '../featuresJobSingleCard/featuresJobSingleCard';
import { Link } from 'react-router-dom';

const BenefitCard = ({ icon: Icon, title, description, gradientColors }) => {
  return (
    <div className="flex items-start p-5 bg-white rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
      <div className={`flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0`}
           style={{ background: `linear-gradient(135deg, ${gradientColors[0]} 0%, ${gradientColors[1]} 100%)` }}>
        <Icon className="text-white w-7 h-7" />
      </div>
      <div className="ml-3">
        <h3 className="font-bold leading-snug text-gray-900 text-md">{title}</h3>
      </div>
    </div>
  );
};

const benefitsData = [
    {
      icon: (props) => ( // Example Lock Icon
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Instant access to work',
      gradientColors: ['#FF8C00', '#FFA500'] 
    },
    {
      icon: (props) => ( 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Choose when and where you work',
      gradientColors: ['#FFD700', '#FFFF00'] 
    },
    {
      icon: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 5h18M3 9h18m-1 8h-2.5l-2.5 2.5v-2.5h-5V9.5L8 12h2.5V9.5l-2.5-2.5zM7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2z" />
        </svg>
      ),
      title: 'Grow your skills',
      gradientColors: ['#9932CC', '#BA55D3'] 
    },
    {
      icon: (props) => ( // Example User Icon
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: 'Unlock desirable opportunities',
      gradientColors: ['#FF1493', '#FF69B4']
    },
    {
      icon: (props) => ( 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Choose when you get paid',
      gradientColors: ['#4682B4', '#5F9EA0'] 
    },
    {
      icon: (props) => ( 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h-3a2 2 0 01-2-2v-3a2 2 0 012-2h3m0 0l-3-3m3 3l3-3m-6 0a2 2 0 01-2-2V7a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3zm-6 4l-3 3m3-3l3 3m0-6a2 2 0 01-2-2V7a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3zm-6 0l-3 3m3-3l3 3m0-6a2 2 0 01-2-2V7a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3z" />
        </svg>
      ),
      title: 'Earn rewards and benefits',
      gradientColors: ['#20B2AA', '#48D1CC'] 
    },
  ];


const FeaturesJobs = ({ data }) => {
  console.log("features",data);
  
const softwareDev = Array.isArray(data) ? data.find(item => item.id === "1") : null;
  const initialJobsCount = 5;
  const [visibleJobs, setVisibleJobs] = useState(initialJobsCount);

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

  const handleShowMore = () => {
    setVisibleJobs(prevVisibleJobs => prevVisibleJobs + initialJobsCount);
  };

  const cardBackgroundColors = [
    'bg-blue-50',
    'bg-green-50',
    'bg-yellow-50',
    'bg-pink-50',
    'bg-indigo-50',
  ];

  return (
    <section className="py-12 text-white">
      <div className="w-[90%] mx-auto grid grid-cols-12 gap-12">

        <div className="col-span-12 mb-10 lg:col-span-7 lg:sticky lg:top-10 lg:self-start">
          <h2 className="mb-8 text-3xl font-bold text-gray-200">
            Why Choose Our Platform?
          </h2>
         <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
  {(Array.isArray(benefitsData) ? benefitsData : []).map((benefit, index) => (
    <BenefitCard
      key={index}
      icon={benefit.icon}
      title={benefit.title}
      gradientColors={benefit.gradientColors}
    />
  ))}
</div>

          <div className="flex justify-center mt-10">
            <Link
              to="/contact"
              className="px-8 py-4 text-lg font-semibold text-white transition duration-300 ease-in-out bg-purple-600 rounded-full shadow-lg hover:bg-purple-700"
            >
             Get Any Problem Contact Us
            </Link>
          </div>
        </div>
        
        <div className="col-span-12 lg:col-span-5 max-h-[600px] overflow-y-auto scrollbar-hide">
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-gray-400 uppercase">
            Latest Jobs
          </h3>
         <div className="flex flex-col space-y-6">
  {Array.isArray(softwareDev?.jobs)
    ? softwareDev.jobs.slice(0, visibleJobs).map((job, index) => (
        <FeaturesJobSingleCard
          job={job}
          key={job.id}
          bgColor={cardBackgroundColors[index % cardBackgroundColors.length]}
        />
      ))
    : null
  }
</div>


          {visibleJobs < softwareDev.jobs.length && (
            <div className="flex justify-center mt-6">
              <button
                onClick={handleShowMore}
                className="px-6 py-3 font-semibold text-indigo-600 transition duration-300 ease-in-out bg-white rounded-full hover:bg-gray-100"
              >
                Show More Jobs ({softwareDev.jobs.length - visibleJobs} left)
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturesJobs;