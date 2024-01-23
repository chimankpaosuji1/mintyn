import React from "react";
import DashboardHeader from "../components/Layout/DashboardHeader/DashboardHeader.jsx";
import DashboardSideBar from "../components/Layout/DashboardSideBar/DashboardSideBar.jsx";
import DashboardHero from "../components/DashboardHero/DashboardHero.jsx";


const DashboardPage = () => {

  return (
    <div className="dashboard">
      <DashboardHeader />
      <div className="flex justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSideBar active={9} />
        </div>
        <div className="w-full justify-center flex">
          <DashboardHero />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
