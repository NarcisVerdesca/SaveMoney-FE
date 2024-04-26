import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from './pages/login/LoginPage';
import { ProtectedRoutes } from './services/ProtectedRoutes';
import Homepage from './pages/homepage/HomePage';

function App() {
  return (
    <Router >
    <Routes>
      <Route path="" element={<LoginPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route element={<ProtectedRoutes />}>  {/*Server per proteggere le root interne tramite le regole definite all'interno del Protected Routes*/}
          <Route path="homepage" element={<Homepage />} /> 
        </Route>
    </Routes>
  </Router>
  );
}

export default App;
