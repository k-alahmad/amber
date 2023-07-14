import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown } from "react-icons/io";
import {
	MdLanguage,
	MdRadioButtonChecked,
	MdRadioButtonUnchecked,
} from "react-icons/md";
export default function Dropdown() {
	const { t, i18n } = useTranslation();
	const [open, setOpen] = useState(false);
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
		localStorage.setItem("lng", lng);
	};

	const ref = useRef(null);

	const handleClickOutside = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setOpen(false);
		}
	};
	useEffect(() => {
		document.addEventListener("click", handleClickOutside, true);
		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, []);

	return (
		<div className='rounded-md'>
			<div className='relative'>
				<div
					style={{ WebkitTapHighlightColor: "transparent" }}
					className=' p-0 m-0 px-8 cursor-pointer'
					onClick={() => setOpen(!open)}
				>
					{/* <RiEnglishInput size={20} color='#3b3b3b' /> */}
					<div className='flex border-r-2 border-white'>
						<p className='text-white block px-2'>{t("code")}</p>
						<IoIosArrowDown size={24} color='#ffff' className='mx-2' />
					</div>
				</div>

				<div
					ref={ref}
					onClick={() => setOpen(false)}
					className={`${
						open ? "scale-100" : "scale-0"
					} absolute z-10 mt-4 origin-top bg-[#36454f] border-white border-2 rounded-lg shadow-2xl transition-all duration-300 p-4 space-y-2  font-MED text-smaller w-40`}
				>
					<div
						className='flex justify-start items-center'
						onClick={() => {
							changeLanguage("en");
						}}
					>
						<div className='px-2 cursor-pointer'>
							{i18n.language === "en" ? (
								<MdRadioButtonChecked size={24} />
							) : (
								<MdRadioButtonUnchecked size={24} />
							)}
						</div>
						<p className='text-white cursor-pointer'>{t("English")}</p>
					</div>

					<div
						className='flex justify-start items-center'
						onClick={() => {
							changeLanguage("ar");
						}}
					>
						<div className='px-2 cursor-pointer'>
							{i18n.language === "ar" ? (
								<MdRadioButtonChecked size={24} />
							) : (
								<MdRadioButtonUnchecked size={24} />
							)}
						</div>
						<p className='text-white cursor-pointer'>{t("Arabic")}</p>
					</div>
					<div
						className='flex justify-start items-center'
						onClick={() => {
							changeLanguage("fa");
						}}
					>
						<div className='px-2 cursor-pointer'>
							{i18n.language === "fa" ? (
								<MdRadioButtonChecked size={24} />
							) : (
								<MdRadioButtonUnchecked size={24} />
							)}
						</div>
						<p className='text-white cursor-pointer'>{t("Persian")}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
