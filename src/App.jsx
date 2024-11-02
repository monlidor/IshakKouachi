import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./portfolio";
import TP1 from "./TP1";

function App() {
    return (     
    <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/tp1" element={<TP1 />} />
        </Routes>
      </Router>
    );
}

export default App;