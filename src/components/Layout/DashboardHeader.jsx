import React, { useState } from "react";
import { CiSearch, CiBellOn, CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import styles from "../../styles/styles";
import { mainItem, paymentItem, orderItem, profileItem } from "./MenuItem";
import ProfileImage from "../../Assests/img/profileimage.png";

const DashboardHeader = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState({ mainItem });

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  return (
    <>
      <div className="hidden 1100px:flex justify-between items-center 1100px:width-[100%] 1100px:p-3 1100px:text-[#647787] 1100px:bg-white z-10">
        <div className="flex items-center justify-center gap-10">
          <h2
            className="font-bold font-primary text-lg leading-9 tracking-
        tight sm:text-3xl sm:leading-10 md:text-5
        lg:text-6 xl:text-6 text-[#1875F0]"
          >
            TransMonitor
          </h2>
          <div className="flex items-center justify-start">
            <CiSearch />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[50px] w-full px-5"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-10 mr-20">
          <div>Support</div>
          <div>FAQ</div>
          <div className="relative cursor-pointer mr-[15px]">
            <CiBellOn size={30} />
            <span className="absolute right-0 top-0 rounded-full bg-[#1875F0] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
              8
            </span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="flex flex-col items-start justify-start">
              <span>Hello</span>
              <span>Oluwaleke Ojo</span>
            </div>
            <img
              src={ProfileImage}
              alt="avatar"
              className="w-[30px] rounded-[50%]"
            />
          </div>
        </div>
      </div>

      {/* mobile header */}
      <div className="w-full bg-white z-10 1100px:hidden">
        <div className="flex items-center justify-between  p-3 text-[#647787] w-full">
          <div>
            <h2
              className="font-bold font-primary text-lg leading-9 tracking-
        tight sm:text-3xl sm:leading-10 md:text-5
        lg:text-6 xl:text-6 text-[#1875F0]"
            >
              TransMonitor
            </h2>
          </div>
          <div>
            <div className="flex items-center justify-between gap-2 mr-1">
              <div className="relative cursor-pointer mr-[5px]">
                <CiBellOn size={25} />
                <span className="absolute right-0 top-0 rounded-full bg-[#1875F0] w-3 h-3 top right p-0 m-0 text-white font-mono text-[9px] leading-tight text-center">
                  8
                </span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <div className="flex flex-col items-start justify-start text-[12px]">
                  <span>Hello</span>
                  <span>Oluwaleke Ojo</span>
                </div>
                <img
                  src={ProfileImage}
                  alt="avatar"
                  className="w-[30px] rounded-[50%] mr-1"
                />
              </div>
              {open ? (
                <IoMdClose
                  onClick={() => setOpen(false)}
                  size={30}
                  className="menubar"
                />
              ) : (
                <CiMenuBurger
                  onClick={() => setOpen(true)}
                  size={30}
                  className="menubar"
                />
              )}
            </div>
          </div>
        </div>
        {/* header sidebar */}

        {open && (
          <div
            className={`fixed w-full bg-[#0000005f] h-full top-30 left-0 border-[2px]`}
          >
            <div className="fixed w-[300px] bg-[#fff] h-screen top-30 left-0 z-10 flex flex-col gap-[0.8rem] text-[#647787] text-[0.9rem] overflow-hidden position-absolute">
              <div className="flex items-center justify-center mt-5 gap-[1rem]">
                <button
                  className={`${styles.button} active:bg-white active:text-[#27ae60] `}
                >
                  GENERATE INVOICE
                </button>
              </div>

              <div>
                <div className="my-[0.8rem] mx-0">
                  <h3 className="text-[1rem] mb-[7px] pl-[3rem]">Main</h3>
                  <ul>
                    {mainItem.map((item) => (
                      <li
                        onClick={() => setActive(item.name)}
                        className={`p-[0.7rem] pl-[3rem] w-full flex items-center gap-[1rem] cursor-pointer hover:text-[#1875f0] ${
                          active === item.name ? "bg-[#1875f0]/10 text-[#1875f0] border-l-8 border-[#1875f0]" : ""
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
                          active === item.name ? "bg-[#1875f0]/10 text-[#1875f0] border-l-8 border-[#1875f0]" : ""
                        }`}
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div><div className="my-[0.8rem] mx-0">
                  <h3 className="text-[1rem] mb-[7px] pl-[3rem]">Order</h3>
                  <ul>
                    {orderItem.map((item) => (
                      <li
                        onClick={() => setActive(item.name)}
                        className={`p-[0.7rem] pl-[3rem] w-full flex items-center gap-[1rem] cursor-pointer hover:text-[#1875f0] ${
                          active === item.name ? "bg-[#1875f0]/10 text-[#1875f0] border-l-8 border-[#1875f0]" : ""
                        }`}
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div><div className="my-[0.8rem] mx-0">
                  <h3 className="text-[1rem] mb-[7px] pl-[3rem]"></h3>
                  <ul>
                    {profileItem.map((item) => (
                      <li
                        onClick={() => setActive(item.name)}
                        className={`p-[0.7rem] pl-[3rem] w-full flex items-center gap-[1rem] cursor-pointer hover:text-[#1875f0] ${
                          active === item.name ? "bg-[#1875f0]/10 text-[#1875f0] border-l-8 border-[#1875f0]" : ""
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
        )}
      </div>
    </>
  );
};

export default DashboardHeader;
