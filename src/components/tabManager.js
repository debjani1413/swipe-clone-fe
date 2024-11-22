import React, { useState } from "react";
import InvoicesTab from "./tabs/invoiceTab";
import ProductsTab from "./tabs/productsTab";
import CustomersTab from "./tabs/customersTab";
import Button from "./button"; // Import the Button component
import "../styles/tabManager.css"; // Add your own styling

const TabManager = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("invoice");

  // Function to change the active tab
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tab-container">
      {/* Tab navigation */}
      <div className="tabs">
        <Button
          text="Invoice"
          onClick={() => handleTabClick("invoice")}
          className={`tab ${activeTab === "invoice" ? "active" : ""}`}
        />
        <Button
          text="Products"
          onClick={() => handleTabClick("products")}
          className={`tab ${activeTab === "products" ? "active" : ""}`}
        />
        <Button
          text="Customers"
          onClick={() => handleTabClick("customers")}
          className={`tab ${activeTab === "customers" ? "active" : ""}`}
        />
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "invoice" && <InvoicesTab />}
        {activeTab === "products" && <ProductsTab />}
        {activeTab === "customers" && <CustomersTab />}
      </div>
    </div>
  );
};

export default TabManager;
