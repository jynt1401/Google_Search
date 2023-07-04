import React from "react";
import { dataVdo } from "../../Data/Vidoe";
import Card from "./Card";

export default function Vdo({ data }) {
  // console.log(dataVdo);/
  return (
    <div className=" mt-9  w-[90%] mx-auto ">
      {data.map((data) => (
        <div>
          <Card data={data} />
        </div>
      ))}
    </div>
  );
}
