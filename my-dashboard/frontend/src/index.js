import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const MLPage = () => <h2>ML Dashboard Page</h2>; // Temporary route

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/ml-dashboard" element={<MLPage />} />
    </Routes>
  </BrowserRouter>
);
