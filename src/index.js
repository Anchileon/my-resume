import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Make sure this path points to your existing stylesheet
import App from './App';
import reportWebVitals from './reportWebVitals';

// Render the App component
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Optional: reporting for performance
reportWebVitals();
