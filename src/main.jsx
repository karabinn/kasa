import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App.jsx"; // Si App.jsx est directement dans src/

console.log("main.jsx est bien chargé !"); // Vérification dans la console


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);