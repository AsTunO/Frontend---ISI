import React from 'react';
import { createRoot } from 'react-dom/client'; 
// import { Toaster } from "sonner";

// import Routes from './routes/Routes.jsx';
import App from './App';

import "./main.css";

const root = createRoot(document.getElementById('root')); 

root.render(
  <React.StrictMode>
    <App />
    {/* <Routes />
    <Toaster richColors position='top-right' /> */}
  </React.StrictMode>
);
