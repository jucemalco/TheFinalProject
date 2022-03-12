import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Navbar from './components/Navbar'
import Login from "./components/Login";
import Form from "./views/Form";
import EditData from "./views/EditData";
import ProfileNavbar from "./components/ProfileNavbar";
import Favorites from "./views/Favorites";
import Footer from "./components/Footer/Footer";
import injectContext from "./store/appContext";
import Product from "./views/Product";
import MatchStatus from "./views/MatchStatus";
import Details from "./components/Details";
import { Component } from "react";

function App() {
  return (
    <div className="App">
     <Router>
       <Navbar />
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/login/newaccount" element={<Form />} />
        <Route path="/miperfil/editdata" element={<EditData />} />
        <Route path="miperfil" element={<ProfileNavbar />} />
        <Route path="/miperfil/misfavoritos" element={<Favorites />} />
        <Route path="/match-status" element={<MatchStatus />} />
        <Route path="/admin/product" element={<Product />} />
        <Route path="/details" element={<Details />} />
       </Routes>
      <Footer />
     </Router>
    </div>
  );
}

export default injectContext(App);
