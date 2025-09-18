import React from "react";
import Hero from "../../Components/Hero/Hero";
import CompanyName from "../../Components/CompanyName/CompanyName";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const data= useLoaderData();
    console.log(data);
    
  return (
    <div className="bg-[#F6EBFA] overflow-x-hidden ">
      <Hero />
      <div className="w-[90%] mx-auto text-center">
        <CompanyName  data={data}/>
      </div>
    </div>
  );
};

export default Home;
