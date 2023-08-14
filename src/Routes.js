import { Routes, Route } from "react-router-dom";

import Sign from "./components/Sign";
import Home from "./components/Home";
import Video from "./components/Video";
import Profile from "./components/Profile";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Sign />} />
      <Route path="/homepage" element={<Home />} />
      <Route path="/video/:videoId" element={<Video />} />
      <Route path="/creator/:creatorId" element={<Profile />} />
    </Routes>
  );
}

export default AppRoutes;
