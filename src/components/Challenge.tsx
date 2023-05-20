import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { AuthContext } from '../context/AuthContext';
import ContestImagesGrid from './ContestImagesGrid';

const Challenge = () => {

  const { challengeData, imagesData } = useContext(DataContext);
  const { currentUser } = useContext(AuthContext)

  console.log(challengeData)

  return (
    <>
        <div className="px-8 pt-4 pb-6 flex justify-between items-center">
         <h1><span className='imagine'>/imagine</span> {challengeData?.title || ''}</h1>
        </div>
        <ContestImagesGrid images={imagesData}/>
    </>

  );
};

export default Challenge;