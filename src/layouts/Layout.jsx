import React from "react";
import Footer from "@components/Footer";
import TopHeader from "@components/TopHeader";
import { Outlet } from "react-router-dom";
import Header from "@components/Header";

const Layout = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
