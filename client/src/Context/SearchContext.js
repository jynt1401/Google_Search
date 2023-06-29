import { createContext, useState } from "react";

export const SearchContext = createContext("");

const SearchInfo = ({ children }) => {
  const [textToSearch, settextToSearch] = useState("");
  const [SearchText, setSearchText] = useState("");

  return (
    <SearchContext.Provider
      value={{
        textToSearch,
        settextToSearch,
        SearchText,
        setSearchText,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
export default SearchInfo;
