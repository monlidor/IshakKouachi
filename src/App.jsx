import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./portfolio";
import TP1 from "./TP1";
import TP2 from "./TP2";
import TP3 from "./TP3";

function App() {
    return (     
    <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/tp1" element={<TP1 />} />
          <Route path="/tp2" element={<TP2 />} />
          <Route path="/tp3" element={<TP3 />} />
        </Routes>
      </Router>
    );
}

export default App;