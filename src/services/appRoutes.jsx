import { Routes, Route } from "react-router-dom";
import Login from "../views/login";
import RegisterEmotions from "../views/registerEmotions";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register-emotion" element={<RegisterEmotions />} />
    </Routes>
  );
};

export default AppRoutes;
