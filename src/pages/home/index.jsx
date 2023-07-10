import React from "react";
import Nearby from "./components/Nearby";
import FloorPlan from "./components/FloorPlan";
import PaymentPlan from "./components/PaymentPlan";
import Location from "./components/Location";
import HeaderTemp from "./components/HeaderTemp";
import Brochure from "./components/Brochure";
import RegisterContainer from "./components/RegisterContainer";

const Home = () => {
  return (
    <>
      <div id="home" />
      <HeaderTemp />
      <div id="payment" />
      <PaymentPlan />
      <div id="nearby" />
      <Nearby />
      <div id="floorPlan" />
      <FloorPlan />
      <div id="location" />
      <Location />
      <RegisterContainer />
      <Brochure />
    </>
  );
};

export default Home;
