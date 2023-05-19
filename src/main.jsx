import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./assets/scss/index.scss";
import App from "./App";
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={REACT_APP_GOOGLE_ID}>
    <BrowserRouter>
      <App />
    </BrowserRouter >
  </GoogleOAuthProvider>
);
