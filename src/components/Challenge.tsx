import React, { useState, useEffect, useContext } from 'react';
import { Button } from '@mui/material';
import ImageUploadModal from './ImageUploadModal';
import { DataContext } from '../context/DataContext';
import { AuthContext } from '../context/AuthContext';
import ContestImagesGrid from './ContestImagesGrid';

const Challenge = () => {

  const { challengeData, imagesData, fetchData } = useContext(DataContext);
  const { currentUser } = useContext(AuthContext)

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSave = async (url: string, description: string) => {
    if (url) {
      const payload = { 
        "image_url": url,
        "user_id": currentUser?.uid,
        "twitter_handle": currentUser?.displayName,
        "prompt": description
      };

      try {
        const response = await fetch('https://promptcontest.uc.r.appspot.com/api/v1/images/'+ challengeData?.id +'/'+ currentUser?.uid, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        await fetchData();
        
        // Close the modal after a successful upload
        setOpen(false);
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      alert('Please enter a valid URL');
    }
  };

  return (
    <>
        <div className="px-8 pt-4 pb-6 flex justify-between items-center">
        <h1><span className='imagine'>/imagine</span> {challengeData?.title || ''}</h1>
        <button onClick={handleOpen} className="bg-background-inverse text-content-inverse p-4 rounded-md font-bold">ENTER THE CHALLENGE</button>
        <ImageUploadModal open={open} onClose={handleClose} onSave={handleSave} />
        </div>
        <ContestImagesGrid images={imagesData}/>
    </>

  );
};

export default Challenge;