import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Users from "../pages/Users/Users";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "../components/layout/Layout/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Pagrindinis adresas nukreipiamas į registraciją */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Privati sistemos dalis */}

      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
      </Route>

      {/* Visi nežinomi adresai */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRoutes;
