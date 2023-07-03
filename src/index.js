import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <div className="max-w-6xl mx-auto">
      <App />
    </div>
  </React.StrictMode>
);
