import React from "react";

const CompanyName = ({ data }) => {
  
  return (
    <section className="w-[90%] mx-auto py-12">
      

      <h2 className="mt-12 text-5xl font-extrabold text-white md:text-6xl">
        Companies using Go
      </h2>

      <div className="flex flex-wrap items-center justify-center mt-12 gap-x-10 gap-y-8">
        {data.map((logo, i) => (
          <div key={i} className="flex items-center justify-center">
            <img
              src={logo.logo}
              alt={`Logo of ${logo.name}`}
              title={logo.name}
              className="object-contain w-auto h-8 transition duration-300 transform md:h-10 opacity-70 hover:opacity-100 hover:scale-105 filter invert brightness-0 contrast-200"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyName;
