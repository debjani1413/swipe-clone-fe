// import React from 'react';
// import '../styles/button.css';

// const Button = ({text,icon,onClick}) => {
//   return (
//     <button className="button" onClick={onClick}>
//     {text}
//     {icon && <span className="button-icon">{icon}</span>}
//   </button>
//   )
// }

// export default Button;

import React from 'react';
import '../styles/button.css';

const Button = ({ text, icon, onClick, className }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {text}
      {icon && <span className="button-icon">{icon}</span>}
    </button>
  );
};

export default Button;
