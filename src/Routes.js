import { Routes, Route } from "react-router-dom";

import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Home from "./components/Home";
import Video from "./components/Video";
import Profile from "./components/Profile";
import Error from "./components/Error";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/videos" element={<Home />} />
      <Route path="/videos/:videoId" element={<Video />} />
      <Route path="/profile/:creatorId" element={<Profile />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default AppRoutes;
