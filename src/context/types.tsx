import { IChallenge, IChallengeImage } from 'api/types';
import { User } from 'firebase/auth';

export interface ICtxProps {
    children: React.ReactNode;
  }
  
export interface IContext {
    challengeData: IChallenge | null;
    imagesData: IChallengeImage[];
    fetchData: () => Promise<void>;
}

export interface IAuthContext {
    currentUser: User | null;
}