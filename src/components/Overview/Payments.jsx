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
      <div className="payment_data">
        <div className="type">
          <div className="tag">vw</div>
          <p>Apple Mac Book 15” 250 SSD 12GB</p>
        </div>
        <div className="price">$73430</div>
        <div className="transaction_no">1234567890</div>
        <div className="time">12:30</div>
        <div className="stat">
          <div className={`status ${status.toLowerCase()}`}>
            <div className="dot"></div>
            {status}
          </div>
          <MdKeyboardArrowDown />
        </div>
      </div>
    );
  };

  const PaymentSelection = () => {
    const [open, setOpen] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(true);

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const dismissDropdown = () => {
      setDropdownOpen(false);
    };

    document.body.addEventListener("click", dismissDropdown);

    return () => {
      document.body.removeEventListener("click", dismissDropdown);
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
      <div>
        <p className="mr-0 ml-0 mb-[10px] w-[40px] 1100px:mr-[10px] 1100px:ml-auto 1100px:mb-0">
          Show
        </p>
        <div
          className="w-[150px] relative h-[35px]"
          onClick={() => handleDropdown()}
        >
          <p className="w-full h-full py-[8px] px-[16px] bg-transparent border-[1px] border-[#DDE0E3] text-left rounded-[2px] flex items-center justify-between cursor-pointer">
            {payment}
            <MdKeyboardArrowDown size={15} color="primary" />
          </p>

          <ul
            className={`w-full bg-white shadow-sm absolute z-2 rounded-bl-[6px] rounded-br-[6px] top-0 right-0 transition-all ${
              dropdownOpen
                ? "visible pointer-events-all opacity-1 top-[35px]"
                : ""
            }`}
          >
            {selections.map((item) => (
              <li
                onClick={() => {
                  setPayment(item);
                }}
                className="w-full"
              >
                <button className="bg-transparent py-[8px] px-[16px] border-0 w-full text-left text-[#414042] hover:bg-[#f4f4f4]">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  return (
    <div className="w-full mt-[2rem]">
      <h2 className="text-[2rem] m-0 font-normal">Payments</h2>
      <div className="w-full my-[1rem] text-[0.9rem] flex flex-col 1100px:flex-row items-start 1100px:items-center pr-[100px] text-[#262626]">
        <span className="w-[65px] mr-0 1100px:mr-[10px] mb-[10px] 1100px:mb-0">
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
        <PaymentSelection />
      </div>
      <div className="table_wrap">
        {" "}
        <div className="payment_table">
          <div className="header">
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

      <div className="bottom">
        <p>Showing 1 to 10 of 500 entries</p>
        <div className="pagination">
          <div
            onClick={() => {
              setActive(1);
            }}
            className="prev"
          >
            Previous
          </div>
          <div className={`page ${active === 1 ? "active" : ""}`}>1</div>
          <div className={`page ${active === 2 ? "active" : ""}`}>2</div>
          <div
            onClick={() => {
              setActive(2);
            }}
            className="next"
          >
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
