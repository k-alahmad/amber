import React from "react";
import LazyImage from "../../../components/UI/LazyImage";
import heroLeft from "../../../assets/images/heroLeft.png";
import heroMiddle from "../../../assets/images/heroMiddle.jpg";
import heroRight from "../../../assets/images/heroRight.png";
import Riverside from "../../../assets/images/330Riverside.png";
const Header = () => {
	return (
		<div className='px-[3%] pt-4'>
			<div className='grid grid-cols-3 border-t-2 space-x-8 border-lightGreyOP'>
				<div className='flex flex-col justify-start space-y-2 pt-4 border-r-2 border-lightGreyOP'>
					<p className='flex  flex-col w-[80%] justify-center  flex-shrink-0 text-lightBlack text-big font-bold capitalize leading-[110%]'>
						Unveil a <br></br> soul-stirring experience
					</p>
					<p className='flex  flex-col justify-center flex-shrink-0 w-[448px] text-tiny leading-[163%] capitalize tracking-[0.28px] text-greyText pb-40'>
						as you surrender to the enchanting call of the water in your vicini
					</p>
					<div className='flex flex-shrink-0 overflow-hidden w-[100%]  h-[950px]'>
						<LazyImage
							src={heroLeft}
							imgStyle={"relative object-cover w-[200%] h-full animate-camera"}
						/>
					</div>
				</div>
				<div className=' flex flex-col  z-0 border-r-2 border-lightGreyOP'>
					<LazyImage
						src={Riverside}
						imgStyle={"flex flex-shrink-0  -mt-6 h-[45px] bg-white p-1 "}
					/>
					<div className='flex flex-shrink-0 overflow-hidden w-[100%] mt-[35%] h-[950px]'>
						<LazyImage
							src={heroMiddle}
							imgStyle={"relative object-cover w-[200%] h-full animate-camera "}
						/>
					</div>
				</div>
				<div className='flex flex-col'>
					<div className='flex flex-shrink-0 overflow-hidden w-[100%] mt-[15%] h-[950px] '>
						<LazyImage
							src={heroRight}
							imgStyle={"relative object-cover w-[200%] h-full animate-camera"}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
