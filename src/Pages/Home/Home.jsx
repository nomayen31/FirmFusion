import React from "react";
import { Helmet } from "react-helmet-async";

import CompanyName from "../../Components/CompanyName/CompanyName";
import { useLoaderData } from "react-router-dom";
import FeaturesJobs from "../../Components/FeaturesJobs/FeaturesJobs";
import CompanyList from "../../Components/CompanyList/CompanyList";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";
import Hero from "../../Components/Hero/Hero";

const Home = () => {
    const data= useLoaderData();
  return (
    <div className="bg-[#0A0C34] overflow-x-hidden ">
      <Helmet>
        <title> Home | JobFinder</title>
        <meta name="description" content="Find your dream job with JobFinder!" />
      </Helmet>
      <Hero/>
      <div className="w-[90%] mx-auto text-center">
        <CompanyName  data={data}/>
        <FeaturesJobs data={data}/>
       <CompanyList data={data}/>
       <TestimonialSection/>
      </div>
    </div>
  );
};

export default Home;
