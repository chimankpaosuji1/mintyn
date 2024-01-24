import React from "react";
import DashboardHeader from "../components/Layout/DashboardHeader.jsx";
import DashboardSideBar from "../components/Layout/DashboardSideBar.jsx";
import DashboardHero from "../components/DashboardHero.jsx";


const DashboardPage = () => {

  return (
    <div className="dashboard">
      <DashboardHeader />
      <div className="flex justify-between w-full">
        
          <DashboardSideBar />
        
        <div className="w-full justify-center flex">
          <DashboardHero />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
