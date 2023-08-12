import { Routes, Route } from "react-router-dom";

import Sign from "./components/Sign";
import Home from "./components/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Sign />} />
      <Route path="/creator/:creatorId" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
