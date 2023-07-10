import React from "react";
import photo2 from "../../../assets/images/photo2.png";
import { useTranslation } from "react-i18next";

const Element = ({ name, color }) => {
	return (
		<div className='flex justify-start items-center'>
			<div
				style={{ borderColor: color }}
				className={`bg-white p-1 border-[1px] rounded-full w-10 h-10 lg:w-14 lg:h-14`}
			>
				<div
					style={{
						backgroundColor: color,
						opacity: 0.3,
					}}
					className={` rounded-full h-full w-full`}
				/>
			</div>
			<p className='px-4 font-normal text-small '> {name}</p>
		</div>
	);
};

const Location = () => {
	const { i18n, t } = useTranslation();
	return (
		<div
			className='relative h-[800px] md:h-[1150px] lg:h-[800px] xl:h-[830px] 2xl:h-[950px]  grid grid-cols-12'
			dir={i18n.language == "en" ? "ltr" : "rtl"}
		>
			<div className='border-r-[1px] border-l-[1px] border-gray-300 col-span-4' />
			<div className='border-r-[1px] border-gray-300 col-span-4' />
			<div className='border-r-[1px] border-gray-300 col-span-4' />
			<div className='absolute max-md:pt-16 bg-transparent h-full w-full'>
				<div className='hidden md:block text-9xl bg-transparent text-black py-14 w-full overflow-hidden'>
					<p className='animate-textCamera relative whitespace-nowrap'>
						Site Loc
						<span className='border-text text-transparent'>ation Mast</span>
						erplan
					</p>
				</div>
				<div className='lg:grid lg:grid-cols-12 max-lg:space-y-8'>
					<div className='lg:px-10 xl:px-16 col-span-4 space-y-4 lg:space-y-8 max-lg:px-8'>
						<p className='font-bold text-bigger lg:text-huge'>
							{t("locationTitle")}
						</p>
						<Element color={"#27AE60"} name={"Apartment Club House"} />
						<Element color={"#D35400"} name={"Lagoon"} />
						<Element color={"#8E44AD"} name={"Low Rise Villa Community"} />
						<Element color={"#2980B9"} name={"Low Rise Villa Community"} />
					</div>
					<div className='col-span-8 max-md:pt-8'>
						<img src={photo2} alt='' className='h-full w-full' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Location;
