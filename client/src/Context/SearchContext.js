import { createContext, useState } from "react";

export const SearchContext = createContext("");

const SearchInfo = ({ children }) => {
  const [textToSearch, settextToSearch] = useState("");
  const [SearchText, setSearchText] = useState("");
  const [Webdata, setWebdata] = useState([]);
  const [Imgdata, setImgdata] = useState([]);
  const [Vdodata, setVdodata] = useState([]);
  const [Newsdata, setNewsdata] = useState([]);

  const [SelectWeb, setSelectWeb] = useState(true);
  const [Selectimg, setSelectimg] = useState(false);
  const [Selectvdo, setSelectvdo] = useState(false);
  const [Selectnews, setSelectnews] = useState(false);

  return (
    <SearchContext.Provider
      value={{
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
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
export default SearchInfo;
