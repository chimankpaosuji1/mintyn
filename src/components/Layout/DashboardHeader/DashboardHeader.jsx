import React, { useState } from 'react'
import { CiSearch, CiBellOn, CiMenuBurger  } from "react-icons/ci";
import ProfileImage from "../../../Assests/img/profileimage.png";
import { IoMdClose } from "react-icons/io";


const DashboardHeader = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);

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
            <div className="flex items-center justify-between gap-2 mr-10">
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
                  className="w-[30px] rounded-[50%] mr-2"
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

        { open && (
          <div className={`fixed w-full bg-[#0000005f] h-full top-30 left-0`}>
            <div className="fixed w-[70%] bg-[#fff] h-screen top-30 left-0 z-10"></div>
          </div>
        )}
      </div>
    </>
  );
}

export default DashboardHeader