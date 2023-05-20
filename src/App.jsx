
import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Login from './components/Login';
import Header from './components/Header';
// import HomePage from './components/HomePage';
import { AuthProvider } from './context/AuthContext';
import Challenge from './components/Challenge';
import Submissions from './components/Submissions';

function App() {
  return (
    <AuthProvider>
        <Header />
        <Challenge/>
        <Submissions/>
    </AuthProvider>
  );
}

export default App;