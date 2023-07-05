import React from "react";
import photo2 from "../../../assets/images/photo2.png";

const Element = ({ name, color }) => {
  return (
    <div className="flex justify-start items-center">
      <div
        style={{ borderColor: color }}
        className={`bg-white p-1 border-[1px] rounded-full w-14 h-14`}
      >
        <div
          style={{
            backgroundColor: color,
            opacity: 0.3,
          }}
          className={` rounded-full h-full w-full`}
        />
      </div>
      <p className="px-4 font-normal text-[18px] "> {name}</p>
    </div>
  );
};

const Location = () => {
  return (
    <div>
      <div className="text-9xl text-center bg-transparent text-black my-14 ">
        <p className="overflow-hidden">
          Site
          <span className="border-text text-transparent ">Location</span>
          MasterPlan
        </p>
      </div>
      <div className="grid grid-cols-12">
        <div className="lg:translate-x-16 col-span-4 space-y-8 ">
          <p className="font-bold text-[44px]">Site Location Masterplan</p>
          <Element color={"#27AE60"} name={"Apartment Club House"} />
          <Element color={"#D35400"} name={"Lagoon"} />
          <Element color={"#8E44AD"} name={"Low Rise Villa Community"} />
          <Element color={"#2980B9"} name={"Low Rise Villa Community"} />
        </div>
        <div className="col-span-8">
          <img src={photo2} alt="" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default Location;
