import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import ProtectedRoute from './components/ProtectedRoute'
import UnauthorizedView from './views/UnuthorizedView';
import AuthLayout from './layouts/AuthLayout';
import Login from './views/auth/Login';
import { routeConfig } from './config/routes'
import React from 'react';


export default function Router() {
  return (
    <BrowserRouter>
        <Routes>

            { /* Aplicacion Principal */ }
            <Route element={<AppLayout />}>
              {routeConfig.map(({ path, element, roles }) => (
                <Route
                  key={path}
                  path={path}
                  element={
                    <ProtectedRoute allowedRoles={roles}>
                      {React.createElement(element)}
                    </ProtectedRoute>
                  }
                />
              ))}
            </Route>

            { /* Acceso Denegado */ }
            <Route 
              path="/unauthorized" 
              element={<UnauthorizedView />} 
            />

            { /* Autenticacion */ }
            <Route element={<AuthLayout />}>
              <Route
              path="/auth/login"
              element={
                  <Login />
              }
              />
            
            </Route>
        </Routes>
    </BrowserRouter>
  );
}
