import React, { useContext } from "react";
import SearchInfo, { SearchContext } from "../../Context/SearchContext";
import { dataWeb } from "../../Data/Web";
import Card from "./Card";

export default function Web() {
  const { Web } = useContext(SearchContext);
  console.log(dataWeb);
  return (
    <div className=" mt-9">
      {dataWeb.map((data) => (
        <div ><Card data={data}/></div>
      ))}
    </div>
  );
}
