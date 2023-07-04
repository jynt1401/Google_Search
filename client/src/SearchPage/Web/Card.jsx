import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ data }) {
  const navigate = useNavigate();

  console.log("================");
  console.log(data);
  return (
    <a href={data.link} target="_blank">
      <div className="mx-7 sm:ml-20 m-2 p-2">
        <div className="text-[#9d9d9d]  text-[15px]">{data.displayLink}</div>
        <div className="text-[#5b2bf7] font-semibold text-[20px]">
          {data.title}
        </div>
        <div className="text-[#3f3f3f] ">{data.snippet}</div>
        <div className="text-[#818181] ">{data.snippet}</div>
      </div>
    </a>
  );
}
