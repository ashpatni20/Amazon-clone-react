// import React from 'react'

import Carousel from "../components/Crousel";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SectionCard from "../components/SectionCard";
import { CurtainsData, ElectronicsData, MensData, WomenData } from "../utils/data";
import useFetch from "../utils/useProduct";

const HomePage = () => {
  // const [data, loadind, error] = useFetch();
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <Carousel />
      <div className="flex flex-wrap justify-around mt-[-250px] z-10 relative ">

      
      <SectionCard
        value={{
          StaticData: CurtainsData,
          heading: "Revamp your Style",
          productname: "Curtains",
        }}
      />

      <SectionCard
        value={{
          StaticData: ElectronicsData,
          heading: "Appliances for your home | Up to 55% off",
          productname: "Electronics",
        }}
      />
      <SectionCard
        value={{
          StaticData: MensData,
          heading: "Starting ₹99 | Amazon Brands & more",
          productname: "Mens Grooming",
        }}
      />
       <SectionCard
        value={{
          StaticData: WomenData,
          heading: "Starting ₹199 | Amazon Brands & more",
          productname: "Women Accessories",
        }}
      />
      </div>
      
    </div>
  );
};

export default HomePage;
