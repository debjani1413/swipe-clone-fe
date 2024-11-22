import React from "react";
import { useSelector } from "react-redux";
import Tab from "./tab";

const ProductsTab = () => {
  // Redux states
  const tableData = useSelector((state) => state.upload.tableData);

  // Define Products-specific columns
  const productColumns = [
    { label: "Serial Number", key: "invoiceId" },
    { label: "Product Name", key: "productName" },
    { label: "Qty", key: "Qty" },
    { label: "Unit Price", key: "unitPrice" },
    { label: "Tax", key: "Tax" },
    { label: "Amount", key: "Amount" },
    { label: "Price with Tax", key: "PriceTax" },
  ];

  // Transform table data for Create tab
  const productTableData = tableData.map((item, index) => ({
    invoiceId: item.SerialNumber || index + 1,
    productName: item.ProductName,
    Qty: item.Quantity,
    unitPrice: item.UnitPrice,
    Tax: item.Tax,
    Amount: item.TotalAmount,
    PriceTax: item.AmountPayable,
  }));

  return (
    <Tab
      title={"Products"}
      buttonText={"Add Products"}
      columns={productColumns}
      tabledata={productTableData}
    />
  );
};

export default ProductsTab;
