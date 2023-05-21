import React, { useEffect, useState, useCallback } from 'react';
import { fetchContestImage, fetchChallenge } from 'api';
import { IChallenge, IChallengeImage } from 'api/types';
import {IContext, ICtxProps} from './types';

export const DataContext = React.createContext<IContext>({
  challengeData: null,
  imagesData: [],
  fetchData: async () => {}, // initialize fetchData with a noop function
});

export const DataProvider: React.FC<ICtxProps> = ({ children }) => {
  const [challengeData, setChallengeData] = useState<IChallenge | null>(null);
  const [imagesData, setImagesData] = useState<IChallengeImage[]>([]);

  const fetchData = useCallback(async () => {
    const challengePromise = fetchChallenge();
    const imagesPromise = fetchContestImage();

    setChallengeData(await challengePromise);
    setImagesData(await imagesPromise);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <DataContext.Provider
      value={{
        challengeData,
        imagesData,
        fetchData // provide fetchData as part of the context value
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
