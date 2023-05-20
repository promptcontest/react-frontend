import React from 'react';
import Login from './Login';
import Label from './Label';

const Header = () => {

  return (
    <header className="p-4 bg-gray-900 flex justify-between items-center">
        <div className='flex'>
            <p>Today's Challenge</p>
            <Label text={"Until"}/>
        </div>
      <Login />
    </header>
  );
};

export default Header;