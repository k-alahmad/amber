import React from "react";
import LazyImage from "../../../components/UI/LazyImage";
import { useTranslation } from "react-i18next";
import BrochureImg from "../../../assets/images/Brochure.webp";
const Brochure = () => {
	const { i18n, t } = useTranslation();
	return (
		<div className='relative  flex p-4 bg-lightBlack mt-40  text-white border-b-2 border-gray-400'>
			<div
				className=' max-w-[300px] p-4  justify-center mx-20 items-center'
				dir={i18n.language == "en" ? "ltr" : "rtl"}
			>
				<p className='font-bold tracking-[0.28px] w-[70%] pb-2 text-big md:text-huge '>
					{t("brochurDownload")}
				</p>
				<button className='bg-white rounded-md w-[70%]  p-2 text-lg hover:bg-gray-500 text-lightBlack'>
					{t("download")}
				</button>
			</div>
			<div className='order-1  '>
				<img
					src={BrochureImg}
					className='absolute w-[150px] h-[200px] md:w-[400px] md:h-[300px] right-0 -translate-y-28'
				/>
			</div>
		</div>
	);
};

export default Brochure;
