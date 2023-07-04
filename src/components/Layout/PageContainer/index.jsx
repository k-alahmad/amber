import React, { useEffect } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";

const PageLayout = ({ children }) => {
  // useEffect(() => {
  // 	window.scrollTo(0, 0);
  // }, []);
  return (
    <div className=" ">
      <NavBar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
