import React from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { chartData } from "../../static/dataSource";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const ChartBox = () => {
  return (
    <div className="w-full hover:shadow-xl 1100px:w-[65%] bg-[#fff] rounded-[2px]">
      <div className="h-[4rem] py-[1rem] px-[2rem] flex items-center justify-between flex-row 600px:flex-col 600px:mb-[1rem] mb-0">
        <span className="text-[1.2rem] font-[700] text-[#4f4f4f]">Today: 5, Aug 2018</span>
        <div className="flex items-center">
          <div className="flex items-center relative gap-[5px] mr-[2.5rem] w-full h-full bg-[#fff] border-[1px] border-[#dde0e3] rounded-[4px] text-[1rem] text-left text-[#7f8fa4] cursor-pointer hover:opacity-[0.7] py-[5px] px-[12px] ">
            <p>1 Jan - 1 Jun</p>
            <MdKeyboardArrowDown />
          </div>
          <div className="flex">
            <button>
              <MdKeyboardArrowLeft />
            </button>
            <button>
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
      </div>
      <ReactFC
        type="area2d"
        width="100%"
        height="265"
        dataFormat="json"
        dataSource={chartData}
        className="chartdata"
      />
    </div>
  );
};

export default ChartBox;
