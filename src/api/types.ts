type Dimensions = {
    width: number;
    height: number;
}

type PreferenceStats = {
    numLikes: number;
    numDislikes: number;
}
    

export interface IContestImage {
    id: number;
    url: string;
    userId: number;
    challengeId: number;
    dimensions: Dimensions;
    preferenceStats?: Partial<PreferenceStats>;
}


export interface IChallenge {
    id: number;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
}