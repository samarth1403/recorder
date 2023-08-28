import React from 'react';
import "react-toastify/dist/ReactToastify.css";
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="colored"
        className="text-xl"
      />
      <Header />
      <Outlet />
    </div>
  );
}

export default MainLayout