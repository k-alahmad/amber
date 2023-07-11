import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import photo1 from "../../../assets/images/register.webp";
import {
	MdLocationOn,
	MdMail,
	MdPhone,
	MdPerson,
	//   MdMessage
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { hideModal, register } from "../../../redux/modal.slice";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import emailjs from "@emailjs/browser";

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

const CustomInput = ({ icon, placeholder, name, id, value, onChange }) => {
	return (
		<div className='border-b-[1px] border-black px-4 py-3 flex'>
			{icon}
			<input
				type='text'
				className='bg-transparent  px-2 w-full outline-none'
				name={name}
				onChange={onChange}
				placeholder={placeholder}
				id={id}
				value={value}
			/>
		</div>
	);
};
function Register({ absolute }) {
	const dispatch = useDispatch();
	const { i18n, t } = useTranslation();

	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_5wdnu6j",
				"template_slqqcpm",
				form.current,
				"sxh5TJan60LQqD6Sw",
			)
			.then(
				(result) => {
					console.log(result.text);
					// window.location.reload(false);
				},
				(error) => {
					console.log(error.text);
				},
			);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let formData = new FormData(form.current);
		try {
			const response = await fetch(
				"https://hooks.zapier.com/hooks/catch/12792925/3mu1uvg/",
				{
					method: "POST",
					body: formData,
					"Content-Type": "multipart/form-data",
				},
			);
			const result = response.json();
			console.log("Success:", result);
			sendEmail(e);
			dispatch(register());
			localStorage.setItem("Registered", true);
			dispatch(hideModal());
		} catch (error) {
			console.error("Error here:", error);
		}
	};

	return (
		<div
			dir={i18n.language == "en" ? "ltr" : "rtl"}
			className={`md:grid md:grid-cols-12  bg-transparent`}
		>
			<div className='col-span-8 p-8 lg:px-16 xl:grid xl:grid-cols-12 gap-6'>
				<div className='col-span-6 space-y-12 flex flex-col justify-center items-stretch'>
					<p className='font-bold text-bigger xl:text-huge '>{t("slogan")}</p>
					<p className='font-light text-small'>{t("formSubTitle")}</p>
					<div className='space-y-6 pt-8'>
						<SocialElement
							icon={<MdLocationOn className='text-white' />}
							name={t("address")}
						/>
					</div>
				</div>
				<form
					ref={form}
					onSubmit={handleSubmit}
					className='col-span-6 space-y-12 max-lg:pt-8 flex flex-col justify-center items-stretch'
				>
					<CustomInput
						icon={<MdPerson className='text-black text-big' />}
						placeholder={t("formFullName")}
						name='fullName'
						id='fullName'
					/>

					<CustomInput
						icon={<MdMail className='text-black text-big' />}
						placeholder={t("formEmail")}
						name='email'
						id='email'
					/>
					<PhoneInput
						country={"ae"}
						placeholder={t("formPhoneNumber")}
						enableSearch={true}
						inputProps={{
							name: "phone",
							id: "phone",
							required: true,
						}}
						containerClass='!border-b-[1px] border-black px-1 flex '
						inputClass={`!bg-transparent !w-full !text-lg !h-full !border-none  ${
							i18n.language == "en" ? "px-0" : "mx-10"
						} !outline-none`}
						buttonClass={`!border-none !text-lg `}
						buttonStyle={{ direction: "ltr" }}
						inputStyle={{
							direction: "ltr",
						}}
					/>
					<button className='bg-[#222222] text-white text-small w-full py-4 '>
						{t("register")}
					</button>
				</form>
			</div>
			<div className='col-span-4 '>
				<img
					src={photo1}
					alt='Register Image'
					className='w-full max-md:h-[300px] md:h-[700px] object-cover'
				/>
			</div>
		</div>
	);
}

export default Register;
