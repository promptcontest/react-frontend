import { IChallengeImage, IChallenge, IPreferenceStatsUpdateResponse, IPreferenceStatsUpdateRequest } from "./types";

export const fetchContestImage = async (limit?: number, offset?: number): Promise<Array<IChallengeImage>> => {
  
  const response = await fetch(`https://promptcontest.uc.r.appspot.com/api/v1/images/4Rc5SyuSAJz9WcPunKXd`)
  const data = await response.json();


  const contestImages: IChallengeImage[] = data as IChallengeImage[];
  console.log(contestImages);
  return contestImages;

    // const response = await fetch(`https://api.unsplash.com/contests/images&limit=${limit}&offset=${offset}`)
    // const data = await response.json();

    // if (Array.isArray(data)) {
    //     const contestImages: IContestImage[] = data as IContestImage[];
    //     return contestImages;
    // } else {
    //     throw new Error('Invalid data format received');
    // }

    return new Promise<IChallengeImage[]> ((resolve, reject) => {
        setTimeout(() => {
            // Simulated mocked data
            const mockedData: any[] = [
              {
                id: 1,
                url: 'https://assets.capitalxtra.com/2013/48/best-hip-hop-album-covers-32-1386002952-view-0.jpg',
                userId: 1,
                userTwitterHandle: '@kanyewest',
                contestId: 1,
                dimensions: {
                    width: 100,
                    height: 100
                },
                preferenceStats: {
                  numLikes: 0,
                  numDislikes: 0,
                }
              },
              {
                id: 2,
                url: 'https://www.macworld.com/wp-content/uploads/2023/04/bondi-blue-imac-original-1.jpg?quality=50&strip=all',
                userId: 1,
                userTwitterHandle: '@steve_jobs',
                contestId: 1,
                dimensions: {
                    width: 100,
                    height: 100
                },
                preferenceStats: {
                  numLikes: 0,
                  numDislikes: 0,
                }
              },
              {
                id: 3,
                url: 'https://i.pinimg.com/originals/be/8e/fe/be8efe4eb2084608d61735cfa7ed3dcc.jpg',
                userId: 1,
                userTwitterHandle: '@virgilabloh',
                contestId: 1,
                dimensions: {
                    width: 100,
                    height: 100
                },
                preferenceStats: {
                  numLikes: 0,
                  numDislikes: 0,
                }
              },
              {
                id: 3,
                url: 'https://hodinkee.imgix.net/uploads/images/1613072769262-jqniggyzvnm-3472eecc47ae3397ea98308d07369ebe/9_1200_1.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&w=1200&h=630&fit=crop',
                userId: 1,
                userTwitterHandle: '@casio',
                contestId: 1,
                dimensions: {
                    width: 100,
                    height: 100
                },
                preferenceStats: {
                  numLikes: 0,
                  numDislikes: 0,
                }
              }
              // the code below is just to make the mocked data more interesting
            ].flatMap(i => Array.from({ length: 3 }, () => i));
            let shuffled = mockedData
                .map(value => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }, idx) => ({...value, ...{id: idx + 1}}))
      
            const contestImages: IChallengeImage[] = shuffled as IChallengeImage[];
            
            resolve(contestImages);
          }, 1000); // Simulated delay
    })
}

export const fetchChallenge = async (): Promise<IChallenge> => {
    const response = await fetch(`https://promptcontest.uc.r.appspot.com/api/v1/challenge`)
    const data = await response.json();

    const dataStructure: any = {
      id: data.id,
      title: data.name,
      description: '',
      startDate: new Date(),
      endDate: new Date(data.end)
  }

  return dataStructure as IChallenge;
    

    // return new Promise<IChallenge> ((resolve, reject) => {
    //     setTimeout(() => {
    //         // Simulated mocked data

    //         const mockedData: any = {
    //             id: 1,
    //             title: 'Transparent design',
    //             description: 'Description 1',
    //             startDate: new Date(),
    //             endDate: new Date(new Date().getTime() + 60 * 60 * 24 * 1000)
    //         }
      
    //         const contest: IChallenge = mockedData as IChallenge;
      
    //         resolve(contest);
    //       }, 1000); // Simulated delay
    // })
}


export const updatePreferences = async (image: IChallengeImage, upvote: boolean, userId: string): Promise<IPreferenceStatsUpdateResponse> => {
    const downvote = !upvote;
    // const payload = {
    //     imageId: image.id,
    //     upvote: upvote,
    //     downvote: downvote,
    //     userId: userId
    // } as  IPreferenceStatsUpdateRequest
  
    // const response = await fetch(`https://api..../update-preferences`, {
    //     method: 'POST',
    //     body: JSON.stringify(payload),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // })
    // const data = await response.json();
    // return data as IPreferenceStatsUpdateResponse;



    return new Promise<IPreferenceStatsUpdateResponse> ((resolve, reject) => {
        setTimeout(() => {
            // Simulated mocked data

            // const mockedData: any = {
            //     success: true,
            //     preferenceStats: {
            //         numLikes: upvote ? image.preferenceStats.numLikes + 1 : image.preferenceStats.numLikes,
            //         numDislikes: downvote ? image.preferenceStats.numDislikes + 1 : image.preferenceStats.numDislikes,
            //     }
            // }
      
            // const prefs: IPreferenceStatsUpdateResponse = mockedData as IPreferenceStatsUpdateResponse;
      
            // resolve(prefs);
          }, 1000); // Simulated delay
    })
}