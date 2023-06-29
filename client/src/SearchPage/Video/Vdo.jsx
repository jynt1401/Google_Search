import React from "react";
import { dataVdo } from "../../Data/Vidoe";
import Card from "./Card";


export default function Vdo() {
  console.log(dataVdo);
  return (
    <div className=" mt-9  w-[90%] mx-auto ">
      {dataVdo.map((data) => (
          <div ><Card data={data}/></div>
      ))}
    </div>
  );
}
