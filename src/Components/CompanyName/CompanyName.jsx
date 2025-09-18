import React from 'react';

const CompanyName = ({ data }) => {
  console.log("data", data);

  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 md:px-12 lg:px-24 ">
      <div className="text-center mb-16">
        <h2 className="text-8xl font-extrabold text-blue-950 tracking-tight">Companies using Go 🚀 </h2>
        <p className="mt-4 text-xl text-black max-w-2xl">
          Organizations in every industry use Go to power their software and services
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {data.map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-full h-32 p-4 bg-gray-800 border border-gray-700 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:border-blue-500"
          >
            <img
              src={logo.logo}
              alt={logo.name}
              className="max-h-full w-auto max-w-[80%] opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyName;