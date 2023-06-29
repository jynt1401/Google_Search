import React from "react";

export default function Card({ data }) {
  console.log(data);
  return (
    <div className="m-3">
      <div
        className="bg-cover w-[260px] h-[200px]  "
        style={{ backgroundImage: `url(${data.originalImageUrl})` }}
      ></div>
      <div className="text-[#949494]  w-[260px] truncate text-[9px] mt-1 ml-1">
        {data.contextLink}
      </div>
      <div className="text-[#565656]  w-[260px]  truncate font-normal text-[12px] ml-1 mt-[-5px]">
        {data.title}
      </div>
    </div>
  );
}
