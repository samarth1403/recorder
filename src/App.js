import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MainLayout from "./Components/Layout/MainLayout";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import ProfilePage from "./Pages/ProfilePage";
import { PrivateRoute } from "./Routing/PrivateRoute";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<MainLayout />}>
          <Route exact index element={<HomePage />} />
          {/* <Route exact path="/sign-in-page" element={<SignInPage />} />
          <Route exact path="/sign-up-page" element={<SignUpPage />} /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
