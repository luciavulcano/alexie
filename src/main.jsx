import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./assets/scss/index.scss";
import App from "./App";
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="1084438474032-jo1tectod0qs90npf8tetdm5oivqmvbq.apps.googleusercontent.com">
    <BrowserRouter>
      <App />
    </BrowserRouter >
  </GoogleOAuthProvider>
);
