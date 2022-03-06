import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Footer from './components/footer';
import injectContext from "./store/appContext"

function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
        <Route path='/' element={<Home />}/>
       </Routes>
      <Footer />
     </Router>
    </div>
    
  );
}

export default injectContext(App);
