import React from "react";
import Home from "./Pages/home/home";
import Docs from "./Pages/docs/docs"
import ConfigDocs from "./Pages/docs/configDocs.js";
import RunnrDocs from "./Pages/docs/runnrDocs.js";
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/docs" element={<Docs/>}/>
        <Route exact path="/docs/config" element={<ConfigDocs/>}/>
        <Route exact path="/docs/runnr" element={<RunnrDocs/>}/>
      </Routes>
    </Router>
  )
}

export default App;
