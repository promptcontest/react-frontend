import React from 'react';
import { useEffect, useState } from 'react';
import { fetchContestImage, fetchChallenge } from 'api';
import { IChallenge, IContestImage } from 'api/types';
import {IContext, ICtxProps} from './types';

export const DataContext = React.createContext<IContext>({
  challengeData: null,
  imagesData: []
});

export const DataProvider: React.FC<ICtxProps> = ({ children }) => {
  const [ChallengeData, setChallengeData] = useState<IChallenge | null>(null);
  const [ImagesData, setImagesData] = useState<IContestImage[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      
      const challengePromise = fetchChallenge();
      const imagesPromise = fetchContestImage();
  
      setChallengeData(await challengePromise);
      setImagesData(await imagesPromise);
    }
    
    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        challengeData: ChallengeData,
        imagesData: ImagesData
      }}
    >
      {children}
    </DataContext.Provider>
  );
};