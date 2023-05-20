import { IChallenge, IContestImage } from 'api/types';
import { User } from 'firebase/auth';

export interface ICtxProps {
    children: React.ReactNode;
  }
  
export interface IContext {
    challengeData: IChallenge | null;
    imagesData: IContestImage[];
}

export interface IAuthContext {
    currentUser: User | null;
}