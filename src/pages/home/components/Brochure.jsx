import React from "react";
import LazyImage from "../../../components/UI/LazyImage";
import BrochureImg from "../../../assets/images/Brochure.webp";
const Brochure = () => {
	return (
		<div className='flex justify-center items-center w-full h-[300px] bg-lightBlack mt-40'>
			<div className='grid grid-cols-2 w-[80%] h-[80%] text-white border-b-2 border-x-gradiant '>
				<div className=''>
					<p className='text-huge font-semibold w-[70%]'>
						Download your copy of the brochure
					</p>
					<div className='flex justify-center items-center w-[300px] h-[65px] rounded-md bg-white cursor-pointer hover:bg-white/60'>
						<p className='text-lightBlack text-big'>Download</p>
					</div>
				</div>
				<div className=' '>
					{/* <LazyImage src={BrochureImg} imgStyle={"w-[500px] -translate-y-44"} /> */}
				</div>
			</div>
		</div>
	);
};

export default Brochure;
