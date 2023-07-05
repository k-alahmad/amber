import React from "react";
import photo2 from "../../../assets/images/photo2.png";

const Element = ({ name, color }) => {
  return (
    <div className="flex justify-start items-center">
      <div
        style={{ borderColor: color }}
        className={`bg-white p-1 border-[1px] rounded-full w-10 h-10 lg:w-14 lg:h-14`}
      >
        <div
          style={{
            backgroundColor: color,
            opacity: 0.3,
          }}
          className={` rounded-full h-full w-full`}
        />
      </div>
      <p className="px-4 font-normal text-small "> {name}</p>
    </div>
  );
};

const Location = () => {
  return (
    <div className="max-md:pt-16">
      <div className="hidden md:block text-9xl bg-transparent text-black my-14 w-full overflow-hidden">
        <p className="animate-textCamera relative">
          Site
          <span className="border-text text-transparent ">Location</span>
          MasterPlan
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-12">
        <div className="lg:px-10 xl:px-16 col-span-5 space-y-4 lg:space-y-8">
          <p className="font-bold text-bigger lg:text-huge">
            Site Location Masterplan
          </p>
          <Element color={"#27AE60"} name={"Apartment Club House"} />
          <Element color={"#D35400"} name={"Lagoon"} />
          <Element color={"#8E44AD"} name={"Low Rise Villa Community"} />
          <Element color={"#2980B9"} name={"Low Rise Villa Community"} />
        </div>
        <div className="col-span-7 max-md:pt-8">
          <img src={photo2} alt="" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default Location;
