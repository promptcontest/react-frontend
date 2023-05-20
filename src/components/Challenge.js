import React, { useState, useEffect, useContext } from 'react';
import './Challenge.css'
import { DataContext } from '../context/DataContext';

const Challenge = () => {

  const { ChallengeData } = useContext(DataContext);

  console.log(ChallengeData)

  return (
    <div className="p-4 flex justify-between items-center">
       <h1><span className='imagine'>/imagine</span> {ChallengeData.challenge}</h1>
    </div>
  );
};

export default Challenge;