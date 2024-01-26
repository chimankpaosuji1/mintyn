import React from 'react'
import Transactions from "../components/Overview/Transactions.jsx"
import Charts from "../components/Overview/Charts.jsx"
import Payments from "../components/Overview/Payments.jsx"

const DashboardHero = () => {
  return (
    <div className="w-full flex-1 bg-[#f7f8fa] p-[1rem] hero">
      <Transactions />
      <Charts />
      <Payments />
    </div>
  )
}

export default DashboardHero