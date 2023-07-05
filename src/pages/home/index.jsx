import React from "react";
import Header from "./components/Header";
import Nearby from "./components/Nearby";
import FloorPlan from "./components/FloorPlan";
import PaymentPlan from "./components/PaymentPlan";
import Register from "./components/Register";
import Location from "./components/Location";

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <Nearby />
      <Location />
      {/* <FloorPlan /> */}
      <PaymentPlan />
      <Register />
    </div>
  );
};

export default Home;
