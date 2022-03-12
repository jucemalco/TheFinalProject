import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Footer from "./components/Footer/Footer";
import injectContext from "./store/appContext";
import Product from "./views/Product";
import NavBar from "./components/navbar";
import Formsignin from "./components/formsignin";
import MatchStatus from "./views/MatchStatus";
import { Component } from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/formsignin" element={<Formsignin />} />
          <Route path="/match-status" element={<MatchStatus />} />
          <Route path="/admin/product" element={<Product />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default injectContext(App);
