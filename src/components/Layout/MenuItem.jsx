import React from 'react'
import {
  Overview,
  AllPayments,
  ReconcilledPayments,
  UnReconcilledPayments,
  ManualSettlements,
  AllOrders,
  PendingOrders,
  ReconcilledOrders,
  MerchantProfile,
} from "../../Assests/svg";

export const mainItem = [
  {name: "Overview", icon: <Overview/>}
]
export const paymentItem = [
  { name: "All Payments", icon: <AllPayments/> },
  { name: "Reconciled Payments", icon: <ReconcilledPayments/> },
  { name: "Un - Reconciled Payments", icon: <UnReconcilledPayments/> },
  { name: "Manual Settlement", icon: <ManualSettlements/> },
];

 export const orderItem = [
   { name: "All Orders", icon: <AllOrders/> },
   { name: "Pending Orders", icon: <PendingOrders/> },
   { name: "Reconciled Orders", icon: <ReconcilledOrders/> },
 ];

 export const profileItem = [{ name: "Merchant Profile", icon: <MerchantProfile/> },];

 export const InfoCards = [
   { name: "Daily Transaction Volume", value: "2,342" },
   { name: "Daily Transaction Value", value: "₦4,000,000" },
   { name: "Total Transaction Volume", value: "452,000" },
   { name: "Total Transaction Value", value: "₦4,000,000" },
 ];