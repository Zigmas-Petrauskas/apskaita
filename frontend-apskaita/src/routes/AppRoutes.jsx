import { Routes, Route, Navigate } from "react-router-dom";

import Register from "../pages/Register/Register";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Pagrindinis adresas nukreipiamas į registraciją */}
      <Route path="/" element={<Navigate to="/register" replace />} />

      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
