import React, { useContext } from "react";
import Nv from "./Nv";
import { SearchContext } from "../Context/SearchContext";
import Web from "./Web/Web";
import Img from "./Img/Img";
import Vdo from "./Video/Vdo";
import News from "./News/News";

export default function SearchPage() {
  const { textToSearch, settextToSearch, SearchText, setSearchText } =
    useContext(SearchContext);

  return (
    <div>
      <Nv />

      <div>
        {/* <Web /> */}
        {/* <Img /> */}
        {/* <Vdo /> */}
        {/* <News/> */}
      </div>
    </div>
  );
}
