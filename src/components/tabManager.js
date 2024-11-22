import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/activeSlice";
import InvoicesTab from "./tabs/invoiceTab";
import ProductsTab from "./tabs/productsTab";
import CustomersTab from "./tabs/customersTab";
import Button from "./button"; 
import "../styles/tabManager.css"; 


const TabManager = () => {

  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.active.activeTab);

  // Function to change the active tab
  const handleTabClick = (tab) => {
    dispatch(setActiveTab(tab));
  };

  return (
    <div className="tab-container">
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
