import React from "react";

export default function Card({ data }) {
  return (
    <div className=" text-white m-5 ">
      <div className="text-[#59595a] text-[9px] sm:text-[12px]">{data._type}</div>
      <div className="flex">
        <div className="w-[400px]">
          <div className="text-[#5b2bf7] font-semibold text-[12px] sm:text-[15px]">{data.name}</div>
          <div className="text-[#949496]  text-[10px] sm:text-[12px]">{data.description}</div>
        </div>
        <div>
          <div
            className="bg-cover w-[160px] m-2 h-[100px] bg-red-500 mt-1  "
            // style={{ backgroundImage: `url(${})` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
