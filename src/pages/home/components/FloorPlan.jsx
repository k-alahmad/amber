import React, { useEffect, useRef, useState } from "react";
import floor1 from "../../../assets/images/floorplan/Floor003.svg";
import floor2 from "../../../assets/images/floorplan/Floor005.svg";
import floor3 from "../../../assets/images/floorplan/Floor006.svg";
import mainFloor from "../../../assets/images/floorplan/main.svg";

import Slider from "react-slick";
const FloorPlan = () => {
	const [selected, setSelected] = useState(0);
	const [disablebtn, setDisableBtn] = useState(false);
	let floorData = [
		{
			//XX01
			image: floor1,
			bedRoomNumber: 1,
			type: "TYPE D (with store room and powder room + balcony)",
			suite: "692.87 SQ.FT.",
			balcony: "59.09 SQ.FT.",
			total: "828.17 SQ.FT",
		},
		{
			//XX02
			image: floor2,
			bedRoomNumber: 2,
			type: "TYPE D (with balcony)",
			suite: "811.92 SQ.FT.",
			balcony: "132.40 SQ.FT.",
			total: "944.32 SQ.FT",
		},
		{
			//XX03
			image: floor3,
			bedRoomNumber: 1,
			type: "TYPE A (with balcony)",
			suite: "444.66 SQ.FT.",
			balcony: "55.97 SQ.FT.",
			total: "500.63 SQ.FT",
		},
		{
			//XX04
			image: floor3,
			bedRoomNumber: 1,
			type: "TYPE A (with balcony) - VARIANT 1",
			suite: "441.00 SQ.FT.",
			balcony: "55.22 SQ.FT.",
			total: "496.22 SQ.FT",
		},
		{
			//XX05
			image: floor3,
			bedRoomNumber: 1,
			type: "TYPE A (with balcony)",
			suite: "444.66 SQ.FT.",
			balcony: "55.97 SQ.FT.",
			total: "500.63 SQ.FT",
		},
		{
			//XX06
			image: floor3,
			bedRoomNumber: 1,
			type: "TYPE A (with balcony)",
			suite: "444.66 SQ.FT.",
			balcony: "55.97 SQ.FT.",
			total: "500.63 SQ.FT",
		},
		{
			//XX07
			image: floor3,
			bedRoomNumber: 1,
			type: "TYPE A (with balcony)",
			suite: "444.66 SQ.FT.",
			balcony: "55.97 SQ.FT.",
			total: "500.63 SQ.FT",
		},
		{
			//XX08
			image: floor3,
			bedRoomNumber: 1,
			type: "TYPE C (with powder room + balcony)",
			suite: "789.21 SQ.FT.",
			balcony: "59.09 SQ.FT.",
			total: "848.30 SQ.FT",
		},
		{
			//XX09
			image: floor3,
			bedRoomNumber: 1,
			type: "TYPE C (with powder room + balcony) - VARIANT 1",
			suite: "777.15 SQ.FT.",
			balcony: "59.09 SQ.FT.",
			total: "836.24 SQ.FT",
		},
		{
			//XX10
			image: floor3,
			bedRoomNumber: 1,
			type: "TYPE A (with balcony)",
			suite: "789.21 SQ.FT.",
			balcony: "59.09 SQ.FT.",
			total: "848.30 SQ.FT",
		},
		{
			//XX11
			image: floor3,
			bedRoomNumber: 1,
			type: "TYPE A (with balcony)",
			suite: "444.66 SQ.FT.",
			balcony: "55.97 SQ.FT.",
			total: "500.63 SQ.FT",
		},
		{
			//XX12
			image: floor3,
			bedRoomNumber: 1,
			type: "TYPE A (with balcony)",
			suite: "444.66 SQ.FT.",
			balcony: "55.97 SQ.FT.",
			total: "500.63 SQ.FT",
		},
		{
			//XX13
			image: floor3,
			bedRoomNumber: 1,
			type: "TYPE A (with balcony) - VARIANT 2",
			suite: "445.84 SQ.FT.",
			balcony: "55.97 SQ.FT.",
			total: "501.81 SQ.FT",
		},
		{
			//XX14
			image: floor3,
			bedRoomNumber: 1,
			type: "TYPE A (with balcony)",
			suite: "444.66 SQ.FT.",
			balcony: "55.97 SQ.FT.",
			total: "500.63 SQ.FT",
		},
		{
			//XX15
			image: floor3,
			bedRoomNumber: 1,
			type: "TYPE C (with powder room + balcony) - VARIANT 2",
			suite: "785.12 SQ.FT.",
			balcony: "59.09 SQ.FT.",
			total: "844.21 SQ.FT",
		},
	];

	const slideRef1 = useRef();
	const slideRef2 = useRef();

	const FloorButton = ({ text, customStyle, i }) => {
		return (
			<button
				disabled={i == selected || disablebtn}
				onClick={() => {
					slideRef1.current.slickGoTo(i);
					slideRef2.current.slickGoTo(i);
					setSelected(i);
					setDisableBtn(true);
					setTimeout(() => {
						setDisableBtn(false);
					}, 400);
				}}
				className={`absolute cursor-pointer flex justify-center items-center hover:animate-pulse bg-red-500  ${customStyle} `}
			>
				{text}
			</button>
		);
	};
	return (
		<div className='relative h-[1500px] lg:h-[1050px] grid grid-cols-12'>
			<div className='border-r-[1px] border-l-[1px] border-gray-400 col-span-4' />
			<div className='border-r-[1px] border-gray-400 col-span-4' />
			<div className='border-r-[1px] border-gray-400 col-span-4' />

			<div className='absolute pt-16 bg-transparent h-full w-full'>
				<div className='text-huge font-bold lg:w-[30%] px-[3%]'>
					FLOOR PLAN AND UNIT PLANS
				</div>
				<div className='lg:grid lg:grid-cols-12 pt-12'>
					<div className='col-span-4 flex flex-col justify-center items-center'>
						<div
							className='2xl:w-[500px] h-[260px] relative bg-no-repeat font-medium text-tiny'
							style={{
								backgroundImage: `url(${mainFloor})`,
							}}
						>
							<FloorButton
								customStyle={"h-16 w-10 2xl:top-[70px] 2xl:left-[6px]"}
								text={"XX05"}
								i={4}
							/>
							<FloorButton
								customStyle={"h-10 w-10 2xl:top-[55px] 2xl:left-[55px]"}
								text={"XX06"}
								i={5}
							/>
							<FloorButton
								customStyle={"h-14 w-14 2xl:top-[35px] 2xl:left-[130px]"}
								text={"XX07"}
								i={6}
							/>
							<FloorButton
								customStyle={"h-14 w-12 2xl:top-[15px] 2xl:left-[200px]"}
								text={"XX08"}
								i={7}
							/>
							<FloorButton
								customStyle={"h-14 w-12 2xl:top-[15px] 2xl:right-[200px]"}
								text={"XX09"}
								i={8}
							/>
							<FloorButton
								customStyle={"h-14 w-12 2xl:top-[25px] 2xl:right-[150px]"}
								text={"XX10"}
								i={9}
							/>
							<FloorButton
								customStyle={"h-16 w-24 2xl:top-[35px] 2xl:right-[52px]"}
								text={"XX11"}
								i={10}
							/>
							<FloorButton
								customStyle={"h-20 w-12 2xl:top-[60px] 2xl:right-[1px]"}
								text={"XX12"}
								i={11}
							/>
							<FloorButton
								customStyle={"h-14 w-12 2xl:top-[110px] 2xl:right-[50px]"}
								text={"XX13"}
								i={12}
							/>

							<FloorButton
								customStyle={"h-20 w-14 2xl:top-[110px] 2xl:right-[145px]"}
								text={"XX14"}
								i={13}
							/>
							<FloorButton
								customStyle={"h-20 w-11 2xl:top-[125px] 2xl:right-[205px]"}
								text={"XX15"}
								i={14}
							/>
							<FloorButton
								customStyle={"h-20 w-12 2xl:top-[125px] 2xl:left-[200px]"}
								text={"XX01"}
								i={0}
							/>
							<FloorButton
								customStyle={"h-20 w-12 2xl:top-[110px] 2xl:left-[150px]"}
								text={"XX02"}
								i={1}
							/>
							<FloorButton
								customStyle={"h-16 w-12 2xl:top-[110px] 2xl:left-[100px]"}
								text={"XX03"}
								i={2}
							/>
							<FloorButton
								customStyle={"h-12 w-12 2xl:top-[110px] 2xl:left-[50px]"}
								text={"XX04"}
								i={3}
							/>
						</div>
					</div>
					<div className='col-span-4 flex justify-center items-center'>
						<Slider
							ref={slideRef1}
							dots={false}
							infinite={false}
							speed={300}
							slidesToScroll={1}
							slidesToShow={1}
							touchMove={false}
							className=' h-full max-w-[300px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[300px] xl:max-w-[350px] 2xl:max-w-[500px] px-[3%]'
						>
							{floorData.map((d, i) => {
								return (
									<img
										key={i}
										src={d.image}
										alt=''
										className='h-[500px] xl:h-[700px] w-full object-conatin rounded'
									/>
								);
							})}
						</Slider>
					</div>
					<div className='col-span-4 flex flex-col justify-center items-center max-lg:py-12'>
						<Slider
							ref={slideRef2}
							dots={false}
							infinite={false}
							speed={300}
							slidesToScroll={1}
							slidesToShow={1}
							vertical={true}
							touchMove={false}
							className='max-w-[300px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[300px] xl:max-w-[350px] 2xl:max-w-[500px]'
						>
							{floorData.map((d, i) => {
								return (
									<div key={i} className=' w-full pb-16 px-[3%]'>
										<p className='font-bold text-bigger'>
											{d.bedRoomNumber} BEDROOM APARTMENT
										</p>
										<p className='text-[#797979] text-med'>{d.type}</p>

										<p className='font-bold text-bigger pt-12'>
											TOTAL SALEABLE AREA
										</p>
										<p className='text-med text-[#797979]'>SUITE = {d.suite}</p>
										<p className='text-med text-[#797979]'>
											BALCONY = {d.balcony}
										</p>
										<p className='text-med text-[#797979]'>TOTAL = {d.total}</p>
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
