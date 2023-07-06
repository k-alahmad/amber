import React from "react";

const FloorPlan = () => {
  return (
    <div className="relative h-[900px] grid grid-cols-12">
      <div className="border-r-[1px] border-l-[1px] border-gray-400 col-span-4" />
      <div className="border-r-[1px] border-gray-400 col-span-4" />
      <div className="border-r-[1px] border-gray-400 col-span-4" />

      <div className="absolute grid grid-cols-12">
        <div className="col-span-4"> img selector </div>
        <div className="col-span-4"> floar image </div>
        <div className="col-span-4"> floar details </div>
      </div>
    </div>
  );
};

export default FloorPlan;
