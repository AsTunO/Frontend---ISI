import React from 'react';
import { createRoot } from 'react-dom/client'; 
import Routes from './pages/Routes.jsx';

import "./main.css";

const root = createRoot(document.getElementById('root')); 

root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
