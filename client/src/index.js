import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./components/login";
import Table from "./components/table";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Table></Table>
  </React.StrictMode>
);
