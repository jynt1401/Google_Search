import React, { useContext } from "react";
import Nv from "./Nv";
import { SearchContext } from "../Context/SearchContext";
import Web from "./Web/Web";
import Img from "./Img/Img";
import Vdo from "./Video/Vdo";
import News from "./News/News";
import Error from "./Error";

export default function SearchPage() {
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
  console.log(Webdata);

  return (
    <div>
      <Nv />
      {SelectWeb?<><Web /></>:<></>}
      {Selectimg?<><Img /></>:<></>}
      {Selectvdo?<><Vdo /></>:<></>}
      {Selectnews?<><News /></>:<></>}

      
      <Error />
    </div>
  );
}
