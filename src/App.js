// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import routes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import ResponsiveDashboardLayout from './components/layout/ResponsiveDashboardLayout';
import { useAuth } from './contexts/AuthContext'; // Import useAuth hook

const App = () => {
  // Use the auth context instead of direct localStorage check
  const { currentUser, loading } = useAuth();
  
  // Show loading state while checking authentication
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/login" element={!currentUser ? <LoginPage /> : <Navigate to="/dashboard" />} />
          <Route path="/signup" element={!currentUser ? <SignupPage /> : <Navigate to="/dashboard" />} />
          <Route path="/forgot-password" element={!currentUser ? <ForgotPasswordPage /> : <Navigate to="/dashboard" />} />
          
          {/* Protected routes */}
          <Route element={currentUser ? <ResponsiveDashboardLayout /> : <Navigate to="/login" />}>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Route>
          
          {/* Redirect to login if no route matches */}
          <Route path="*" element={<Navigate to={currentUser ? "/dashboard" : "/login"} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
