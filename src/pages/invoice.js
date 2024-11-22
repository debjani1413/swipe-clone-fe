import React from "react";
import Card from "../components/card";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Invoice = () => {
  const infoData = [
    {
      text: "Create invoices in 10 seconds & share them with customers",
      icon: faCheckCircle,
    },
    {
      text: "Discover templates that's perfect for your business",
      icon: faCheckCircle,
    },
    { text: "Keep track of your day-to-day transactions", icon: faCheckCircle },
  ];

  return (
    <Card
      header={"Creating invoices lightning fast."}
      subHeader={"Get a detailed summary of all your sales transactions."}
      buttonText={"Create your 1st invoice"}
      infoData={infoData}
    />
  );
};

export default Invoice;
