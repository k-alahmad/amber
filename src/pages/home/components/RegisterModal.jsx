import React, { useRef, useEffect } from "react";
import { MdClose } from "react-icons/md";
import Register from "./Register";
import { useDispatch, useSelector } from "react-redux";
import { hideModal, selectState } from "../../../redux/modal.slice";

export default function Modal() {
	const ref = useRef(null);
	const dispatch = useDispatch();
	const open = useSelector(selectState);
	const handleClickOutside = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			dispatch(hideModal());
		}
	};
	useEffect(() => {
		document.addEventListener("click", handleClickOutside, true);
		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, []);
	return (
		<>
			<div
				className={`${
					open ? "scale-100" : "scale-0"
				} transition-all duration-500 justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none w-full`}
			>
				<div
					ref={ref}
					className='rounded-lg shadow-lg relative flex flex-col bg-lightBlack outline-none focus:outline-none overflow-x-hidden overflow-y-scroll max-h-screen max-w-[95%] xl:max-w-[80%]'
				>
					<div
						onClick={() => {
							dispatch(hideModal());
						}}
						className='cursor-pointer font-bold self-center text-black hover:scale-125 hover:rotate-180 fixed md:absolute right-5 top-3 transition-all duration-300'
					>
						<MdClose size={50} />
					</div>
					<Register modal={true} />
				</div>
			</div>
			<div
				className={`${
					open ? "scale-100" : "scale-0"
				} opacity-20 fixed h-screen inset-0 z-40 bg-black`}
			></div>
		</>
	);
}
