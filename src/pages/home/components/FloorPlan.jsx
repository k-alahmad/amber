import React, { useEffect, useRef, useState } from "react";
import floor1 from "../../../assets/images/floorplan/Floor003.svg";
import floor2 from "../../../assets/images/floorplan/Floor005.svg";
import floor3 from "../../../assets/images/floorplan/Floor006.svg";
import mainFloor from "../../../assets/images/floorplan/main.svg";
import XX03 from "../../../assets/images/floorplan/XX03.svg";
import XX05 from "../../../assets/images/floorplan/XX05.svg";
import XX06 from "../../../assets/images/floorplan/XX06.svg";

import Slider from "react-slick";
const FloorPlan = () => {
	const [selected, setSelected] = useState(0);
	const [disablebtn, setDisableBtn] = useState(false);
	let floorData = [
		{
			image: floor1,
			bedRoomNumber: 1,
			type: "TYPE A (with study room and powder room + balcony)",
			suite: "583.94 SQ.FT.",
			balcony: "55.22 SQ.FT.",
			total: "639.16 SQ.FT",
		},
		{
			image: floor2,
			bedRoomNumber: 2,
			type: "TYPE A (with balcony)",
			suite: "811.92 SQ.FT.",
			balcony: "132.40 SQ.FT.",
			total: "944.32 SQ.FT",
		},
		{
			image: floor3,
			bedRoomNumber: 1,
			type: "TYPE A (with balcony)",
			suite: "444.66 SQ.FT.",
			balcony: "55.97 SQ.FT.",
			total: "500.63 SQ.FT",
		},
	];

	const buttons = (n) => {
		let content = [];
		for (let i = 0; i < n; i++) {
			content.push(
				<button
					key={i}
					disabled={i == selected || disablebtn}
					className={`h-24 w-24  ${
						i == selected ? "bg-gray-500" : "bg-cyan-700"
					}`}
					onClick={() => {
						slideRef1.current.slickGoTo(i);
						slideRef2.current.slickGoTo(i);
						setSelected(i);
						setDisableBtn(true);
						setTimeout(() => {
							setDisableBtn(false);
						}, 400);
					}}
				>
					{i + 1}
				</button>,
			);
		}
		return content;
	};

	const slideRef1 = useRef();
	const slideRef2 = useRef();

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
					<div className='col-span-4 flex flex-col '>
						<img src={mainFloor} />
						<div className='absolute grid grid-cols-3 gap-1 max-lg:py-12'>
							{/* {buttons(2)} */}
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
