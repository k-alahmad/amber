import React from "react";
import { useTranslation } from "react-i18next";
import BrochureImg from "../../../assets/images/Brochure.webp";
import { useDispatch, useSelector } from "react-redux";
import {
	downloadBrochure,
	selectRegisterState,
	showModal,
} from "../../../redux/modal.slice";
import BrochurePdf from "../../../assets/pdf/330.pdf";
const Brochure = () => {
	const { i18n, t } = useTranslation();
	const dispatch = useDispatch();
	const registerState = useSelector(selectRegisterState);
	return (
		<div
			className='bg-[#101314] w-full  px-[10%] flex flex-col justify-center items-center'
			dir={i18n.language == "en" ? "ltr" : "rtl"}
		>
			<img
				src={BrochureImg}
				alt='Brochure'
				className='md:h-[400px] w-[300px] object-fill col-start-4 col-span-2 -mt-44 lg:hidden'
			/>
			{/* <div className='absolute top-0 -left-4 w-72 h-72 bg-orange-600 rounded-full mix-blend-multiply filter blur-xl'></div>
			<div className='absolute top-0 -right-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl'></div>
			<div className='absolute -bottom-8 left-20 w-72 h-72 bg-red-700 rounded-full mix-blend-multiply filter blur-xl'></div> */}
			<div className='text-white lg:grid lg:grid-cols-5 max-lg:py-4'>
				<div className='self-center space-y-2 col-span-2'>
					<p className='font-bold tracking-[0.28px] text-med md:text-big xl:text-huge'>
						{t("brochurDownload")}
						{/* Download your Copy of the Brochure */}
					</p>
					<button
						className='bg-white rounded-md font-bold p-2 text-lg hover:bg-gray-500 text-lightBlack w-full lg:w-[280px]'
						onClick={() => {
							if (registerState) {
								let alink = document.createElement("a");
								alink.href = BrochurePdf;
								alink.download = "BrochurePdf.pdf";
								alink.click();
							} else {
								dispatch(downloadBrochure());
								dispatch(showModal());
							}
						}}
					>
						{t("download")}
					</button>
				</div>
				<img
					src={BrochureImg}
					alt='Brochure'
					className=' object-fill col-start-4 col-span-2 h-full hidden lg:block relative'
				/>
			</div>
			<div className='h-[1px] w-full bg-gray-500 relative ' />
		</div>
	);
};

export default Brochure;
