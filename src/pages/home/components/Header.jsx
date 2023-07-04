import React from "react";
import LazyImage from "../../../components/UI/LazyImage";
import heroLeft from "../../../assets/images/heroLeft.webp";
import heroMiddle from "../../../assets/images/heroMiddle.webp";
import heroRight from "../../../assets/images/heroRight.webp";
import Riverside from "../../../assets/images/330Riverside.svg";
import HeroBottom from "../../../assets/images/photo3.webp";
import { useTranslation } from "react-i18next";
const Header = () => {
	const { i18n, t } = useTranslation();

	return (
		<div className='invisible md:visible px-[3%] '>
			<div className=' grid grid-cols-3 border-t-2 space-x-8 border-lightGreyOP'>
				<div className='flex flex-col justify-start space-y-2 pt-4 border-r-2 border-lightGreyOP'>
					<div dir={i18n.language == "en" ? "" : "rtl"} className='px-4'>
						<p className='flex  flex-col w-[80%] justify-center  flex-shrink-0 text-lightBlack text-big font-bold capitalize leading-[110%]'>
							{t("HeaderTitleOne")}
						</p>
						<p className='flex  flex-col justify-center flex-shrink-0 w-[448px] text-tiny leading-[163%] capitalize tracking-[0.28px] text-greyText pb-36'>
							{t("HeaderSubTitleOne")}
						</p>
					</div>

					<div className='flex flex-shrink-0 overflow-hidden w-[100%]  h-[950px]'>
						<LazyImage
							src={heroLeft}
							alt={"Hero left"}
							imgStyle={"relative object-cover w-[200%] h-full animate-camera"}
						/>
						<div className='flex absolute  ml-[18%] 2xl:ml-[18%] -translate-y-1/2 w-[150px] h-[150px] rounded-[150px] bg-gradient-to-b from-[#bebebe]/50 backdrop-blur-md ' />
					</div>
				</div>
				<div className=' flex flex-col '>
					<div className='z-50'>
						<LazyImage
							src={Riverside}
							alt={"Riverside"}
							imgStyle={"flex flex-shrink-0  -mt-10  bg-white p-1 "}
						/>
					</div>

					<div className='flex flex-shrink-0 overflow-hidden w-[100%] mt-[35%] h-[950px]'>
						<LazyImage
							src={heroMiddle}
							alt={"Hero Middle"}
							imgStyle={"relative object-cover w-[200%] h-full animate-camera "}
						/>
					</div>
				</div>
				<div className='flex flex-col border-l-2 border-lightGreyOP'>
					<div className='flex flex-shrink-0 overflow-hidden w-[100%] mt-[15%] h-[950px] '>
						<LazyImage
							src={heroRight}
							alt={"Hero Right"}
							imgStyle={"relative object-cover w-[200%] h-full animate-camera"}
						/>
					</div>
				</div>
			</div>
			<div className=''>
				<div className='grid grid-cols-3 space-x-8'>
					<div
						dir={i18n.language == "en" ? "" : "rtl"}
						className='flex flex-col justify-start px-[3%]  space-y-2 pt-16 border-r-2 border-lightGreyOP'
					>
						<p className='flex  flex-col w-[80%] justify-center  flex-shrink-0 text-lightBlack text-big font-bold capitalize leading-[110%]'>
							{t("HeaderTitleTwo")}
						</p>
						<p className='flex  flex-col justify-center  flex-shrink-0 text-tiny leading-[163%] capitalize tracking-[0.28px] text-greyText pb-40'>
							{t("HeaderSubTitleTwo")}
						</p>
					</div>
					<div className='flex flex-col col-span-2'>
						<div className='flex flex-shrink-0  w-[100%] -translate-y-56 '>
							<LazyImage src={HeroBottom} imgStyle={"relative object-cover"} />
							<div className='flex absolute bottom-0  w-[53%] h-[120px] bg-gradient-to-b from-white/50 backdrop-blur-sm ' />
						</div>
					</div>
				</div>
			</div>
			<div className=''>
				<p className='text-[#222222] font-semibold 2xl:text-ExtraHuge text-huge flex overflow-x-clip flex-col justify-center capitalize leading-[100%] tracking-[0.2px] text-center whitespace-nowrap 2xl:-translate-y-[340px]  -translate-y-[320px]'>
					{t("HeaderMainTitle")}
				</p>
			</div>
		</div>
	);
};

export default Header;
