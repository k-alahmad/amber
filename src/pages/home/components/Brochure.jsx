import React from "react";
import LazyImage from "../../../components/UI/LazyImage";
import BrochureImg from "../../../assets/images/Brochure.webp";
const Brochure = () => {
	return (
		<div className='grid grid-cols-2 bg-lightBlack mt-40 justify-center items-center text-white '>
			<div>1</div>
			<div>2</div>
			{/* <div className=''>
					<p className='text-xl md:text-huge font-semibold w-full md:w-[70%]'>
						Download your copy of the brochure
					</p>
					<div className='flex justify-center items-center w-[150px] h-[40px] md:w-[300px] md:h-[65px] rounded-md bg-white cursor-pointer hover:bg-white/60'>
						<p className='text-lightBlack text-lg md:text-big'>Download</p>
					</div>
				</div> */}
			<div className=' '>
				{/* <LazyImage src={BrochureImg} imgStyle={"w-[500px] -translate-y-44"} /> */}
			</div>
		</div>
	);
};

export default Brochure;
