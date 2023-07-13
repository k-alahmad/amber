import React from "react";
import { useTranslation } from "react-i18next";
const Circle = ({ number, customStyle, text }) => {
	return (
		<div
			className={`absolute ${customStyle} -top-10 sm:-top-12 w-24 sm:w-28 flex flex-col justify-center items-center`}
		>
			<div
				className={`bg-[#36454f]/20 rounded-full w-20 h-20  sm:w-24 sm:h-24  flex justify-center items-center `}
			>
				<div className='bg-[#222222] rounded-full w-14 h-14 sm:w-16 sm:h-16 flex justify-center items-center text-white font-medium text-small '>
					{number}%
				</div>
			</div>
			<p className='text-center text-tiny sm:text-[14px] pt-3 font-semibold'>
				{text}
			</p>
		</div>
	);
};

const PaymentPlan = () => {
	const { i18n, t } = useTranslation();
	return (
		<div
			className='relative h-[600px] sm:h-[600px] xl:h-[400px] grid grid-cols-12 border-b-[1px]  '
			dir={i18n.language == "en" ? "" : "rtl"}
		>
			<div className='border-r-[1px] border-l-[1px] border-gray-800 col-span-4' />
			<div className='border-r-[1px] border-gray-800 col-span-4' />
			<div className='border-r-[1px] border-gray-800 col-span-4' />

			<div className='absolute h-full w-full xl:grid xl:grid-cols-12 max-lg:space-y-2 max-lg:pt-24'>
				<div className='col-span-4 flex justify-start items-center font-bold text-huge xl:p-12 max-xl:px-4'>
					{t("PaymentPlan")}
				</div>
				<div className='col-span-4 '>
					<p className='text-small text-[#909090] pb-32 p-4'>
						{t("PaymentPlanType")}
					</p>
					<div className='relative flex flex-col w-full'>
						<div className=' w-full h-[2px] bg-[#909090] self-center ' />
						<Circle
							number={20}
							customStyle={"left-[4%] capitalize"}
							text={t("BookingAmount")}
						/>
						<Circle
							number={10}
							customStyle={"left-[30%] capitalize"}
							text={t("installments")}
						/>
						<Circle
							number={40}
							customStyle={"left-[55%] capitalize"}
							text={t("installments")}
						/>
						<Circle
							number={30}
							customStyle={"left-[78%] capitalize"}
							text={t("finalInsallment")}
						/>
						{/* <Circle
							number={10}
							customStyle={"left-[75%] "}
							text={"instalments after handover for a period of time."}
						/> */}
					</div>
				</div>
				<div className='col-span-4 flex flex-col justify-center items-center xl:items-start max-xl:pt-28 xl:p-12'>
					<p className='text-big font-medium'>{t("price")} </p>
					<p className='text-huge font-bold'>AED598K</p>
				</div>
			</div>
		</div>
	);
};

export default PaymentPlan;
