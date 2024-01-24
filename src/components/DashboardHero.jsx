import React from 'react'
import Transactions from "../components/Overview/Transactions.jsx"
import Charts from "../components/Overview/Charts.jsx"
import Payments from "../components/Overview/Payments.jsx"

const DashboardHero = () => {
  return (
    <div className="w-[100%] p-[1rem]">
      <Transactions />
      <Charts />
      <Payments />
    </div>
  )
}

export default DashboardHero