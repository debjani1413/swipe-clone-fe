import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import '../styles/banner.css';
import Button from './button';


const Banner = () => {
  return (
    <div className='banner'>
      Enjoy customizable templates, GST reports, and premium support! 🌟🌟🌟
      <Button text={"Subscribe Now!"} icon={<FontAwesomeIcon icon={faRocket} />} />
    </div>
  )
}

export default Banner;
