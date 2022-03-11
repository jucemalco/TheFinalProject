import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Footer from './components/footer';
import NavBar from './components/navbar';
import Formsignin from './components/formsignin';
import { Component } from 'react';

function App() {
  return (
    <div className="App">
     <Router>
       <NavBar />
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login/formsignin' element={<Formsignin />} />
       </Routes>
      <Footer />
     </Router>

    </div>
  );
}

export default App;
