import React from "react";
import { useSelector } from "react-redux";
import Tab from "./tab";

const CustomersTab = () => {
  const tableData = useSelector((state) => state.upload.tableData);

  // Define Create-specific columns
  const customerColumns = [
    { label: "Serial Number", key: "invoiceId" },
    { label: "Customer Name", key: "customerName" },
    { label: "Phone Number", key: "phnNumber" },
    { label: "Company Name", key: "cmpName" },
    { label: "Email", key: "email" },
    { label: "Amount", key: "Amount" },
    { label: "Total Amount", key: "totalamount" },
    { label: "Date", key: "date" },
  ];

  // Transform table data for Create tab
  const customerTableData = tableData.map((item,index) => {
    return {
    invoiceId: index+1 || "N/A",
    customerName: item.CustomerName,
    phnNumber: item.PhoneNumber,
    cmpName: item.CompanyName,
    email: item.Email,
    Amount: item.TotalAmount,
    totalamount: item.AmountPayable,
    date: item.Date,
    }
  });

  return (
    <Tab 
    title={"Customers"}
    buttonText={"Add Customers"}
    columns={customerColumns}
    tabledata={customerTableData}
    />
  );
};

export default CustomersTab;
