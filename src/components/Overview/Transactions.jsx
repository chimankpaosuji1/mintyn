import React from 'react'
import { Statistics } from "../../Assests/svg";
const Transactions = () => {
  return (
    <div className="flex flex-col w-full 1100px:flex-row">
      <div className="py-[1.2rem] px-[0.9rem] bg-white border-[1px] border-[#eef8fd] flex-1 mr-[0.7rem] rounded-[2px] gap-[0.8rem] hover:shadow-xl last-of-type:mr-0 mb-[0.8rem] 1100px:mb-0">
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[0.8rem] text-[#787C90] whitespace-nowrap">
              Daily Transaction Volume
            </span>
            <span className="text-[1.3rem] text-[#262626] mt-[0.2rem] whitespace-nowrap">
              2,342
            </span>
          </div>
          <div>
            <Statistics />
          </div>
        </div>
      </div>
      <div className="py-[1.2rem] px-[0.9rem] bg-white border-[1px] border-[#eef8fd] flex-1 mr-[0.7rem] rounded-[2px] gap-[0.8rem] hover:shadow-xl last-of-type:mr-0 mb-[0.8rem] 1100px:mb-0">
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[0.8rem] text-[#787C90] whitespace-nowrap">
              Daily Transaction Volume
            </span>
            <span className="text-[1.3rem] text-[#262626] mt-[0.2rem] whitespace-nowrap">
              2,342
            </span>
          </div>
          <div>
            <Statistics />
          </div>
        </div>
      </div>
      <div className="py-[1.2rem] px-[0.9rem] bg-white border-[1px] border-[#eef8fd] flex-1 mr-[0.7rem] rounded-[2px] gap-[0.8rem] hover:shadow-xl last-of-type:mr-0 mb-[0.8rem] 1100px:mb-0">
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[0.8rem] text-[#787C90] whitespace-nowrap">
              Daily Transaction Volume
            </span>
            <span className="text-[1.3rem] text-[#262626] mt-[0.2rem] whitespace-nowrap">
              2,342
            </span>
          </div>
          <div>
            <Statistics />
          </div>
        </div>
      </div>
      <div className="py-[1.2rem] px-[0.9rem] bg-white border-[1px] border-[#eef8fd] flex-1 mr-[0.7rem] rounded-[2px] gap-[0.8rem] hover:shadow-xl last-of-type:mr-0 mb-[0.8rem] 1100px:mb-0">
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[0.8rem] text-[#787C90] whitespace-nowrap">
              Daily Transaction Volume
            </span>
            <span className="text-[1.3rem] text-[#262626] mt-[0.2rem] whitespace-nowrap">
              2,342
            </span>
          </div>
          <div>
            <Statistics />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions
