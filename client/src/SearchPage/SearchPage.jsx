import React, { useContext } from "react";
import Nv from "./Nv";
import { SearchContext } from "../Context/SearchContext";

export default function SearchPage() {
  const { textToSearch, settextToSearch, SearchText, setSearchText } =
    useContext(SearchContext);
  
  return (
    <div>
      <Nv />
      <div>hello</div>
    </div>
  );
}
