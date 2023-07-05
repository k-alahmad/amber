import React from "react";
import Header from "./components/Header";
import Nearby from "./components/Nearby";
import FloorPlan from "./components/FloorPlan";
import PaymentPlan from "./components/PaymentPlan";
import Register from "./components/Register";
import Location from "./components/Location";
import HeaderTemp from "./components/HeaderTemp";
import Brochure from "./components/Brochure";

const Home = () => {
	return (
		<div>
			{/* <Header /> */}
			<HeaderTemp />
			<Nearby />
			<Location />
			{/* <FloorPlan /> */}
			<PaymentPlan />
			<Register />
			<Brochure />
		</div>
	);
};

export default Home;
