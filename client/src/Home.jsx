import React, { useContext, useState } from "react";
import SearchPage from "./SearchPage/SearchPage";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "./Context/SearchContext";
import axios from "axios";
import { CgMenuGridO } from "react-icons/cg";
import url from "../src/Images/bg.png";

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
    <div className="bg-whiteh-screen">
      <div className="flex flex-row-reverse p-5 ">
        <div className="m-3 ">
          <CgMenuGridO size={22} />
        </div>
        <div className="m-2">Images</div>
        <div className="m-2">Gmail</div>
      </div>
      <div className="flex justify-around w-[100%] mx-auto bg-white mt-[70px] sm:mt-[10px] ">
        <div
          className="bg-cover w-[55%] sm:w-[27%]  aspect-video "
          style={{ backgroundImage: `url(${url})` }}
        ></div>
      </div>
      <div className="flex justify-around m-5">
        <input
          className=" w-[70%] sm:w-[45%] h-[30px] sm:h-[40px] rounded-full border-2 border-[#bbb7b796] p-5"
          value={textToSearch}
          onKeyDown={Search}
          placeholder=" search "
          
          onChange={(e) => {
            settextToSearch(e.target.value);
          }}
        ></input>
      </div>
      <div className="grid grid-cols-2 m-5 w-[70%] sm:w-[40%] md:w-[30%] lg:w-[20%]  mx-auto">
        <div className="bg-[#f4f4f4] p-2 w-fit text-[15px] m-1 rounded-md mx-auto">Google Search</div>
        <div className="bg-[#f4f4f4] p-2 w-fit text-[15px] m-1 rounded-md mx-auto">I'm feeling Lucky</div>
        </div>
    </div>
  );
}
