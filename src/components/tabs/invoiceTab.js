import React from "react";
import { useSelector } from "react-redux";
import Tab from "./tab";

const InvoicesTab = () => {
  const tableData = useSelector((state) => state.upload.tableData);

  // Define Create-specific columns
  const invoiceColumns = [
    { label: "Serial Number", key: "invoiceId" },
    { label: "Date", key: "date" },
    { label: "Customer Name", key: "customerName" },
    { label: "Product Name", key: "productName" },
    { label: "Qty", key: "Qty" },
    { label: "Unit Price", key: "unitPrice" },
    { label: "Tax", key: "Tax" },
    { label: "Amount", key: "Amount" },
    { label: "Total Amount", key: "totalamount" },
  ];

  // Transform table data for Create tab
  const invoiceTableData = tableData.map((item, index) => ({
    invoiceId: item.SerialNumber || index + 1,
    customerName: item.CustomerName,
    productName: item.ProductName,
    Qty: item.Quantity,
    unitPrice: item.UnitPrice,
    Tax: item.Tax,
    Amount: item.TotalAmount,
    totalamount: item.AmountPayable,
    date: item.Date,
  }));

  return (
    <Tab
      title={"Invoices"}
      buttonText={"Add Invoice"}
      columns={invoiceColumns}
      tabledata={invoiceTableData}
    />
  );
};

export default InvoicesTab;
