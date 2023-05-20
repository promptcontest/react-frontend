import React from 'react';
import Login from './Login';

const Header = () => {

  return (
    <header className="p-4 bg-gray-900 flex justify-between items-center">
       <p>Today's Challenge</p>
      <Login />
    </header>
  );
};

export default Header;