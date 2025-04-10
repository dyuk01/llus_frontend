// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import routes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import ResponsiveDashboardLayout from './components/layout/ResponsiveDashboardLayout';

const App = () => {
  // This would normally come from an auth context
  const isAuthenticated = localStorage.getItem('token') !== null;

  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/login" element={!isAuthenticated ? <LoginPage /> : <Navigate to="/dashboard" />} />
          <Route path="/signup" element={!isAuthenticated ? <SignupPage /> : <Navigate to="/dashboard" />} />
          <Route path="/forgot-password" element={!isAuthenticated ? <ForgotPasswordPage /> : <Navigate to="/dashboard" />} />
          
          {/* Protected routes */}
          <Route element={isAuthenticated ? <ResponsiveDashboardLayout /> : <Navigate to="/login" />}>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Route>
          
          {/* Redirect to login if no route matches */}
          <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;