import { IContestImage, IChallenge } from "./types";

export const fetchContestImage = async (limit?: number, offset?: number): Promise<Array<IContestImage>> => {
    // const response = await fetch(`https://api.unsplash.com/contests/images&limit=${limit}&offset=${offset}`)
    // const data = await response.json();

    // if (Array.isArray(data)) {
    //     const contestImages: IContestImage[] = data as IContestImage[];
    //     return contestImages;
    // } else {
    //     throw new Error('Invalid data format received');
    // }

    return new Promise<IContestImage[]> ((resolve, reject) => {
        setTimeout(() => {
            // Simulated mocked data
            const mockedData: any[] = [
              {
                id: 1,
                url: 'https://images.unsplash.com/photo-1558980664-8f9c0c0d6d4e',
                userId: 1,
                contestId: 1,
                dimensions: {
                    width: 100,
                    height: 100
                }
              },
              {
                id: 2,
                url: 'https://images.unsplash.com/photo-1558980664-8f9c0c0d6d4e',
                userId: 1,
                contestId: 1,
                dimensions: {
                    width: 100,
                    height: 100
                }
              },
              {
                id: 3,
                url: 'https://images.unsplash.com/photo-1558980664-8f9c0c0d6d4e',
                userId: 1,
                contestId: 1,
                dimensions: {
                    width: 100,
                    height: 100
                }
              }
            ];
      
            const contestImages: IContestImage[] = mockedData as IContestImage[];
      
            resolve(contestImages);
          }, 1000); // Simulated delay
    })
}

export const fetchChallenge = async (): Promise<IChallenge> => {
    // const response = await fetch(`https://api.unsplash.com/contests`)
    // const data = await response.json();
    // return data as IContest;
    

    return new Promise<IChallenge> ((resolve, reject) => {
        setTimeout(() => {
            // Simulated mocked data
            const mockedData: any = {
                id: 1,
                title: 'Contest 1',
                description: 'Description 1',
                startDate: new Date(),
                endDate: new Date()
            }
      
            const contest: IChallenge = mockedData as IChallenge;
      
            resolve(contest);
          }, 1000); // Simulated delay
    })
}