import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Footer from './components/footer';
import Navbar from './components/Navbar'
import Login from "./components/Login";
import Form from "./views/Form";
import EditData from "./views/EditData";
import ProfileNavbar from "./components/ProfileNavbar";
import Favorites from "./views/Favorites";



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
      
      
      

       </Routes>
      <Footer />
     </Router>

    </div>
  );
}

export default App;
