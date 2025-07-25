import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ProjectDetail from './components/ProjectDetail';
import './index.css';
import './i18n'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/proyect/:id" element={<ProjectDetail />} />
    </Routes>
  </BrowserRouter>
);