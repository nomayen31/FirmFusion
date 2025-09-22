import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CompanyCard from "../CompanyCard/CompanyCard";

const CompanyList = ({ data }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <section className="w-full px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold tracking-widest text-white uppercase">
          OUR PARTNERS
        </p>
        <h2 className="mt-2 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
          <span className="text-white">Trusted Companies</span>
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-white">
          Explore companies from a variety of industries and find your next
          career-defining opportunity.
        </p>

        <button
          onClick={() =>
            navigate(`${location.state ? location.state : "/"}`)
          }
          className="px-6 py-2 mt-6 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700"
        >
          Go Back
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-12">
        {data.map((company) => (
          <CompanyCard key={company.id} data={company} />
        ))}
      </div>
    </section>
  );
};

export default CompanyList;
