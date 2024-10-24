import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import './App.css';

const App = () => {
  return (
    <div>
      <h1>Fake Dating App</h1>
      <Signup />
      <Login />
    </div>
  );
};

export default App;
