import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
//floor plan images
import studioa from "../../../assets/images/floorplan/studioa.svg";
import studiob from "../../../assets/images/floorplan/studiob.svg";
import onebra from "../../../assets/images/floorplan/onebra.svg";
import onebrb from "../../../assets/images/floorplan/onebrb.svg";
import twobra from "../../../assets/images/floorplan/twobra.svg";
import twobrb from "../../../assets/images/floorplan/twobrb.svg";
import mainFloor from "../../../assets/images/floorplan/main.webp";
import Slider from "react-slick";
import {
	MdFiberManualRecord as FiberManualRecordIcon,
	MdOutlineFiberManualRecord as OutFiberManualRecordIcon,
} from "react-icons/md";
import LazyImage from "../../../components/UI/LazyImage";
import { useDispatch, useSelector } from "react-redux";
import {
	counterIsFull,
	counterIsNotFull,
	selectCounterState,
	selectRegisterState,
	showModal,
} from "../../../redux/modal.slice";
const FloorPlan = () => {
	const dispatch = useDispatch();
	const registerState = useSelector(selectRegisterState);
	const counterState = useSelector(selectCounterState);
	const { i18n, t } = useTranslation();
	const [selected, setSelected] = useState(0);
	const [disablebtn, setDisableBtn] = useState(false);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [ViewCounter, setViewCounter] = useState(0);

	useEffect(() => {
		console.log(counterState);
		console.log(registerState);
		if (registerState !== true) {
			if (ViewCounter >= 3)
				if (counterState !== true) {
					dispatch(counterIsFull());
				}
		} else {
			dispatch(counterIsNotFull());
		}
	}, [ViewCounter, counterState, registerState]);

	let floorData = [
		{
			name: "Studio",
			color: "#E3E2E2",
			image: studioa,
			bedRoomNumber: "Studio",
			type: "TYPE A (with balcony)",
			total: "458.43 SQ.FT",
		},
		{
			name: "1BR",
			color: "#6F6F6F",
			image: onebra,
			bedRoomNumber: "1BR",
			type: "TYPE A (with balcony)",
			total: "682.75 SQ.FT",
		},
		{
			name: "2BR",
			color: "#A2A2A3",
			image: twobra,
			bedRoomNumber: "2BR",
			type: "TYPE A (with balcony)",
			total: "1175.74 SQ.FT",
		},
		{
			name: "Studio",
			color: "#E3E2E2",
			image: studiob,
			bedRoomNumber: "Studio",
			type: "TYPE B (with balcony)",
			total: "458.43 SQ.FT",
		},
		{
			name: "1BR",
			color: "#6F6F6F",
			image: onebrb,
			bedRoomNumber: "1BR",
			type: "TYPE B (with balcony)",
			total: "682.75 SQ.FT",
		},
		{
			name: "2BR",
			color: "#A2A2A3",
			image: twobrb,
			bedRoomNumber: "2BR",
			type: "TYPE B (with balcony)",
			total: "1175.74 SQ.FT",
		},
	];
	const GridElement = ({ name, onClick, index, color }) => {
		return (
			<div
				onClick={onClick}
				dir={i18n.language == "en" ? "ltr" : "rtl"}
				style={{ backgroundColor: color }}
				className={`mb-6 text-[#0047ab] p-3 w-20 rounded  cursor-pointer transition-all duration-300 text-center ${
					index == selected ? "bg-opacity-70" : ""
				}`}
			>
				<p className='text-smaller font-bold'> {name}</p>
			</div>
		);
	};
	const slideRef1 = useRef();
	const slideRef2 = useRef();

	const ColorPaletteItem = ({ text, color, customStyle }) => {
		return (
			<div className={`flex justify-start items-center gap-x-3 ${customStyle}`}>
				<div className='h-8 w-8 rounded' style={{ backgroundColor: color }} />
				<p className='text-smaller font-semibold'> {text}</p>
			</div>
		);
	};

	return (
		<div
			className='relative h-[1650px] lg:h-[900px] grid grid-cols-12 '
			dir={i18n.language == "en" ? "" : "rtl"}
		>
			<div className='border-r-[1px] border-l-[1px] border-gray-800 col-span-4' />
			<div className='border-r-[1px] border-gray-800 col-span-4' />
			<div className='border-r-[1px] border-gray-800 col-span-4' />
			<div className='absolute pt-4 bg-transparent h-full w-full'>
				<div
					className='text-huge font-bold lg:w-[35%] w-[90%] px-[5%]'
					dir={i18n.language == "en" ? "" : "rtl"}
				>
					{t("floorTitle")}
				</div>

				<div className='lg:grid lg:grid-cols-12 pt-12 '>
					<div className='col-span-4 flex flex-col justify-start items-center'>
						<div
							className='w-[320px] sm:w-[610px] md:w-[750px] lg:w-[330px] xl:w-[410px] 2xl:w-[500px] h-[140px] sm:h-[260px] md:h-[290px] lg:h-[140px] xl:h-[170px] 2xl:h-[260px] relative bg-no-repeat bg-contain font-medium text-tiny sm:translate-y-24 sm:max-lg:bg-center'
							style={{
								backgroundImage: `url(${mainFloor})`,
							}}
						></div>

						<Slider
							ref={slideRef1}
							dots={true}
							infinite={true}
							speed={600}
							slidesToScroll={3}
							slidesToShow={3}
							touchMove={true}
							arrows={false}
							className='text-white mt-32 max-w-[300px] '
							customPaging={(index) => {
								return index == currentSlide ? (
									<div key={index} className='text-white text-med py-2'>
										<FiberManualRecordIcon />
									</div>
								) : (
									<div key={index} className='text-white text-med py-2'>
										<OutFiberManualRecordIcon />
									</div>
								);
							}}
							appendDots={(dots) => {
								return (
									<ul>
										{dots.map((item, index) => {
											return item;
										})}
									</ul>
								);
							}}
							beforeChange={(prev, next) => {
								setCurrentSlide(next / 3);
							}}
						>
							{floorData.map((e, i) => {
								return (
									<GridElement
										key={i}
										name={e.name}
										bedRoomNumber={e.bedRoomNumber}
										onClick={() => {
											slideRef1.current.slickGoTo(i);
											slideRef2.current.slickGoTo(i);
											setSelected(i);
											setDisableBtn(true);
											setTimeout(() => {
												setDisableBtn(false);
											}, 400);
										}}
										color={e.color}
										index={i}
									/>
								);
							})}
						</Slider>
						<div className='grid grid-cols-2 mt-12 gap-3'>
							<ColorPaletteItem color={"#E3E2E2"} text={"Studio UNIT"} />
							<ColorPaletteItem color={"#6F6F6F"} text={"1 BR UNIT"} />
							<ColorPaletteItem color={"#A2A2A3"} text={"2 BR UNIT"} />
						</div>
					</div>
					<div className='col-span-4 flex justify-center items-center sm:max-lg:pt-28'>
						<Slider
							ref={slideRef1}
							dots={false}
							infinite={false}
							speed={300}
							slidesToScroll={1}
							slidesToShow={1}
							touchMove={false}
							className=' h-full w-[300px] sm:w-[600px] md:w-[700px] lg:w-[300px] xl:w-[350px] 2xl:w-[500px] px-[3%]'
							arrows={false}
						>
							{floorData.map((d, i) => {
								return (
									// <div key={i}>
									<LazyImage
										key={i}
										src={d.image}
										divStyle={"h-[500px] xl:h-[600px] w-full"}
										skelatonStyle={"h-[500px] xl:h-[600px] w-full"}
										alt={d.name}
										imgStyle={
											"h-[500px] xl:h-[600px] w-full object-conatin rounded"
										}
									/>
									// </div>
								);
							})}
						</Slider>
					</div>
					<div className='col-span-4 flex flex-col justify-center items-center sm:max-lg:pt-12'>
						<Slider
							ref={slideRef2}
							dots={false}
							arrows={false}
							infinite={false}
							speed={300}
							centerMode
							slidesToScroll={1}
							slidesToShow={1}
							vertical={true}
							touchMove={false}
							className='h-full max-w-[300px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[300px] xl:max-w-[350px] 2xl:max-w-[500px]'
						>
							{floorData.map((d, i) => {
								return (
									<div
										key={i}
										dir={i18n.language == "en" ? "" : "rtl"}
										className=' w-full h-[500px] xl:h-[700px] flex flex-col justify-center items-center'
									>
										{/* <p className='text-big font-bold rounded-lg py-1 flex justify-start mt-5'>
											{t("roomCode")}
											<span
												style={{
													color: d.color,
												}}
											>
												{d.name}
											</span>
										</p> */}
										<p className='font-bold text-bigger'>{d.bedRoomNumber}</p>
										<p className='text-white text-med'>{d.type}</p>

										<p className='font-bold text-bigger pt-12'>
											{t("floorTotalSaleable")}
										</p>
										<p className='text-med text-white '>
											{t("floorTotal")} = {d.total}
										</p>
									</div>
								);
							})}
						</Slider>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FloorPlan;
