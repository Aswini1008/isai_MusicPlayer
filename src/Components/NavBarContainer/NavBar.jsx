import React from 'react';
import Logo from './Logo';
import Menu from './Menu';

const NavBar = () => {
  return (
    <nav className="w-full h-[80px] bg-gray-900 border-b border-gray-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">
        <Logo />
        <Menu />
      </div>
    </nav>
  );
};

export default NavBar;
