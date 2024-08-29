import Header from "@components/Header";
import TopHeader from "@components/TopHeader";
import VendorSideBar from "@pages/VendorPages/VendorSideBar";
import React from "react";
import { Outlet } from "react-router-dom/dist";

const VendorLayout = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <main className="flex relative mx-auto xl:max-w-[1440px]">
        <VendorSideBar />
        <section className="flex-1 pt-11 px-4">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default VendorLayout;
