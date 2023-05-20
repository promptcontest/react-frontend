import React from 'react';
import { useContext } from 'react';
import { DataContext } from 'context/DataContext';
import Login from './Login';
import Label from './Label';
import Countdown from './Countdown';


const Header = () => {
  const { challengeData } = useContext(DataContext);

  return (
    <header className="px-8 py-4 bg-gray-900 flex justify-between items-center">
        <div className='flex items-center justify-center'>
            <p>Today's Challenge</p>
            {challengeData?.endDate && <Countdown until={challengeData?.endDate}/>}
        </div>
      <Login />
    </header>
  );
};

export default Header;