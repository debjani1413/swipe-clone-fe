import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faCartShopping, faBarcode, faGear, faVideo, faMessage} from '@fortawesome/free-solid-svg-icons';
import '../styles/sidebar.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

  const navigate = useNavigate();

  const handleNavigation = (path) => {
      navigate(path);
  }

  return (
    <div className='sidebar'>
      <div className='tabs' onClick={()=> {handleNavigation('/')}}>
        <FontAwesomeIcon icon={faMoneyBillWave} className='icon' />
        Invoices
      </div>
      <div className='tabs' onClick={()=> {handleNavigation('/products')}}>
        <FontAwesomeIcon icon={faCartShopping} className='icon' />
        Products
      </div>
      <div className='tabs' onClick={()=> {handleNavigation('/customers')}}>
        <FontAwesomeIcon icon={faBarcode} className='icon' />
        Customers
      </div>
      <div className="bottom-tabs">
      <div className='tabs'>
        <FontAwesomeIcon icon={faGear} className='icon' />
        Settings
      </div>
      <div className='tabs'>
        <FontAwesomeIcon icon={faVideo} className='icon' />
        Tutorials
      </div>
      <div className='tabs'>
        <FontAwesomeIcon icon={faMessage} className='icon' />
        Feedback
      </div>
      </div>
    </div>
  );
};

export default Sidebar
