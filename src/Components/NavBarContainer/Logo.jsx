import React from 'react';
import logoimage from '../assests/logo.png'; 

const Logo = () => {
  return (
    <div className="flex items-center justify-center p-2">
      <img
        src={logoimage}
        alt="Company Logo"
        className="h-[72px] w-[80px] border-2 border-gray-800 rounded-md shadow-lg hover:shadow-xl transition duration-300"
      />
    </div>
  );
};

export default Logo;
