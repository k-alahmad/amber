import React from "react";
import { useTranslation } from "react-i18next";
import photo1 from "../../../assets/images/photo1.png";
import {
	MdLocationOn,
	MdMail,
	MdPhone,
	MdPerson,
	//   MdMessage
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { hideModal } from "../../../redux/modal.slice";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import ar from "react-phone-input-2/lang/ar.json";

const SocialElement = ({ icon, name }) => {
	return (
		<div className='flex items-center'>
			<div className='w-12 h-12 bg-[#222222] text-big flex justify-center items-center'>
				{icon}
			</div>
			<p className='font-bold text-base px-4 '>{name}</p>
		</div>
	);
};

const CustomInput = ({ icon, placeholder, name, onChange }) => {
	return (
		<div className='border-b-[1px] border-black px-4 py-3 flex'>
			{icon}
			<input
				type='text'
				className='bg-transparent  px-2 w-full outline-none'
				name={name}
				onChange={onChange}
				placeholder={placeholder}
			/>
		</div>
	);
};

const Register = ({ Registered }) => {
	const { i18n, t } = useTranslation();
	const dispatch = useDispatch();
	return (
		<div className='bg-[#F3F3F3] md:grid md:grid-cols-12 '>
			<div className='col-span-8 p-8 lg:px-16 xl:grid xl:grid-cols-12 gap-6'>
				<div className='col-span-6 space-y-6'>
					<p className='font-bold text-bigger '>{t("slogan")}</p>
					<p className='font-light text-small'>{t("formSubTitle")}</p>
					<div className='space-y-6 pt-8'>
						<SocialElement
							icon={<MdLocationOn className='text-white ' />}
							name={t("address")}
						/>
						{/* <SocialElement
							icon={<MdMail className='text-white' />}
							name={"www.avarealestate.ae"}
						/> */}
						{/* <SocialElement
							icon={<MdPhone className='text-white' />}
							name={"065486264841 - 545631654653"}
						/> */}
					</div>
				</div>
				<div className='col-span-6 space-y-6 max-lg:pt-8 '>
					<CustomInput
						icon={<MdPerson className='text-black text-big' />}
						placeholder={t("formFullName")}
					/>

					{/* <CustomInput
						icon={<MdPhone className='text-black text-big' />}
						placeholder={t("formPhoneNumber")}
					/> */}
					<CustomInput
						icon={<MdMail className='text-black text-big' />}
						placeholder={t("formEmail")}
					/>
					<PhoneInput
						country={"ae"}
						placeholder={t("formPhoneNumber")}
						enableSearch={true}
						containerClass='!border-b-[1px] border-black px-1 flex  '
						inputClass={`!bg-transparent  w-full  !text-lg !h-full !border-none  ${
							i18n.language == "en" ? "px-0" : "mx-6"
						} !outline-none `}
						buttonClass={`!border-none !text-lg ${
							i18n.language == "en" ? "px-0" : "!mx-3"
						}`}
					/>
					{/* <div className='border-b-[1px] border-black px-4 py-3 flex'>
						<MdMessage className='text-black text-big' />
						<textarea
							type='text'
							className='border-gray-400 rounded-lg bg-transparent mx-3 px-3 w-full outline-none'
							rows={8}
							placeholder='Message'
						/>
					</div> */}
					<button
						className='bg-[#222222] text-white text-small w-full py-4 '
						onClick={() => {
							localStorage.setItem("Registered", true);
							Registered = true;

							dispatch(hideModal());
						}}
					>
						{t("register")}
					</button>
				</div>
			</div>
			<div className='col-span-4'>
				<img
					src={photo1}
					alt=''
					className='w-full max-md:h-[300px] md:h-full object-cover'
				/>
			</div>
		</div>
	);
};

export default Register;
