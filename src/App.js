import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import MatchStatus from "./views/MatchStatus";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App ">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/match-status" element={<MatchStatus />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
