import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importe o componente Routes

import LoginPage from './loginPage/loginPage.jsx';
import HomePage from './homePage/homePage.jsx';
import ReportsPage from './reportsPage/reportsPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/reports" element={<ReportsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
