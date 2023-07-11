import React from "react";
import { useTranslation } from "react-i18next";
import BrochureImg from "../../../assets/images/Brochure.webp";
const Brochure = () => {
	const { i18n, t } = useTranslation();
	return (
		<div className='bg-lightBlack w-full  px-[10%] flex flex-col justify-center items-center'>
			<img
				src={BrochureImg}
				alt='Brochure'
				className='h-[400px] w-[300px] object-fill col-start-4 col-span-2 -mt-44 lg:hidden'
			/>
			<div className='text-white lg:grid lg:grid-cols-5 max-lg:py-4'>
				<div
					className='self-center space-y-2 col-span-2'
					dir={i18n.language == "en" ? "ltr" : "rtl"}
				>
					<p className='font-bold tracking-[0.28px] text-med md:text-big xl:text-huge'>
						{t("brochurDownload")}
						{/* Download your Copy of the Brochure */}
					</p>
					<button className='bg-white rounded-md font-bold p-2 text-lg hover:bg-gray-500 text-lightBlack w-full lg:w-[280px] '>
						{t("download")}
					</button>
				</div>
				<img
					src={BrochureImg}
					alt='Brochure'
					className='h-[400px] w-full object-fill col-start-4 col-span-2 -mt-28 hidden lg:block relative'
				/>
			</div>
			<div className='h-[1px] w-full bg-gray-500 relative ' />
		</div>
	);
};

export default Brochure;
