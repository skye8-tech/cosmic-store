import Footer from "@components/Footer";
import Header from "@components/Header";
import TopHeader from "@components/TopHeader";
import { Outlet } from "react-router-dom";

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
