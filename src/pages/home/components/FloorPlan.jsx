import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import floor1 from "../../../assets/images/floorplan/Floor003.svg";
import floor2 from "../../../assets/images/floorplan/Floor005.svg";
import floor3 from "../../../assets/images/floorplan/Floor006.svg";
import mainFloor from "../../../assets/images/floorplan/main.svg";
import Slider from "react-slick";
import {
  MdFiberManualRecord as FiberManualRecordIcon,
  MdOutlineFiberManualRecord as OutFiberManualRecordIcon,
} from "react-icons/md";
const FloorPlan = () => {
  const { i18n, t } = useTranslation();
  const [selected, setSelected] = useState(0);
  const [disablebtn, setDisableBtn] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ViewCounter, setViewCounter] = useState(0);

  let CounterFull = JSON.parse(localStorage.getItem("CounterFull")) ?? false;

  let Registered = JSON.parse(localStorage.getItem("Registered")) ?? false;

  useEffect(() => {
    console.log(CounterFull);
    console.log(ViewCounter);
    console.log(Registered);
    if (Registered !== true) {
      if (ViewCounter >= 5)
        if (CounterFull !== true) localStorage.setItem("CounterFull", true);
    } else {
      localStorage.setItem("CounterFull", false);
    }
  }, [ViewCounter, Registered, CounterFull]);

  let floorData = [
    {
      name: "XX01",
      color: "#88D2D7",
      image: floor1,
      bedRoomNumber: 1,
      type: "TYPE D (with store room and powder room + balcony)",
      suite: "692.87 SQ.FT.",
      balcony: "59.09 SQ.FT.",
      total: "828.17 SQ.FT",
    },
    {
      name: "XX02",
      color: "#88D2D7",
      image: floor2,
      bedRoomNumber: 2,
      type: "TYPE D (with balcony)",
      suite: "811.92 SQ.FT.",
      balcony: "132.40 SQ.FT.",
      total: "944.32 SQ.FT",
    },
    {
      name: "XX03",
      color: "#65B3C5",
      image: floor3,
      bedRoomNumber: 1,
      type: "TYPE A (with balcony)",
      suite: "444.66 SQ.FT.",
      balcony: "55.97 SQ.FT.",
      total: "500.63 SQ.FT",
    },
    {
      name: "XX04",
      color: "#88D2D7",
      image: floor3,
      bedRoomNumber: 1,
      type: "TYPE A (with balcony) - VARIANT 1",
      suite: "441.00 SQ.FT.",
      balcony: "55.22 SQ.FT.",
      total: "496.22 SQ.FT",
    },
    {
      name: "XX05",
      color: "#4FC9EE",
      image: floor3,
      bedRoomNumber: 1,
      type: "TYPE A (with balcony)",
      suite: "444.66 SQ.FT.",
      balcony: "55.97 SQ.FT.",
      total: "500.63 SQ.FT",
    },
    {
      name: "XX06",
      color: "#88D2D7",
      image: floor3,
      bedRoomNumber: 1,
      type: "TYPE A (with balcony)",
      suite: "444.66 SQ.FT.",
      balcony: "55.97 SQ.FT.",
      total: "500.63 SQ.FT",
    },
    {
      name: "XX07",
      color: "#4FC9EE",
      image: floor3,
      bedRoomNumber: 1,
      type: "TYPE A (with balcony)",
      suite: "444.66 SQ.FT.",
      balcony: "55.97 SQ.FT.",
      total: "500.63 SQ.FT",
    },
    {
      name: "XX08",
      color: "#88D2D7",
      image: floor3,
      bedRoomNumber: 1,
      type: "TYPE C (with powder room + balcony)",
      suite: "789.21 SQ.FT.",
      balcony: "59.09 SQ.FT.",
      total: "848.30 SQ.FT",
    },
    {
      name: "XX09",
      color: "#88D2D7",
      image: floor3,
      bedRoomNumber: 1,
      type: "TYPE C (with powder room + balcony) - VARIANT 1",
      suite: "777.15 SQ.FT.",
      balcony: "59.09 SQ.FT.",
      total: "836.24 SQ.FT",
    },
    {
      name: "XX10",
      color: "#65B3C5",
      image: floor3,
      bedRoomNumber: 1,
      type: "TYPE A (with balcony)",
      suite: "789.21 SQ.FT.",
      balcony: "59.09 SQ.FT.",
      total: "848.30 SQ.FT",
    },
    {
      name: "XX11",
      color: "#4FC9EE",
      image: floor3,
      bedRoomNumber: 1,
      type: "TYPE A (with balcony)",
      suite: "444.66 SQ.FT.",
      balcony: "55.97 SQ.FT.",
      total: "500.63 SQ.FT",
    },
    {
      name: "XX12",
      color: "#4FC9EE",
      image: floor3,
      bedRoomNumber: 1,
      type: "TYPE A (with balcony)",
      suite: "444.66 SQ.FT.",
      balcony: "55.97 SQ.FT.",
      total: "500.63 SQ.FT",
    },
    {
      name: "XX13",
      image: floor3,
      color: "#88D2D7",
      bedRoomNumber: 1,
      type: "TYPE A (with balcony) - VARIANT 2",
      suite: "445.84 SQ.FT.",
      balcony: "55.97 SQ.FT.",
      total: "501.81 SQ.FT",
    },
    {
      name: "XX14",
      color: "#65B3C5",
      image: floor3,
      bedRoomNumber: 1,
      type: "TYPE A (with balcony)",
      suite: "444.66 SQ.FT.",
      balcony: "55.97 SQ.FT.",
      total: "500.63 SQ.FT",
    },
    {
      name: "XX15",
      color: "#88D2D7",
      image: floor3,
      bedRoomNumber: 1,
      type: "TYPE C (with powder room + balcony) - VARIANT 2",
      suite: "785.12 SQ.FT.",
      balcony: "59.09 SQ.FT.",
      total: "844.21 SQ.FT",
    },
  ];
  const GridElement = ({ name, onClick, index, color }) => {
    return (
      <div
        onClick={onClick}
        dir={i18n.language == "en" ? "ltr" : "rtl"}
        style={{ backgroundColor: color }}
        className={`mb-6 text-black p-3 w-20 rounded cursor-pointer transition-all duration-300 text-center ${
          index == selected ? "bg-opacity-70" : ""
        }`}
      >
        <p className="text-smaller font-bold"> {name}</p>
      </div>
    );
  };
  const slideRef1 = useRef();
  const slideRef2 = useRef();

  const FloorButton = ({ text, customStyle, i }) => {
    return (
      <button
        disabled={i == selected || disablebtn}
        onClick={() => {
          if (!CounterFull) {
            slideRef1.current.slickGoTo(i);
            slideRef2.current.slickGoTo(i);
            setSelected(i);
            setViewCounter(ViewCounter + 1);
            setDisableBtn(true);
            setTimeout(() => {
              setDisableBtn(false);
            }, 400);
          } else {
            alert("Please Register to continue");
          }
        }}
        className={`absolute cursor-pointer flex justify-center items-center hover:animate-pulse max-sm:hidden ${customStyle} `}
      >
        {text}
      </button>
    );
  };
  return (
    <div className="relative h-[1500px] lg:h-[1050px] grid grid-cols-12">
      <div className="border-r-[1px] border-l-[1px] border-gray-400 col-span-4" />
      <div className="border-r-[1px] border-gray-400 col-span-4" />
      <div className="border-r-[1px] border-gray-400 col-span-4" />
      <div className="absolute pt-16 bg-transparent h-full w-full">
        <div className="text-huge font-bold lg:w-[30%] w-[90%] px-[5%]">
          FLOOR PLAN AND UNIT PLANS
        </div>
        <button
          onClick={() => {
            localStorage.setItem("Registered", true);
            localStorage.setItem("CounterFull", false);
            Registered = true;
            CounterFull = false;
          }}
          className="text-med font-bold lg:w-[30%] w-[90%] px-[5%] text-red-800"
        >
          press me to register
        </button>
        <div className="lg:grid lg:grid-cols-12 pt-12 ">
          <div className="col-span-4 flex flex-col justify-start items-center">
            <div
              className="w-[320px] sm:w-[610px] md:w-[750px] lg:w-[330px] xl:w-[410px] 2xl:w-[500px] h-[140px] sm:h-[260px] md:h-[290px] lg:h-[140px] xl:h-[170px] 2xl:h-[260px] relative bg-no-repeat font-medium text-tiny sm:translate-y-24 sm:max-lg:bg-center"
              style={{
                backgroundImage: `url(${mainFloor})`,
              }}
            >
              <FloorButton
                customStyle={
                  "2xl:h-16 2xl:w-10 2xl:top-[70px] 2xl:left-[6px] xl:h-20 xl:w-10 xl:top-[45px] xl:left-[4px] lg:h-14 lg:w-9 lg:top-[40px] lg:left-[0px] md:h-28 md:w-16 md:top-[90px] md:left-[30px] sm:h-24 sm:w-14 sm:top-[80px] sm:left-[5px]"
                }
                text={"XX05"}
                i={4}
              />
              <FloorButton
                customStyle={
                  "2xl:h-10 2xl:w-10 2xl:top-[55px] 2xl:left-[55px] xl:h-10 xl:w-9 xl:top-[40px] xl:left-[45px] lg:h-8 lg:w-8 lg:top-[30px] lg:left-[38px] md:h-16 md:w-14 md:top-[70px] md:left-[100px] sm:h-14 sm:w-14 sm:top-[65px] sm:left-[65px]"
                }
                text={"XX06"}
                i={5}
              />
              <FloorButton
                customStyle={
                  "2xl:h-14 2xl:w-14 2xl:top-[35px] 2xl:left-[130px] xl:h-14 xl:w-14 xl:top-[22px] xl:left-[100px] lg:h-10 lg:w-11 lg:top-[20px] lg:left-[80px] md:h-28 md:w-24 md:top-[25px] md:left-[200px] sm:h-20 sm:w-20 sm:top-[40px] sm:left-[155px]"
                }
                text={"XX07"}
                i={6}
              />
              <FloorButton
                customStyle={
                  "2xl:h-14 2xl:w-12 2xl:top-[15px] 2xl:left-[200px] xl:h-14 xl:w-11 xl:top-[5px] xl:left-[160px] lg:h-11 lg:w-8 lg:top-[3px] lg:left-[130px] md:h-24 md:w-[73px] md:top-[15px] md:left-[300px] sm:h-20 sm:w-16 sm:top-[10px] sm:left-[240px]"
                }
                text={"XX08"}
                i={7}
              />
              <FloorButton
                customStyle={
                  "2xl:h-14 2xl:w-12 2xl:top-[15px] 2xl:right-[200px] xl:h-14 xl:w-11 xl:top-[5px] xl:right-[160px] lg:h-11 lg:w-8 lg:top-[3px] lg:right-[130px] md:h-24 md:w-[73px] md:top-[15px] md:right-[300px] sm:h-20 sm:w-16 sm:top-[10px] sm:right-[240px]"
                }
                text={"XX09"}
                i={8}
              />
              <FloorButton
                customStyle={
                  "2xl:h-14 2xl:w-12 2xl:top-[25px] 2xl:right-[150px] xl:h-14 xl:w-11 xl:top-[15px] xl:right-[115px] lg:h-12 lg:w-8 lg:top-[12px] lg:right-[95px] md:h-24 md:w-16 md:top-[25px] md:right-[233px] sm:h-20 sm:w-14 sm:top-[30px] sm:right-[180px]"
                }
                text={"XX10"}
                i={9}
              />
              <FloorButton
                customStyle={
                  "2xl:h-16 2xl:w-24 2xl:top-[35px] 2xl:right-[52px] xl:h-14 xl:w-[70px] xl:top-[25px] xl:right-[42px] lg:h-10 lg:w-[58px] lg:top-[25px] lg:right-[35px] md:h-24 md:w-32 md:top-[40px] md:right-[100px] sm:h-20 sm:w-28 sm:top-[40px] sm:right-[65px]"
                }
                text={"XX11"}
                i={10}
              />
              <FloorButton
                customStyle={
                  "2xl:h-20 2xl:w-12 2xl:top-[60px] 2xl:right-[1px] xl:h-20 xl:w-10 xl:top-[45px] xl:right-[1px] lg:h-14 lg:w-8 lg:top-[40px] lg:right-[1px] md:h-32 md:w-16 md:top-[80px] md:right-[28px] sm:h-24 sm:w-14 sm:top-[80px] sm:right-[6px]"
                }
                text={"XX12"}
                i={11}
              />
              <FloorButton
                customStyle={
                  "2xl:h-14 2xl:w-12 2xl:top-[110px] 2xl:right-[50px] xl:h-12 xl:w-10 xl:top-[90px] xl:right-[42px] lg:h-10 lg:w-7 lg:top-[73px] lg:right-[35px] md:h-20 md:w-14 md:top-[155px] md:right-[100px] sm:h-16 sm:w-14 sm:top-[140px] sm:right-[65px]"
                }
                text={"XX13"}
                i={12}
              />

              <FloorButton
                customStyle={
                  "2xl:h-20 2xl:w-14 2xl:top-[110px] 2xl:right-[145px] xl:h-16 xl:w-10 xl:top-[100px] xl:right-[120px] lg:h-12 lg:w-7 lg:top-[75px] lg:right-[100px] md:h-24 md:w-16 md:top-[165px] md:right-[235px] sm:h-24 sm:w-14 sm:top-[145px] sm:right-[182px]"
                }
                text={"XX14"}
                i={13}
              />
              <FloorButton
                customStyle={
                  "2xl:h-20 2xl:w-11 2xl:top-[125px] 2xl:right-[205px] xl:h-16 xl:w-10 xl:top-[110px] xl:right-[162px] lg:h-12 lg:w-7 lg:top-[90px] lg:right-[132px] md:h-28 md:w-16 md:top-[175px] md:right-[305px] sm:h-24 sm:w-16 sm:top-[155px] sm:right-[240px]"
                }
                text={"XX15"}
                i={14}
              />
              <FloorButton
                customStyle={
                  "2xl:h-20 2xl:w-12 2xl:top-[125px] 2xl:left-[200px] xl:h-16 xl:w-10 xl:top-[110px] xl:left-[165px] lg:h-12 lg:w-8 lg:top-[90px] lg:left-[135px] md:h-28 md:w-12 md:top-[175px] md:left-[305px] sm:h-24 sm:w-16 sm:top-[155px] sm:left-[240px]"
                }
                text={"XX01"}
                i={0}
              />
              <FloorButton
                customStyle={
                  "2xl:h-20 2xl:w-12 2xl:top-[110px] 2xl:left-[150px] xl:h-16 xl:w-9 xl:top-[90px] xl:left-[125px] lg:h-12 lg:w-8 lg:top-[75px] lg:left-[100px] md:h-28 md:w-16 md:top-[160px] md:left-[235px] sm:h-20 sm:w-14 sm:top-[145px] sm:left-[180px]"
                }
                text={"XX02"}
                i={1}
              />
              <FloorButton
                customStyle={
                  "2xl:h-16 2xl:w-12 2xl:top-[110px] 2xl:left-[100px] xl:h-16 xl:w-10 xl:top-[90px] xl:left-[80px] lg:h-12 lg:w-7 lg:top-[75px] lg:left-[68px] md:h-24 md:w-16 md:top-[155px] md:left-[164px] sm:h-20 sm:w-14 sm:top-[140px] sm:left-[122px]"
                }
                text={"XX03"}
                i={2}
              />
              <FloorButton
                customStyle={
                  "2xl:h-12 2xl:w-12 2xl:top-[110px] 2xl:left-[50px] xl:h-12 xl:w-8 xl:top-[90px] xl:left-[45px] lg:h-10 lg:w-7 lg:top-[75px] lg:left-[37px] md:h-20 md:w-16 md:top-[150px] md:left-[96px] sm:h-16 sm:w-14 sm:top-[140px] sm:left-[62px]"
                }
                text={"XX04"}
                i={3}
              />
            </div>

            <Slider
              ref={slideRef1}
              dots={true}
              infinite={true}
              speed={600}
              slidesToScroll={3}
              slidesToShow={3}
              touchMove={true}
              arrows={false}
              className="text-white mt-32 max-w-[300px] sm:hidden"
              customPaging={(index) => {
                return index == currentSlide ? (
                  <div key={index} className="text-lightBlack text-med py-2">
                    <FiberManualRecordIcon />
                  </div>
                ) : (
                  <div key={index} className="text-lightBlack text-med py-2">
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
          </div>
          <div className="col-span-4 flex justify-center items-center sm:max-lg:pt-28">
            <Slider
              ref={slideRef1}
              dots={false}
              infinite={false}
              speed={300}
              slidesToScroll={1}
              slidesToShow={1}
              touchMove={false}
              className=" h-full max-w-[300px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[300px] xl:max-w-[350px] 2xl:max-w-[500px] px-[3%]"
            >
              {floorData.map((d, i) => {
                return (
                  <img
                    key={i}
                    src={d.image}
                    alt=""
                    className="h-[500px] xl:h-[700px] w-full object-conatin rounded"
                  />
                );
              })}
            </Slider>
          </div>
          <div className="col-span-4 flex flex-col justify-center items-center sm:max-lg:pt-12">
            <Slider
              ref={slideRef2}
              dots={false}
              infinite={false}
              speed={300}
              centerMode
              slidesToScroll={1}
              slidesToShow={1}
              vertical={true}
              touchMove={false}
              className="h-full max-w-[300px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[300px] xl:max-w-[350px] 2xl:max-w-[500px]"
            >
              {floorData.map((d, i) => {
                return (
                  <div
                    key={i}
                    className=" w-full h-[500px] xl:h-[700px] flex flex-col justify-center items-center"
                  >
                    <p className="font-bold text-bigger">
                      {d.bedRoomNumber} BEDROOM APARTMENT
                    </p>
                    <p className="text-[#797979] text-med">{d.type}</p>

                    <p className="font-bold text-bigger pt-12">
                      TOTAL SALEABLE AREA
                    </p>
                    <p className="text-med text-[#797979]">SUITE = {d.suite}</p>
                    <p className="text-med text-[#797979]">
                      BALCONY = {d.balcony}
                    </p>
                    <p className="text-med text-[#797979]">TOTAL = {d.total}</p>
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
