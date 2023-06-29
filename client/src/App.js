import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage/SearchPage";
import SearchInfo from "./Context/SearchContext";

function App() {
  return (
    <div className="App mx-auto">
      <Router>
        <SearchInfo>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/search" element={<SearchPage />} />
          </Routes>
        </SearchInfo>
      </Router>
    </div>
  );
}

export default App;
