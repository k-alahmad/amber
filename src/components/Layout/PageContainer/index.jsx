import React, { useEffect } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";

const PageLayout = ({ children }) => {
  // useEffect(() => {
  // 	window.scrollTo(0, 0);
  // }, []);
  return (
    <div className=" flex flex-col justify-center items-center">
      <NavBar />
      <div className="min-h-screen max-w-[1920px]">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
