import React from 'react';
import { Link } from 'react-router-dom';

const FeaturesJobSingleCard = ({ job, bgColor }) => {
    const {
        id,
        bannerImage, 
        title,
        jobType, 
        location,
        salary,
    } = job;
    
    const daysLeftToApply = 5; 

    const HeartIcon = ({ isSaved }) => (
        <button
            className={`p-2 rounded-full transition duration-300 ease-in-out
            ${isSaved ? 'text-red-500 hover:bg-red-50' : 'text-gray-400 hover:text-red-500 hover:bg-gray-50'}`}
            title={isSaved ? "Remove from saved" : "Save job"}
            onClick={(e) => e.stopPropagation()}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 fill-current"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                />
            </svg>
        </button>
    );

    return (
        <Link
            to={`/jobs/${id}`}
            className={`p-6 transition-all duration-300 border border-gray-100 shadow-md cursor-pointer rounded-2xl hover:shadow-xl hover:scale-[1.01] w-[550px] flex-shrink-0 block ${bgColor || 'bg-white'}`}
        >
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                    <img
                        src={bannerImage}
                        alt={`${title} banner`}
                        className="object-cover p-1 mr-4 border border-gray-200 w-14 h-14 rounded-xl bg-gray-50"
                    />
                    <div>
                        <h3 className="text-xl font-extrabold leading-snug text-gray-900">{title}</h3>
                        <p className="text-sm text-gray-500 mt-0.5">
                             <span className="font-semibold text-gray-700">Company Name</span> • <span className="font-medium text-green-600">{jobType}</span>
                        </p>
                    </div>
                </div>
                <div className="flex items-center ml-2 space-x-1">
                    {job.isFeatured && ( 
                        <span className="p-1.5 text-lg text-yellow-600 bg-yellow-100 rounded-full" title="Featured Job">
                            ⚡
                        </span>
                    )}
                    <HeartIcon isSaved={job.isSaved} /> 
                </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-1 mb-4">
                <span className="flex items-center px-4 py-1.5 text-xs font-medium text-indigo-700 bg-indigo-100 rounded-full">
                    <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    {location}
                </span>
                <span className="flex items-center px-4 py-1.5 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                    {salary}
                </span>
                 <span className="flex items-center px-4 py-1.5 text-xs font-medium text-purple-700 bg-purple-100 rounded-full">
                    {jobType}
                </span>
            </div>
            <p className="pt-4 mt-4 text-sm text-gray-500 border-t border-gray-100">
                <span className="font-semibold text-gray-700">{daysLeftToApply}</span> days left  <button className='p-2 mr-2 btn'>Apply Now</button>
            </p>
        </Link>
    );
};

export default FeaturesJobSingleCard;