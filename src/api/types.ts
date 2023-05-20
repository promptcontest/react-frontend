type Dimensions = {
    width: number;
    height: number;
}

type PreferenceStats = {
    numLikes: number;
    numDislikes: number;
}
    

export interface IChallengeImage {
    id: number;
    url: string;
    userId: string;
    userTwitterHandle: string;
    challengeId: number;
    dimensions: Dimensions;
    preferenceStats: PreferenceStats;
}


export interface IChallenge {
    id: number;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
}

export interface IPreferenceStatsUpdateResponse {
    success: boolean;
    preferenceStats: PreferenceStats;
    errors?: string[];
}

export interface IPreferenceStatsUpdateRequest {
    imageId: number;
    upvote: boolean;
    downvote: boolean;
    userId: string;
}