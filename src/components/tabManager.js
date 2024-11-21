// import React, { useState } from 'react';
// import InvoicesTab from './invoiceTab';
// import ProductsTab from './productsTab';
// import CustomersTab from './customersTab';
// import '../styles/tabManager.css'; // Add your own styling

// const TabManager = () => {
//   // State to manage the active tab
//   const [activeTab, setActiveTab] = useState('invoice'); 

//   // Function to change the active tab
//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="tab-container">
//       {/* Tab navigation */}
//       <div className="tabs">
//         <button
//           className={`tab ${activeTab === 'invoice' ? 'active' : ''}`}
//           onClick={() => handleTabClick('invoice')}
//         >
//           Invoice
//         </button>
//         <button
//           className={`tab ${activeTab === 'products' ? 'active' : ''}`}
//           onClick={() => handleTabClick('products')}
//         >
//           Products
//         </button>
//         <button
//           className={`tab ${activeTab === 'customers' ? 'active' : ''}`}
//           onClick={() => handleTabClick('customers')}
//         >
//           Customers
//         </button>
//       </div>

//       {/* Tab Content */}
//       <div className="tab-content">
//         {activeTab === 'invoice' && <InvoicesTab />}
//         {activeTab === 'products' && <ProductsTab />}
//         {activeTab === 'customers' && <CustomersTab />}
//       </div>
//     </div>
//   );
// };

// export default TabManager;

import React, { useState } from 'react';
import InvoicesTab from './invoiceTab';
import ProductsTab from './productsTab';
import CustomersTab from './customersTab';
import Button from './button'; // Import the Button component
import '../styles/tabManager.css'; // Add your own styling

const TabManager = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('invoice'); 

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
          onClick={() => handleTabClick('invoice')}
          className={`tab ${activeTab === 'invoice' ? 'active' : ''}`}
        />
        <Button
          text="Products"
          onClick={() => handleTabClick('products')}
          className={`tab ${activeTab === 'products' ? 'active' : ''}`}
        />
        <Button
          text="Customers"
          onClick={() => handleTabClick('customers')}
          className={`tab ${activeTab === 'customers' ? 'active' : ''}`}
        />
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'invoice' && <InvoicesTab />}
        {activeTab === 'products' && <ProductsTab />}
        {activeTab === 'customers' && <CustomersTab />}
      </div>
    </div>
  );
};

export default TabManager;

