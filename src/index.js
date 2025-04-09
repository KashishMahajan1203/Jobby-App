// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );

// import React from 'react';
// import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
// import App from './App'; // Adjust the path as necessary
// import { StrictMode } from 'react';

// const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root for the app
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);