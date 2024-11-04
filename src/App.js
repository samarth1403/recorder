import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./Components/Layout/MainLayout";
import HomePage from "./Pages/HomePage";

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
