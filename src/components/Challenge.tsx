import React, { useState, useEffect, useContext } from 'react';
import './Challenge.css'
import { DataContext } from '../context/DataContext';
import { AuthContext } from '../context/AuthContext';

const Challenge = () => {

  const { challengeData } = useContext(DataContext);
  const { currentUser } = useContext(AuthContext)

  console.log(challengeData)

  return (
    <div className="p-4 flex justify-between items-center">
       <h1><span className='imagine'>/imagine</span> {challengeData?.title || ''}</h1>
    </div>
  );
};

export default Challenge;