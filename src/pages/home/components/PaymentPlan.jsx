import React from "react";

const Circle = ({ number, customStyle, text }) => {
  return (
    <div
      className={`absolute ${customStyle} sm:-top-12 max-sm:left-[35%] w-28 flex flex-col justify-center items-center`}
    >
      <div
        className={`bg-[#222222]/20 rounded-full w-24 h-24  flex justify-center items-center `}
      >
        <div className="bg-[#222222] rounded-full w-16 h-16 flex justify-center items-center text-white font-medium text-small ">
          {number}%
        </div>
      </div>
      <p className="text-center text-[14px] pt-3 font-semibold">{text}</p>
    </div>
  );
};

const PaymentPlan = () => {
  return (
    <div className="relative h-[1340px] sm:h-[600px] xl:h-[400px] grid grid-cols-12 border-b-[1px]">
      <div className="border-r-[1px] border-l-[1px] border-gray-400 col-span-4" />
      <div className="border-r-[1px] border-gray-400 col-span-4" />
      <div className="border-r-[1px] border-gray-400 col-span-4" />

      <div className="absolute h-full w-full xl:grid xl:grid-cols-12 max-lg:space-y-2">
        <div className="col-span-4 flex justify-start items-center font-bold text-huge xl:p-12 max-xl:px-4 ">
          Payment Plan
        </div>
        <div className="col-span-4 ">
          <p className="text-small text-[#909090] pb-32 p-4">
            Post-Handover payment plan
          </p>
          <div className="relative flex flex-col w-full">
            <div className="h-[680px] w-[1px] sm:w-full sm:h-[2px] bg-black self-center" />
            <Circle
              number={20}
              customStyle={"sm:left-[0%] max-sm:top-[1%]"}
              text={"upfront"}
            />
            <Circle
              number={60}
              customStyle={"sm:left-[25%] max-sm:top-[20%]"}
              text={" instalments per month until the project is done"}
            />
            <Circle
              number={10}
              customStyle={"sm:left-[50%] max-sm:top-[50%]"}
              text={"on handover (when the apartment is delivered)"}
            />
            <Circle
              number={10}
              customStyle={"sm:left-[75%] max-sm:top-[80%]"}
              text={" instalments after handover for a period of time. "}
            />
          </div>
        </div>
        <div className="col-span-4 flex flex-col justify-center items-center xl:items-start max-xl:pt-40 xl:p-12">
          <p className="text-big font-medium">Prices </p>
          <p className="text-huge font-bold">100,000 UAD</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlan;
