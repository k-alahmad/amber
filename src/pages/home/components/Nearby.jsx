import React, { useState } from "react";
import icon from "../../../assets/icons/kalifa.svg";
import heroLeft from "../../../assets/images/heroLeft.png";
import heroMiddle from "../../../assets/images/heroMiddle.png";
import { motion } from "framer-motion";
import Slider from "react-slick";

import {
  MdFiberManualRecord as FiberManualRecordIcon,
  MdOutlineFiberManualRecord as OutFiberManualRecordIcon,
} from "react-icons/md";
const Nearby = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  var settings = {
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          className: "w-full",
          slidesToShow: 3,
          rows: 3,
          slidesToScroll: 4,
          infinite: false,
          dots: true,
          beforeChange: (prev, next) => {
            setCurrentSlide(next == 0 ? next : Math.round(next / 4));
          },
        },
      },
      {
        breakpoint: 1537,
        settings: {
          className: "w-full",
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
          infinite: false,
          dots: true,
          beforeChange: (prev, next) => {
            setCurrentSlide(next == 0 ? next : Math.round(next / 2));
          },
        },
      },
      {
        breakpoint: 1280,
        settings: {
          className: "w-full",
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 1,
          infinite: false,
          dots: true,
          beforeChange: (prev, next) => {
            setCurrentSlide(next == 0 ? next : Math.round(next / 1));
          },
        },
      },
      {
        breakpoint: 1025,
        settings: {
          className: "w-full",
          slidesToShow: 4,
          slidesToScroll: 4,
          // rows: 1,
          infinite: false,
          dots: true,
          beforeChange: (prev, next) => {
            setCurrentSlide(next == 0 ? next : Math.round(next / 3));
          },
        },
      },
      {
        breakpoint: 730,
        settings: {
          className: "w-full",
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 1,
          infinite: false,
          dots: true,
          beforeChange: (prev, next) => {
            setCurrentSlide(next == 0 ? next : Math.round(next / 3));
          },
        },
      },
      {
        breakpoint: 532,
        settings: {
          className: "w-full",
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 1,
          infinite: false,
          dots: true,
          beforeChange: (prev, next) => {
            setCurrentSlide(next == 0 ? next : Math.round(next / 2));
          },
        },
      },
    ],
    dots: true,
    touchMove: true,

    customPaging: (index) => {
      return index == currentSlide ? (
        <div key={index} className="text-[white] text-med">
          <FiberManualRecordIcon />
        </div>
      ) : (
        <div key={index} className="text-[white] text-med">
          <OutFiberManualRecordIcon />
        </div>
      );
    },
    appendDots: (dots) => {
      return (
        <ul>
          {dots.map((item, index) => {
            return item;
          })}
        </ul>
      );
    },
  };
  const [selectedIndex, setSelectedIndex] = useState(0);
  let data = [
    {
      icon: icon,
      name: "Plam Juneirah",
      duration: "25 MINUTES",
      img: heroLeft,
    },
    {
      icon: icon,
      name: "dubai airport",
      duration: "25 MINUTES",
      img: heroMiddle,
    },
    {
      icon: icon,
      name: "khalifa tower",
      duration: "25 MINUTES",
      img: heroLeft,
    },
    { icon: icon, name: "some name", duration: "25 MINUTES", img: heroMiddle },
    { icon: icon, name: "dubai frame", duration: "25 MINUTES", img: heroLeft },
    {
      icon: icon,
      name: "dubai opera",
      duration: "25 MINUTES",
      img: heroMiddle,
    },
    { icon: icon, name: "some name", duration: "25 MINUTES", img: heroLeft },
    { icon: icon, name: "some name", duration: "25 MINUTES", img: heroMiddle },
    { icon: icon, name: "some name", duration: "25 MINUTES", img: heroLeft },
  ];
  const GridElement = ({ icon, name, duration, onClick, index }) => {
    return (
      <div
        onClick={onClick}
        className={`bg-white mb-6 text-black p-6 h-32 w-40 rounded flex flex-col justify-center items-start space-y-1 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-white/40 hover:bg-white/90 ${
          index == selectedIndex ? "bg-white/70 shadow-lg shadow-white/40" : ""
        }`}
      >
        <img src={icon} alt="" className="h-10 w-9" />
        <p className="text-smaller font-bold"> {name}</p>
        <p className=" font-extralight text-tiny"> {duration} </p>
      </div>
    );
  };
  return (
    <div className="bg-[#222222] relative h-[900px] md:h-[950px] lg:h-[700px] 2xl:h-[850px] grid grid-cols-12 overflow-hidden">
      <div className="border-r-[1px] border-l-[1px] border-white/20" />
      <div className="border-r-[1px] border-white/20" />
      <div className="border-r-[1px] border-white/20" />
      <div className="border-r-[1px] border-white/20" />
      <div className="border-r-[1px] border-white/20" />
      <div className="border-r-[1px] border-white/20" />
      <div className="border-r-[1px] border-white/20" />
      <div className="border-r-[1px] border-white/20" />
      <div className="border-r-[1px] border-white/20" />
      <div className="border-r-[1px] border-white/20" />
      <div className="border-r-[1px] border-white/20" />
      <div className="border-r-[1px] border-white/20" />
      <div className="absolute h-full w-full text-white lg:grid lg:grid-cols-12">
        <div className="lg:px-10 xl:px-16 col-span-5 py-7 max-lg:px-8">
          <p className="font-bold text-huge">EASY ACCESS TO KEY LANDMARKS</p>
          <p className="text-white/60 font-light text-small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At incidunt
            culpa nisi dolores, quibusdam itaque laboriosam, placeat in quos
            fuga soluta suscipit quas, vitae consequuntur molestias aut sit
            magni dolorum?
          </p>
          <div className="py-5 lg:py-16 max-w-full flex justify-center items-center">
            <Slider {...settings} arrows={false} speed={1000} touchMove>
              {data.map((e, i) => {
                return (
                  <GridElement
                    key={i}
                    icon={e.icon}
                    name={e.name}
                    duration={e.duration}
                    onClick={() => {
                      setSelectedIndex(i);
                    }}
                    index={i}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 0.5 }}
          className="col-start-6 col-span-7 bg-cyan-600"
        >
          <img src={data[selectedIndex].img} alt="" className="h-full w-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default Nearby;
