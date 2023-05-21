import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, User, getAdditionalUserInfo} from 'firebase/auth';
import { app } from '../firebase/firebaseConfig';
import { IAuthContext, ICtxProps } from './types';

export const AuthContext = React.createContext<IAuthContext>({currentUser: null});

export const AuthProvider: React.FC<ICtxProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth(app);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{
        currentUser: user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
