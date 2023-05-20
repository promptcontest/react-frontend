import React, { useEffect, useState } from 'react';

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  const [ChallengeData, setChallengeData] = useState({ challenge: '', expiration: '' });
  const [ImagesData, setImagesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('https://example.com/api/endpoint'); // replace with your API endpoint
        // const data = await response.json();

        await new Promise(r => setTimeout(r, 1000));

        setChallengeData({
          challenge: "Blue unicorn wearing Balenciaga",
          expiration: 1684936194
        });
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('https://example.com/api/endpoint'); // replace with your API endpoint
        // const data = await response.json();

        await new Promise(r => setTimeout(r, 1000));

        const imgData = []; // TODO better example

        setImagesData(imgData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        ChallengeData,
        ImagesData
      }}
    >
      {children}
    </DataContext.Provider>
  );
};