import { floor } from "./placeholder-data";

const mongoose = require("mongoose");



export async function fetchCardData() {
  const {
    totalPaidInvoices,
    totalPendingInvoices,
    numberOfCustomers,
    numberOfInvoices,
  } = {
    totalPaidInvoices: 100,
    totalPendingInvoices: 100,
    numberOfCustomers: 5,
    numberOfInvoices: 10,
  };

  return {
    totalPaidInvoices,
    totalPendingInvoices,
    numberOfCustomers,
    numberOfInvoices,
  };
}


export async function getDetailsPerFloor(floorNumber: string){
  const floorPPl =floor.find(item => item.floor === floorNumber);
  floorPPl?.tenants.map(item)
  return 
}