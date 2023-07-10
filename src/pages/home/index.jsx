import React from "react";
import Nearby from "./components/Nearby";
import FloorPlan from "./components/FloorPlan";
import PaymentPlan from "./components/PaymentPlan";
// import Register from "./components/Register";
import Location from "./components/Location";
import HeaderTemp from "./components/HeaderTemp";
import Brochure from "./components/Brochure";

const Home = () => {
  return (
    <>
      <HeaderTemp />
      <PaymentPlan />
      <Nearby />
      <FloorPlan />
      {/* <Register /> */}
      <Location />
      <Brochure />
    </>
  );
};

export default Home;
