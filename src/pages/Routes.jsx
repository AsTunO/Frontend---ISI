import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importe o componente Routes

import LoginPage from './loginPage/loginPage.jsx';
import HomePage from './homePage/homePage.jsx';
import ProfilePage from './profilePagee/profilePage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
