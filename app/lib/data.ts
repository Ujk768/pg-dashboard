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
