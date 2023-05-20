
import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
// import HomePage from './components/HomePage';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
        <Login />
      {/* <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router> */}
    </AuthProvider>
  );
}

export default App;