import React from "react";
import Home from "./Pages/home/home";
import Docs from "./Pages/docs/docs"
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/docs" element={<Docs/>}/>
      </Routes>
    </Router>
  )
}

export default App;
