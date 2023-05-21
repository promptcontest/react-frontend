type Dimensions = {
    width: number;
    height: number;
}

type PreferenceStats = {
    numLikes: number;
    numDislikes: number;
}
    

export interface IChallengeImage {
    image_url: string;
    user_id: string;
    twitter_handle: string;
    rank: number;
    upvotes: number;
    downvotes: number;
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