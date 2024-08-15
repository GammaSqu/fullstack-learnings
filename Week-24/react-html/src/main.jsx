import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const container = document.querySelector('#root');
const appRoot = ReactDOM.createRoot(container);

appRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
