import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import RegiOpsView from './views/operaciones/RegiOpsView';
import ConsOpsView from './views/operaciones/ConsOpsView';
import EditOpsView from './views/operaciones/EditOpsView';
import RepoOpsView from './views/operaciones/RepoOpsView';
import RegiMatrView from './views/matriculas/RegiMatrView';
import ConsMatrView from './views/matriculas/ConsMatrView';
import EditMatrView from './views/matriculas/EditMatrView';
import ProtectedRoute from './components/ProtectedRoute'
import UnauthorizedView from './views/UnuthorizedView';
import ResgAerpView from './views/aeropuertos/ResgAerpView';
import ConsAerpView from './views/aeropuertos/ConsAerpView';
import EditAerpView from './views/aeropuertos/EditAerpView';
import RegiCompView from './views/companias/RegiCompView';
import ConsCompView from './views/companias/ConsCompView';
import EditCompView from './views/companias/EditCompView';
import RegiAeroView from './views/aeronaves/RegiAeroView';
import ConsAeroView from './views/aeronaves/ConsAeroView';
import EditAeroView from './views/aeronaves/EditAeroView';
import RegiCalfView from './views/calificadores/RegiCalfView';
import ConsCalfView from './views/calificadores/ConsCalfView';
import RegiUsuaView from './views/usuarios/RegiUsuaView';
import ConstUsuaView from './views/usuarios/ConstUsuaView';
import AuthLayout from './layouts/AuthLayout';
import Login from './views/auth/Login';


export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<AppLayout />}>
              {/* Operaciones */}
              <Route
                path="/ops/registrar"
                element={
                  <ProtectedRoute allowedRoles={[1, 2, 3]}>
                    <RegiOpsView />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/ops/consultar"
                element={
                  <ProtectedRoute allowedRoles={[1, 2, 3]}>
                    <ConsOpsView />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/ops/ciclos"
                element={
                  <ProtectedRoute allowedRoles={[1, 2]}>
                    <EditOpsView />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/ops/reportes"
                element={
                  <ProtectedRoute allowedRoles={[1, 2]}>
                    <RepoOpsView />
                  </ProtectedRoute>
                }
              />

              { /* Matriculas */ }
              <Route
                path="/matricula/registrar"
                element={
                  <ProtectedRoute allowedRoles={[1, 2]}>
                    <RegiMatrView />
                  </ProtectedRoute>
                }
              /> 
              <Route
                path="/matricula/consultar"
                element={
                  <ProtectedRoute allowedRoles={[1, 2]}>
                    <ConsMatrView />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/matricula/editar"
                element={
                  <ProtectedRoute allowedRoles={[1, 2]}>
                    <EditMatrView />
                  </ProtectedRoute>
                }
              />

              { /* Aeropuertos */ }
              <Route
                path="/aeropuerto/registrar"
                element={
                  <ProtectedRoute allowedRoles={[1, 2]}>
                    <ResgAerpView />
                  </ProtectedRoute>
                }
              />  
              <Route
                path="/aeropuerto/consultar"
                element={
                  <ProtectedRoute allowedRoles={[1, 2]}>
                    <ConsAerpView />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/aeropuerto/editar"
                element={
                  <ProtectedRoute allowedRoles={[1, 2]}>
                    <EditAerpView />
                  </ProtectedRoute>
                }
              />

              { /* Compania */ }
              <Route
                path="/compania/registrar"
                element={
                  <ProtectedRoute allowedRoles={[1, 2]}>
                    <RegiCompView />
                  </ProtectedRoute>
                }
              />  
              <Route
                path="/compania/consultar"
                element={
                  <ProtectedRoute allowedRoles={[1, 2]}>
                    <ConsCompView />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/compania/editar"
                element={
                  <ProtectedRoute allowedRoles={[1, 2]}>
                    <EditCompView />
                  </ProtectedRoute>
                }
              />

              { /* Aeronaves */ }
              <Route
                path="/aeronave/registrar"
                element={
                  <ProtectedRoute allowedRoles={[1, 2]}>
                    <RegiAeroView />
                  </ProtectedRoute>
                }
              />  
              <Route
                path="/aeronave/consultar"
                element={
                  <ProtectedRoute allowedRoles={[1, 2]}>
                    <ConsAeroView />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/aeronave/editar"
                element={
                  <ProtectedRoute allowedRoles={[1, 2]}>
                    <EditAeroView />
                  </ProtectedRoute>
                }
              />

              { /* Calificador */ }
              <Route
                path="/calificador/registrar"
                element={
                  <ProtectedRoute allowedRoles={[1, 2]}>
                    <RegiCalfView />
                  </ProtectedRoute>
                }
              />  
              <Route
                path="/calificador/consultar"
                element={
                  <ProtectedRoute allowedRoles={[1, 2]}>
                    <ConsCalfView />
                  </ProtectedRoute>
                }
              />

              { /* Usuarios */ }
              <Route
                path="/usuario/registrar"
                element={
                  <ProtectedRoute allowedRoles={[1, 2]}>
                    <RegiUsuaView />
                  </ProtectedRoute>
                }
              />  
              <Route
                path="/usuario/consultar"
                element={
                  <ProtectedRoute allowedRoles={[1, 2]}>
                    <ConstUsuaView />
                  </ProtectedRoute>
                }
              />

              <Route 
                path="/unauthorized" 
                element={<UnauthorizedView />} 
              />
            </Route>

            {/* Autenticacion */}
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
