import { Routes, Route } from "react-router-dom";
import Login from "../views/login";
import RegisterEmotions from "../views/registerEmotions";
import Error from "../views/shared/error";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register-emotion" element={<RegisterEmotions />} />
      <Route path="*" element={<Error />} />
      <Route path="/error" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
