import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../views/login";
import UserEmotions from "../views/userEmotions";
import RegisterEmotions from "../views/registerEmotions";
import Error from "../views/shared/error";

function RequireAuth({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (
    user === null ||
    user.state.refreshToken === null ||
    user.state.refreshToken === ""
  ) {
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
}

function RequireAuthLogin({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user === null) {
    return children;
  }
  if (user.state.refreshToken !== "") {
    return <Navigate to="/home" replace />;
  } else {
    return children;
  }
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuthLogin>
            <Login />
          </RequireAuthLogin>
        } />
      <Route
        path="/my-emotions"
        element={
          <RequireAuth>
            <UserEmotions />
          </RequireAuth>
        } 
      />
      <Route
        path="/register-emotion"
        element={
          <RequireAuth>
            <RegisterEmotions />
          </RequireAuth>
        } 
      />
      <Route path="*" element={
        <RequireAuth>
          <Error />
        </RequireAuth>}
      />
      <Route
        path="/error" element={
          <RequireAuth>
            <Error />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
