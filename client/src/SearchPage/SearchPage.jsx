import React, { useContext, useEffect } from "react";
import Nv from "./Nv";
import { SearchContext } from "../Context/SearchContext";
import Error from "./Error";
import Img from "./Img/Img";
import Vdo from "./Video/Vdo";
import News from "./News/News";
import Web from "./Web/Web";


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
  console.log("***************************************");
  useEffect(() => {}, [Webdata, Imgdata, Vdodata, Newsdata]);

  return (
    <div>
      <Nv />

      {SelectWeb ? (
        <>
          {Webdata.length === 0 ? (
            <>
              <Error />
            </>
          ) : (
            <>
              <Web wdata={Webdata} />
            </>
          )}
        </>
      ) : (
        <></>
      )}
      {Selectimg ? (
        <>
          {Imgdata.length === 0 ? (
            <>
              <Error />
            </>
          ) : (
            <>
              <Img data={Imgdata} />
            </>
          )}
        </>
      ) : (
        <></>
      )}
      {Selectvdo ? (
        <>
          {Vdodata.length === 0 ? (
            <>
              <Error />
            </>
          ) : (
            <>
              <Vdo data={Vdodata} />
            </>
          )}
        </>
      ) : (
        <></>
      )}
      {Selectnews ? (
        <>
          {Newsdata.length === 0 ? (
            <>
              <Error />
            </>
          ) : (
            <>
              <News data={Newsdata} />
            </>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
