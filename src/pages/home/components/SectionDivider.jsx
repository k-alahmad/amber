import React from "react";
import dubai from "../../../assets/images/dubai.webp";

const SectionDivider = () => {
	return (
		<div
			className='relative w-full h-screen justify-center items-center bg-center bg-fixed '
			style={{
				backgroundImage: `url(${dubai})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				maxWidth: "100%",
				maxHeight: "100%",
				backgroundPosition: "fixed",
			}}
		></div>
	);
};

export default SectionDivider;
