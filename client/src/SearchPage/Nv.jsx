import React, { useContext, useEffect } from "react";
import { SearchContext } from "../Context/SearchContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import url from "../Images/bg.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCardImage } from "react-icons/bs";
import { RiVideoLine } from "react-icons/ri";
import { BiNews } from "react-icons/bi";

import { dataNews } from "../Data/News";
import { dataWeb } from "../Data/Web";
import { dataVdo } from "../Data/Vidoe";
import { dataImg } from "../Data/Images";

export default function Nv() {
  // console.log(dataNews);
  // console.log(dataWeb);
  // console.log(dataVdo);
  // console.log(dataImg);

  const navigate = useNavigate();
  const {
    textToSearch,
    settextToSearch,
    SearchText,
    setSearchText,
    Webdata,
    setWebdata,
    Imgdata,
    setImgdata,
    Vdodata,
    setVdodata,
    Newsdata,
    setNewsdata,

    setSelectWeb,
    SelectWeb,
    setSelectimg,
    Selectimg,
    setSelectvdo,
    Selectvdo,
    setSelectnews,
    Selectnews,
  } = useContext(SearchContext);

  const selectall = () => {
    setSelectWeb(true);
    setSelectimg(false);
    setSelectvdo(false);
    setSelectnews(false);
  };
  const selectimg = () => {
    setSelectWeb(false);
    setSelectimg(true);
    setSelectvdo(false);
    setSelectnews(false);
  };
  const selectvdo = () => {
    setSelectWeb(false);
    setSelectimg(false);
    setSelectvdo(true);
    setSelectnews(false);
  };
  const selectnews = () => {
    setSelectWeb(false);
    setSelectimg(false);
    setSelectvdo(false);
    setSelectnews(true);
  };

  // console.log("you searched******************************");
  // console.log(SearchText);

  const Search = (e) => {
    if (e.keyCode === 13) {
      setWebdata([]);
      setImgdata([]);
      setVdodata([]);
      setNewsdata([]);
      setSearchText(textToSearch);
      console.log("use searched this");
      setSelectWeb(true);
      setSelectimg(false);
      setSelectvdo(false);
      setSelectnews(false);
    }
  };

  const getdata = async () => {
    await axios({
      method: "GET",
      url: "https://google-search-json.p.rapidapi.com/search/web",
      params: {
        q: SearchText,
        gl: "US",
        lr: "lang_en",
        start: "0",
      },
      headers: {
        "X-RapidAPI-Key": "647e202f00mshba8cc6bbd314fbdp14ff09jsna5b14c0b3c5b",
        "X-RapidAPI-Host": "google-search-json.p.rapidapi.com",
      },
    }).then((res) => {
      if (res.status === 200) {
        setWebdata(res.data.items);
      } else {
        console.log("failed to get web");
        setWebdata([]);
      }
    });
    await axios({
      method: "GET",
      url: "https://google-search72.p.rapidapi.com/imagesearch",
      params: {
        q: SearchText,
        gl: "US",
        lr: "lang_en",
        start: "0",
      },
      headers: {
        "X-RapidAPI-Key": "647e202f00mshba8cc6bbd314fbdp14ff09jsna5b14c0b3c5b",
        "X-RapidAPI-Host": "google-search72.p.rapidapi.com",
      },
    }).then((res) => {
      if (res.status === 200) {
        setImgdata(res.data.items);
      } else {
        console.log("failed to get img");
        setImgdata([]);
      }
    });
    await axios({
      method: "GET",
      url: "https://youtube-search-results.p.rapidapi.com/youtube-search/",
      params: {
        q: SearchText,
      },
      headers: {
        "X-RapidAPI-Key": "647e202f00mshba8cc6bbd314fbdp14ff09jsna5b14c0b3c5b",
        "X-RapidAPI-Host": "youtube-search-results.p.rapidapi.com",
      },
    }).then((res) => {
      if (res.status === 200) {
        setVdodata(res.data.items);
      } else {
        console.log("failed to get video");
        setVdodata([]);
      }
    });
    await axios({
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news/search",
      params: {
        q: SearchText,
        freshness: "Day",
        textFormat: "Raw",
        safeSearch: "Off",
      },
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": "647e202f00mshba8cc6bbd314fbdp14ff09jsna5b14c0b3c5b",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    }).then((res) => {
      if (res.status === 200) {
        setNewsdata(res.data.value);
      } else {
        console.log("failed to get news");
        setNewsdata([]);
      }
    });
  };

  console.log("---------web---------");
  console.log(Webdata);
  console.log("---------img---------");
  console.log(Imgdata);
  console.log("---------vdo---------");
  console.log(Vdodata);
  console.log("---------news---------");
  console.log(Newsdata);

  useEffect(() => {
    getdata();
  }, [SearchText]);

  const handleclick = () => {
    setSelectWeb(true);
    setSelectimg(false);
    setSelectvdo(false);
    setSelectnews(false);
    setWebdata([]);
    setImgdata([]);
    setVdodata([]);
    setNewsdata([]);
    settextToSearch("");
    navigate("/");
  };

  return (
    <div className="w-[100%] bg-white pl-1 ">
      <div className="flex ">
        <div onClick={handleclick} className="pt-5 pl-5 w-[200px]">
          <div
            className="bg-cover w-[55%] sm:w-[60%]  aspect-video "
            style={{ backgroundImage: `url(${url})` }}
          ></div>
        </div>
        <div>
          <input
            className="rounded-full border-2 border-[#bbb7b796] ml-[-60px] sm:ml-[-10px] mt-9 sm:mt-10 w-[200px] sm:w-[150%] md:w-[200%] lg:w-[350%] pl-5 h-[35px]"
            value={textToSearch}
            onKeyDown={Search}
            onChange={(e) => {
              settextToSearch(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="ml-7 p-1 mt-1 sm:mt-4 flex justify-between w-[310px] sm:w-[30%]">
        <button className="flex" onClick={selectall}>
          <div>
            <AiOutlineSearch className="mt-1 m-1" />
          </div>
          {SelectWeb ? (
            <>
              <div className="border-b-4 border-[#0c0c0c] w-[22px]">All</div>
            </>
          ) : (
            <>
              <div>All</div>
            </>
          )}
        </button>
        <button className="flex" onClick={selectimg}>
          <div>
            <BsCardImage className="mt-1 m-1" />
          </div>
          {Selectimg ? (
            <>
              <div className="border-b-4 border-[#0c0c0c] w-[50px]">Images</div>
            </>
          ) : (
            <>
              <div>Images</div>
            </>
          )}
        </button>
        <button className="flex" onClick={selectvdo}>
          <div>
            <RiVideoLine className="mt-1 m-1" />
          </div>
          {Selectvdo ? (
            <>
              <div className="border-b-4 border-[#0c0c0c] w-[42px]">Video</div>
            </>
          ) : (
            <>
              <div>Video</div>
            </>
          )}
        </button>
        <button className="flex" onClick={selectnews}>
          <div>
            <BiNews className="mt-1 m-1" />
          </div>
          {Selectnews ? (
            <>
              <div className="border-b-4 border-[#0c0c0c] w-[40px]">News</div>
            </>
          ) : (
            <>
              <div>News</div>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
