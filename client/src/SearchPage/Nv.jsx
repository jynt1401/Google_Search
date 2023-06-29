import React, { useContext, useEffect } from "react";
import { SearchContext } from "../Context/SearchContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { dataNews } from "../Data/News";
import { dataWeb } from "../Data/Web";
import { dataVdo } from "../Data/Vidoe";
import { dataImg } from "../Data/Images";

export default function Nv() {
  console.log(dataNews);
  console.log(dataWeb);
  console.log(dataVdo);
  console.log(dataImg);

  const navigate = useNavigate();
  const {
    textToSearch,
    settextToSearch,
    SearchText,
    setSearchText,
    Web,
    setWeb,
    Img,
    setImg,
    Vdo,
    setVdo,
    News,
    setNews,
  } = useContext(SearchContext);

  console.log("you searched******************************");
  console.log(SearchText);

  const Search = (e) => {
    if (e.keyCode === 13) {
      setSearchText(textToSearch);
      console.log("use searched this");
    }
  };

  const getdata = async () => {
    // await axios({
    //   method: "GET",
    //   url: "https://google-search-json.p.rapidapi.com/search/web",
    //   params: {
    //     q: SearchText,
    //     gl: "US",
    //     lr: "lang_en",
    //     start: "0",
    //   },
    //   headers: {
    //     "X-RapidAPI-Key": "647e202f00mshba8cc6bbd314fbdp14ff09jsna5b14c0b3c5b",
    //     "X-RapidAPI-Host": "google-search-json.p.rapidapi.com",
    //   },
    // }).then((res) => {
    //   if (res.status === 200) {
    //     setWeb(res.data.items);
    //   } else {
    //     console.log("failed to get web");
    //     setWeb([]);
    //   }
    // });
    // await axios({
    //   method: "GET",
    //   url: "https://google-search72.p.rapidapi.com/imagesearch",
    //   params: {
    //     q: SearchText,
    //     gl: "US",
    //     lr: "lang_en",
    //     start: "0",
    //   },
    //   headers: {
    //     "X-RapidAPI-Key": "647e202f00mshba8cc6bbd314fbdp14ff09jsna5b14c0b3c5b",
    //     "X-RapidAPI-Host": "google-search72.p.rapidapi.com",
    //   },
    // }).then((res) => {
    //   if (res.status === 200) {
    //     setImg(res.data.items);
    //   } else {
    //     console.log("failed to get img");
    //     setImg([]);
    //   }
    // });
    // await axios({
    //   method: "GET",
    //   url: "https://youtube-search-results.p.rapidapi.com/youtube-search/",
    //   params: {
    //     q: SearchText,
    //   },
    //   headers: {
    //     "X-RapidAPI-Key": "647e202f00mshba8cc6bbd314fbdp14ff09jsna5b14c0b3c5b",
    //     "X-RapidAPI-Host": "youtube-search-results.p.rapidapi.com",
    //   },
    // }).then((res) => {
    //   if (res.status === 200) {
    //     setVdo(res.data.items);
    //   } else {
    //     console.log("failed to get video");
    //     setVdo([]);
    //   }
    // });
    // await axios({
    //   method: "GET",
    //   url: "https://bing-news-search1.p.rapidapi.com/news/search",
    //   params: {
    //     q: SearchText,
    //     freshness: "Day",
    //     textFormat: "Raw",
    //     safeSearch: "Off",
    //   },
    //   headers: {
    //     "X-BingApis-SDK": "true",
    //     "X-RapidAPI-Key": "647e202f00mshba8cc6bbd314fbdp14ff09jsna5b14c0b3c5b",
    //     "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    //   },
    // }).then((res) => {
    //   if (res.status === 200) {
    //     setNews(res.data.value);
    //   } else {
    //     console.log("failed to get news");
    //     setNews([]);
    //   }
    // });
  };

  console.log("---------web---------");
  console.log(Web);
  console.log("---------img---------");
  console.log(Img);
  console.log("---------vdo---------");
  console.log(Vdo);
  console.log("---------news---------");
  console.log(News);

  useEffect(() => {
    getdata();
  }, [SearchText]);

  const handleclick = () => {
    settextToSearch("");
    navigate("/");
  };
  return (
    <div>
      <div onClick={handleclick}>Google</div>
      <div>nav bar.............you searched </div>

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
