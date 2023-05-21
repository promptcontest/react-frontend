import React, { useContext } from 'react';
import { auth, TwitterAuthProvider, signInWithPopup, signOut } from '../firebase/firebaseConfig';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const { currentUser } = useContext(AuthContext);
  const handleTwitterLogin = async () => {
    const provider = new TwitterAuthProvider();

    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {currentUser ? (
        <div className='flex flex-col items-end'>
          <p>{currentUser.displayName}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleTwitterLogin}>Login with Twitter</button>
      )}
    </div>
  );
};

export default Login;