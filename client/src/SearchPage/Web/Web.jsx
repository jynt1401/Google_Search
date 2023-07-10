import React, { useContext } from "react";
import SearchInfo, { SearchContext } from "../../Context/SearchContext";
// import { dataWeb } from "../../Data/Web";
import Card from "./Card";

export default function Web({wdata}) {
  
  console.log(wdata);
  return (
    <div className=" mt-9">
      {wdata.map((data) => (
        <div ><Card data={data}/></div>
      ))}
    </div>
  );
}
