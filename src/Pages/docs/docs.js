import React from "react";
import './docs.css'

import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from "../../Components/Sidebar/Sidebar";
import {docs} from "../../Data/docs/docsTable.js";

const Docs = ({Page = 0}) => {
    return (
        <div className="docs-main-container">
            <Navbar/>
            <Sidebar List={docs} Title="Basics" Page={Page}/>
        </div>
    )
}

export default Docs