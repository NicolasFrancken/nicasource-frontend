import { Routes, Route } from "react-router-dom";

import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Home from "./components/Home";
import Creators from "./components/Creators";
import Video from "./components/Video";
import Profile from "./components/Profile";
import Error from "./components/Error";
import { RequireAuth } from "react-auth-kit";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route
        path="/videos"
        element={
          <RequireAuth loginPath="/signin">
            <Home />
          </RequireAuth>
        }
      />
      <Route
        path="/creators"
        element={
          <RequireAuth loginPath="/signin">
            <Creators />
          </RequireAuth>
        }
      />
      <Route
        path="/videos/:videoId"
        element={
          <RequireAuth loginPath="/signin">
            <Video />
          </RequireAuth>
        }
      />
      <Route
        path="/profile/:creatorId"
        element={
          <RequireAuth loginPath="/signin">
            <Profile />
          </RequireAuth>
        }
      />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default AppRoutes;
