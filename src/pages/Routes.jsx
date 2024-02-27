import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importe o componente Routes

import LoginPage from './loginPage/loginPage.jsx';
import HomePage from './homePage/homePage.jsx';
import ReportsPage from './reportsPage/reportsPage.jsx';
import ProfilePage from './profilePagee/profilePage.jsx';
import NewAdmPage from './newAdmPage/newAdmPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/new-adm" element={<NewAdmPage />} />
      </Routes>
    </Router>
  );
}

export default App;
