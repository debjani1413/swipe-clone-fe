import React from "react";
import Card from "../components/card";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Product = () => {
  const infoData = [
    {
      text: "Manage wholesaler, retailer, and manufacturer pricing by creating price lists",
      icon: faCheckCircle,
    },
    {
      text: "Select the specific price list from the dropdown while creating an invoice to apply",
      icon: faCheckCircle,
    },
  ];

  return (
    <Card
      header={"Create and save multiple prices for the same product."}
      subHeader={"Set different prices for one item specific to the customer."}
      buttonText={"Create your 1st Product"}
      infoData={infoData}
    />
  );
};

export default Product;
