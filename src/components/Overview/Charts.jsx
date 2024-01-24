import ChartBox from "./ChartBox.jsx"

const Charts = () => {
  return (
    <div className="flex flex-col 1100px:flex-row w-full my-[1.5rem]">
      <ChartBox />
      <div className="ml-0 mt-[3px] flex-1 1100px:ml-[3px]">
        <div className="bg-white border-[1px] border-[#eef8fd] w-full pt-[1.3rem] pr-[3rem] pb-3 pl-[1rem] hover:shadow-xl [&>*:nth-child(2)]:mt-[3px] mb-3">
          <span className="text-[1rem] font-bold mb-[0.6rem] block text-[#262626]">
            Orders
          </span>
          <div className="h-[4px] relative bg-[#ffd700] rounded-[10px] mb-[0.6rem]">
            <span className="w-[80%] bg-[#27ae60] h-full block border-[1px] border-transparent rounded-tl-[20px] rounded-bl-[20px]"></span>
          </div>
          <div className="m-0 p-0">
            <p className="text-[1rem] mb-[0.5rem] text-[#262626] [&>*:last-child]:mb-0">
              Pending Orders: <span className="text-[#ffd700]">20</span>
            </p>
            <p>
              Reconcilled Orders: <span className="text-[#27ae60]">80</span>
            </p>
            <p>
              Total Orders: <span className="text-[#1875f0]">100</span>
            </p>
          </div>
        </div>

        <div className="bg-white border-[1px] border-[#eef8fd] w-full pt-[1.3rem] pr-[3rem] pb-3 pl-[1rem] hover:shadow-xl [&>*:nth-child(2)]:mt-[3px]">
          <span className="text-[1rem] font-bold mb-[0.6rem] block text-[#262626]">
            Payments
          </span>
          <div className="h-[4px] relative bg-[#ffd700] rounded-[10px] mb-[0.6rem]">
            <span className="w-[80%] bg-[#27ae60] h-full block border-[1px] border-transparent rounded-tl-[20px] rounded-bl-[20px]"></span>
          </div>
          <div className="m-0 p-0">
            <p className="text-[1rem] mb-[0.5rem] text-[#262626] [&>*:last-child]:mb-0">
              Un-reconcilled Payments:{" "}
              <span className="text-[#ffd700]">20</span>
            </p>
            <p>
              Reconcilled Payments: <span className="text-[#27ae60]">80</span>
            </p>
            <p>
              Total Payments: <span className="text-[#1875f0]">100</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charts
