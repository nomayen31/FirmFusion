import React from "react";
import CompanyCard from "../CompanyCard/CompanyCard";

const CompanyList = ({ data }) => {

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

      
      </div>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-12">
  {Array.isArray(data) && data.length > 0 ? (
    data.map((company) => <CompanyCard key={company.id} data={company} />)
  ) : (
    <p className="w-full text-center text-white">No companies available.</p>
  )}
</div>

    </section>
  );
};

export default CompanyList;
