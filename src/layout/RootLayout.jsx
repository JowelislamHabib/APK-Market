import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/shared/nav/NavBar";

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <h2>Footer</h2>
    </div>
  );
};

export default RootLayout;
