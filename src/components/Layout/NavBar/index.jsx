import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../../../assets/logo/AVA-Logo.svg";
import Drawer from "./Drawer";
import LinkElement from "./LinkElement";
import Dropdown from "./Language";
import { MdDehaze } from "react-icons/md";
import Riverside from "../../../assets/images/330Riverside.png";
import LazyImage from "../../UI/LazyImage";
import { FaPlus } from "react-icons/fa";
const NavBar = () => {
	const { t, i18n } = useTranslation();
	const [mobileOpen, setMobileOpen] = useState(false);
	const [header, setHeader] = useState(false);

	let elements = [
		{ name: t("home"), link: "/" },
		{ name: t("Payment"), link: "/payment" },
	];

	const listenScrollEvent = (event) => {
		if (document.documentElement.scrollTop < 100) {
			return setHeader(false);
		} else if (document.documentElement.scrollTop > 110) {
			return setHeader(true);
		}
	};
	useEffect(() => {
		setHeader(false);
		document.addEventListener("scroll", listenScrollEvent);
		return () => {
			document.removeEventListener("scroll", listenScrollEvent);
		};
	}, []);
	return (
		<>
			<div className='flex flex-col justify-center items-center '>
				<div
					dir={i18n.language == "en" ? "" : "rtl"}
					className={`${
						header
							? "shadow-2xl rounded-2xl w-[80%] translate-y-2"
							: "w-[80%]   translate-y-0"
					}   border-white border-2  bg-white transition-all duration-300 z-40 fixed`}
				>
					<div className={`flex justify-between items-center h-16`}>
						<div className='flex-1 flex justify-start items-center'>
							<div className='flex justify-center items-center px-[3%] '>
								<FaPlus color='#222222' className='animate-pulse ' />
								<p className='text-lightBlack text-tiny font-normal uppercase leading-[14.4px] tracking-[2.4px] pl-4 cursor-pointer'>
									{t("register")}
								</p>
							</div>

							{/* {elements.map((e) => (
								<LinkElement
									key={e.link}
									name={e.name}
									link={e.link}
									styled={"hidden md:block px-8 hover:text-purple"}
								/>
							))} */}
						</div>

						<Dropdown />

						<p className='-mr-6 text-lightBlack'>{t("menu")}</p>
						<div
							onClick={() => setMobileOpen(true)}
							className=' px-8 block cursor-pointer'
						>
							<MdDehaze size={24} color='#222222' />
						</div>
					</div>
				</div>
				<div className={`h-24`} />
			</div>
			<Drawer isOpen={mobileOpen} setIsOpen={setMobileOpen}>
				{elements.map((e) => (
					<LinkElement
						key={e.link}
						name={e.name}
						link={e.link}
						onClick={() => setMobileOpen(false)}
					/>
				))}
			</Drawer>
		</>
	);
};

export default NavBar;
