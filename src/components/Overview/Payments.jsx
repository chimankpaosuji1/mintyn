import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const Payments = () => {
  const [active, setActive] = useState("1");
  const [payment, setPayment] = useState("All");
  const paymentStatus = [
    "Reconciled",
    "Pending",
    "Reconciled",
    "Reconciled",
    "Pending",
    "Un-reconciled",
    "Reconciled",
    "Un-reconciled",
    "Pending",
  ];

  const PaymentData = ({ status }) => {
    return (
      <div className="py-[1.2rem] px-[2rem] grid grid-cols-[8fr,3fr,3fr,2fr,4fr] items-center border-[1px] border-[#cccfd4] text-[#7f8fa4] text-[0.9rem] data">
        <div className="flex items-center gap-[1rem] text-[#414042]">
          <div className="py-[0.5rem] px-[0.6rem] rounded-[4rem] bg-[#7f8fa4] text-[#fff] text-[1rem]">vw</div>
          <p>Apple Mac Book 15” 250 SSD 12GB</p>
        </div>
        <div className="price">$73430</div>
        <div className="transaction_no">1234567890</div>
        <div className="time">12:30</div>
        <div className="flex justify-between items-center text-[#000]">
          <div className={`flex items-center gap-[0.6rem] w-[140px] border-[1px] border-[#cccfd4] rounded-[30px] p-[0.6rem] status ${status.toLowerCase()}`}>
            <div className="w-[10px] h-[10px] rounded-[1rem] spot"></div>
            {status}
          </div>
          <MdKeyboardArrowDown />
        </div>
      </div>
    );
  };

  const PaymentSelection = () => {
    const [open, setOpen] = useState(false);

     const handleDropdown = () => {
       setOpen(false);
     };

     useEffect(() => {
       const hideDropdown = () => {
         setOpen(true);
       };

       document.body.addEventListener("click", hideDropdown);

       return () => {
         document.body.removeEventListener("click", hideDropdown);
       };
     }, []);
    const selections = [
      "All",
      "Reconciled",
      "Un-reconciled",
      "Settled",
      "Un-settled",
    ];

    return (
      <div className="flex gap-[1rem] items-center relative payment_selection">
        <p>Show</p>
        <div
          className="w-[10rem] flex items-center justify-between text-[#414042] text-[0.8rem] cursor-pointer py-[0.4rem] px-[0.6rem] border-[1px] border-[#ced0da] rounded-[2px] select"
          onClick={() => handleDropdown()}
        >
          <p>{payment}</p>
          <MdKeyboardArrowDown color="primary" />
        </div>
        <ul
          className={`absolute right-0 top-[2.3rem] overflow-hidden invisible list-none bg-white rounded-[8px] shadow-sm selections ${
            open ? "visible showbox" : ""
          }`}
        >
          {selections.map((item) => (
            <li
              onClick={() => {
                setPayment(item);
              }}
              className="w-[10rem] p-[0.5rem] pl-[1rem] text-[0.9rem] text-[#414042] cursor-pointer hover:bg-[#f4f4f4]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <div className="w-full mt-[2rem]">
      <h2 className="text-[1.5rem] ml-[1rem] 770px:ml-0 770px:text-[2rem] m-0 font-normal">
        Payments
      </h2>
      <div className="w-full flex flex-col 1100px:flex-row 1100px:items-center items-start justify-start 1100px:justify-between info">
        <div className=" my-[1rem] text-[0.9rem] flex flex-col 1100px:flex-row items-start 1100px:items-center pr-[100px] text-[#262626]">
          <span className="w-[65px] mr-0 1100px:mr-[10px] mb-[10px] 1100px:mb-0 paymentHeader">
            Showing{" "}
          </span>
          <span className="w-[40px] flex items-center justify-center gap-1 mr-0 mb-[10px] 1100px:mb-0 1100px:mr-[13px]">
            <span>20</span> <MdKeyboardArrowDown />
          </span>
          <span className="w-[180px] mr-0 mb-[10px] 1100px:mr-[10px] 1100px:mb-0">
            out of 500 payments
          </span>
          <div className="1100px:w-[350px] relative border-b-[1px] border-[#DDE0E3] pb-[7px] h-[25px] mb-[10px] 1100px:mb-0 w-full mr-0 1100px:mr-[20px] flex gap-0.5">
            <label className="cursor-pointer flex items-center justify-center">
              <CiSearch size={15} />
            </label>
            <input
              type="text"
              name="search"
              id="payments-search"
              placeholder="Search payments"
              autoComplete="off"
              className="border-0 px-[20px] bg-transparent rounded-none placeholder:text-[#787878]"
            />
          </div>
        </div>
        <PaymentSelection />
      </div>
      <div className="overflow-x-scroll 770px:w-full 770px:overflow-x-none payment_table">
        {" "}
        <div className="mt-[2rem] tables">
          <div className="py-[1.2rem] px-[2rem] grid grid-cols-[8fr,3fr,3fr,2fr,4fr] items-center bg-[#eaeef0] text-[#7f8fa4] text-[0.9rem] header">
            <p>Item Type</p>
            <p>Price</p>
            <p>Transaction No</p>
            <p>Time</p>
            <p>Status </p>
          </div>

          {payment === "All"
            ? paymentStatus.map((item) => <PaymentData status={item} />)
            : paymentStatus
                .filter((pay) => pay === payment)
                .map((item) => <PaymentData status={item} />)}
        </div>
      </div>

      <div className="flex justify-between text-[0.9rem] p-[1rem] items-center">
        <p>Showing 1 to 10 of 500 entries</p>
        <div className="flex">
          <div
            onClick={() => {
              setActive(1);
            }}
            className="py-[0.4rem] px-[0.6rem] border-[1px] border-[#ced0da] cursor-pointer"
          >
            Previous
          </div>
          <div
            className={`py-[0.6rem] px-[0.8rem] text-[#979797] cursor-pointer ${
              active === 1 ? "bg-[#1875f0] text-[#fff]" : ""
            }`}
          >
            1
          </div>
          <div
            className={`py-[0.6rem] px-[0.8rem] text-[#979797] cursor-pointer ${
              active === 2 ? "bg-[#1875f0] text-[#fff]" : ""
            }`}
          >
            2
          </div>
          <div
            onClick={() => {
              setActive(2);
            }}
            className="py-[0.4rem] px-[0.6rem] border-[1px] border-[#ced0da] cursor-pointer"
          >
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
