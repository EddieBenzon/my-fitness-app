import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
