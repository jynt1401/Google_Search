import React, { useContext, useState } from "react";
import SearchPage from "./SearchPage/SearchPage";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "./Context/SearchContext";
import axios from "axios";

export default function Home() {
  const navigate = useNavigate();
  const { textToSearch, settextToSearch, SearchText, setSearchText } =
    useContext(SearchContext);

  const Search = async (e) => {
    if (e.keyCode === 13) {
      setSearchText(textToSearch);
      // settextToSearch("");
      console.log("****************************");
      console.log(SearchText);
      navigate("/search");
    }
  };

  console.log(textToSearch);
  return (
    <div>
      Google
      <input
        value={textToSearch}
        onKeyDown={Search}
        onChange={(e) => {
          settextToSearch(e.target.value);
        }}
      ></input>
    </div>
  );
}
