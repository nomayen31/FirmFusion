import React from "react";
import Hero from "../../Components/Hero/Hero";
import CompanyName from "../../Components/CompanyName/CompanyName";
import { useLoaderData } from "react-router-dom";
import FeaturesJobs from "../../Components/FeaturesJobs/FeaturesJobs";
import CompanyList from "../../Components/CompanyList/CompanyList";

const Home = () => {
    const data= useLoaderData();
    console.log(data);
    
  return (
    <div className="bg-[#0A0C34] overflow-x-hidden ">
      <Hero />
      <div className="w-[90%] mx-auto text-center">
        <CompanyName  data={data}/>
        <FeaturesJobs data={data}/>
       <CompanyList data={data}/>
      </div>
    </div>
  );
};

export default Home;
