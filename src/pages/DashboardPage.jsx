import React from "react";
import DashboardHeader from "../components/Layout/DashboardHeader.jsx";
import DashboardSideBar from "../components/Layout/DashboardSideBar.jsx";
import DashboardHero from "../components/DashboardHero.jsx";


const DashboardPage = () => {

  return (
    <div className="flex flex-col h-[100vh] w-[100vw] overflow-hidden">
      <DashboardHeader />
      <div className="flex flex-1">
        
          <DashboardSideBar />
        
         <DashboardHero />
      </div>
    </div>
  );
};

export default DashboardPage;
