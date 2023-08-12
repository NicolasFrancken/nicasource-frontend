import "./styles/index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "creator/:creatorId",
//     element: <Home />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
