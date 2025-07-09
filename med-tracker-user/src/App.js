import React, { useState } from 'react';
import TrackerPage from './pages/TrackerPage';
import LoginForm from './components/LoginForm';
import LoadingOverlay from './components/LoadingOverlay';

import './App.css';


function App() {

  // const userId = 1; // Global declare of userId since there is no account user yet its just me
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem ('user')
    return saved ? JSON.parse(saved) : null
  }); // This state will hold user data if logged in, otherwise it's null. // update. will stay logged in unless localstorage resets data or logged out

  const [loading, setLoading] = useState(false);

  // This function will be passed to the LoginForm.
  // LoginForm will call it on a successful API response.
  const handleLoginSuccess = (userData, stayLoggedIn) => {
    setUser(userData); // { message: '. . .', userId }
    if (stayLoggedIn) {
      localStorage.setItem('user', JSON.stringify(userData))
    };
  }

  // This function will be passed to the TrackerPage to handle logout.
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };


  return (
    <div className='main-container'>
      {loading && <LoadingOverlay/> }
      {!user && <LoginForm onLoginSuccess={handleLoginSuccess} setLoading={setLoading}/>}
      {user && <TrackerPage userId={user.userId} onLogout={handleLogout} setLoading={setLoading}/>}
      
    </div>
  );
}

export default App;