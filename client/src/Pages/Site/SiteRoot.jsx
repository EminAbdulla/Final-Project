import React from "react";
import Header from "../../Layout/Site/Header/Header";
import Footer from "../../Layout/Site/Footer/Footer";
import { Outlet } from "react-router";
import MouseCursor from "../../Components/Site/MouseCursor/MouseCursor";

const SiteRoot = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <MouseCursor />
    </>
  );
};

export default SiteRoot;
