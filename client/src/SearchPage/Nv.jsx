import React, { useContext, useEffect } from "react";
import { SearchContext } from "../Context/SearchContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Nv() {
  const navigate = useNavigate();
  const { textToSearch, settextToSearch, SearchText, setSearchText } =
    useContext(SearchContext);

  console.log("you searched******************************");
  console.log(SearchText);

  const Search = (e) => {
    if (e.keyCode === 13) {
      setSearchText(textToSearch);
      console.log("use searched this");
    }
  };

  const getdata = async () => {
    // ---------------web----------------//
    // await axios({
    //     method: "GET",
    //     url: "https://google-search-json.p.rapidapi.com/search/web",
    //     params: {
    //       q: "elon musk",
    //       gl: "US",
    //       lr: "lang_en",
    //       start: "0",
    //     },
    //     headers: {
    //       "X-RapidAPI-Key":
    //         "647e202f00mshba8cc6bbd314fbdp14ff09jsna5b14c0b3c5b",
    //       "X-RapidAPI-Host": "google-search-json.p.rapidapi.com",
    //     },
    //   }).then((res) => {
    //     console.log("----------web------------");
    //     console.log(res.data.items);
    //   });
    // ------------images-------------------//
    //   await axios({
    //     method: "GET",
    //     url: 'https://google-search72.p.rapidapi.com/imagesearch',
    //     params: {
    //       q: "elon musk",
    //       gl: "US",
    //       lr: "lang_en",
    //       start: "0",
    //     },
    //     headers: {
    //      'X-RapidAPI-Key': '647e202f00mshba8cc6bbd314fbdp14ff09jsna5b14c0b3c5b',
    //       'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
    //     },
    //   }).then((res) => {
    //     console.log("----------images------------");
    //     console.log(res.data.items);
    //   });
    // ------------videos-------------------//
    //   await axios({
    //     method: "GET",
    //     url:  'https://youtube-search-results.p.rapidapi.com/youtube-search/',
    //     params: {
    //       q: "elon musk",
    //     },
    //     headers: {
    //      'X-RapidAPI-Key': '647e202f00mshba8cc6bbd314fbdp14ff09jsna5b14c0b3c5b',
    //      'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
    //     },
    //   }).then((res) => {
    //     console.log("----------videos------------");
    //     console.log(res.data.items);
    //   });
    // ------------news-------------------//
    // await axios({
    //   method: "GET",
    //   url: "https://bing-news-search1.p.rapidapi.com/news/search",
    //   params: {
    //     q: "elon musk",
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
    //   console.log("----------news------------");
    //   console.log(res.data.value);
    // });
  };

  useEffect(() => {
    getdata();
  }, [SearchText]);

  const handleclick = () => {
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
