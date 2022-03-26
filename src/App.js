import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Login from "./components/Login/Login";
import Form from "./views/Form/Form";
import EditData from "./components/Editdata/EditData";
// import Favorites from "./views/Favorites/Favorites";
import injectContext from "./store/appContext";
import Product from "./views/Product/Product";
import MatchStatus from "./views/MatchStatus/MatchStatus";
import Details from "./views/Details/Details";
import UserProfile from "./views/UserProfile/UserProfile";
import Logueado from "./views/Logueado";
import AboutUs from "./views/AboutUs/AboutUs"
import AboutUsLog from "./views/AboutLogin/AboutUsLog"
import TheMostRead from "./components/TheMostRead/TheMostRead";
// import AcceptDeleteMatch from "./views/AcceptDeleteMatch/AcceptDeleteMatch";
import PendingMatch from "./views/UserProfile/Buttons/PendingMatch/PendindMatch"
import AceptedMatch from "./views/UserProfile/Buttons/AceptedMatch/AceptedMatch"
import DetailsMyBooks from "./views/DetailsMyBooks/DetailsMyBooks"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logueado" element={<Logueado />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/newaccount" element={<Form />} />
          <Route path="/miperfil/editdata" element={<EditData />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/userprofile/pendingmatch" element={<PendingMatch />} />
          <Route path="/userprofile/aceptedmatch" element={<AceptedMatch />} />
          {/* <Route path="/miperfil/misfavoritos" element={<Favorites />} /> */}
          <Route path="/match-status" element={<MatchStatus />} />
          <Route path="/admin/product" element={<Product />} />
          <Route path="/details/" element={<Details />} />
          <Route path="/detailsmybooks" element={<DetailsMyBooks />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/aboutuslog" element={<AboutUsLog />} />
          <Route path="/losmasleidos" element={<TheMostRead />} />
          {/* <Route path="/userprofile/matchpendientes" element={<AcceptDeleteMatch />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default injectContext(App);