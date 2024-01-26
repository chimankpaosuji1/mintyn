import React, { useState } from "react";
import { mainItem, paymentItem, orderItem, profileItem } from "./MenuItem";
import styles from "../../styles/styles";

const DashboardSideBar = () => {
  const [active, setActive] = useState({ mainItem });
  return (
    <div className="hidden 1100px:visible 1100px:block 1100px:bg-white 1100px:min-w-[265px] 1100px:h-[100vh] 1100px:max-w-[300px] 1100px:overflow-hidden scroll-none">
      <div className="flex flex-col gap-[1rem] text-[#647787] text-[0.85rem] py-[1rem]  ">
        <div className="flex items-center justify-center">
          <button
            className={`${styles.button} active:bg-white active:text-[#27ae60] `}
          >
            GENERATE INVOICE
          </button>
        </div>

        <div>
          <div className="my-[0.7rem] mx-0">
            <h3 className="text-[1rem] mb-[7px] pl-[3rem]">Main</h3>
            <ul>
              {mainItem.map((item) => (
                <li
                  onClick={() => setActive(item.name)}
                  className={`p-[0.7rem] pl-[3rem] w-full flex items-center gap-[1rem] cursor-pointer hover:text-[#1875f0] ${
                    active === item.name
                      ? "bg-[#1875f0]/10 text-[#1875f0] border-l-8 border-[#1875f0]"
                      : ""
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="my-[0.8rem] mx-0">
            <h3 className="text-[1rem] mb-[7px] pl-[3rem]">Payments</h3>
            <ul>
              {paymentItem.map((item) => (
                <li
                  onClick={() => setActive(item.name)}
                  className={`p-[0.7rem] pl-[3rem] w-full flex items-center gap-[1rem] cursor-pointer hover:text-[#1875f0] ${
                    active === item.name
                      ? "bg-[#1875f0]/10 text-[#1875f0] border-l-8 border-[#1875f0]"
                      : ""
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="my-[0.8rem] mx-0">
            <h3 className="text-[1rem] mb-[7px] pl-[3rem]">Order</h3>
            <ul>
              {orderItem.map((item) => (
                <li
                  onClick={() => setActive(item.name)}
                  className={`p-[0.7rem] pl-[3rem] w-full flex items-center gap-[1rem] cursor-pointer hover:text-[#1875f0] ${
                    active === item.name
                      ? "bg-[#1875f0]/10 text-[#1875f0] border-l-8 border-[#1875f0]"
                      : ""
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="my-[0.8rem] mx-0">
            <ul>
              {profileItem.map((item) => (
                <li
                  onClick={() => setActive(item.name)}
                  className={`p-[0.7rem] pl-[3rem] w-full flex items-center gap-[1rem] cursor-pointer hover:text-[#1875f0] ${
                    active === item.name
                      ? "bg-[#1875f0]/10 text-[#1875f0] border-l-8 border-[#1875f0]"
                      : ""
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex py-[1rem] gap-[0.8rem]">
            <div className="p-[0.7rem] pl-[3rem] w-full flex items-center gap-[1rem] cursor-pointer hover:text-[#1875f0]">
              <p>Support</p>
            </div>
            <div className="p-[0.7rem] pl-[3rem] w-full flex items-center gap-[1rem] cursor-pointer hover:text-[#1875f0]">
              <p>FAQ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSideBar;
