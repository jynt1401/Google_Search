import { createContext, useState } from "react";

export const SearchContext = createContext("");

const SearchInfo = ({ children }) => {
  const [textToSearch, settextToSearch] = useState("");
  const [SearchText, setSearchText] = useState("");
  const [Web, setWeb] = useState([]);
  const [Img, setImg] = useState([]);
  const [Vdo, setVdo] = useState([]);
  const [News, setNews] = useState([]);

  return (
    <SearchContext.Provider
      value={{
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
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
export default SearchInfo;
