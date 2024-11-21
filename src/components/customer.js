import React from 'react';
import Card from './card';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';

const Customer = () => {
    const infoData = [
        { text: "Know your customers better", icon: faCheckCircle },
        { text: "Organize your customer data effortlessly", icon: faCheckCircle },
        { text: "Get insights of your GST-verified customers", icon: faCheckCircle },
      ];

  return (
   <Card 
    header={"Managing customers has never been easier."}
    subHeader={"Effortlessly manage customer details, payments & invoices to ensure your business runs smoothly."} 
    buttonText= {"Start Adding Your Customers"}
    infoData={infoData}
    />
  )
}

export default Customer;
