import React from "react";
import './docs.css'

import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from "../../Components/Sidebar/Sidebar";
import {docs_cli} from "../../Data/docs/docsTable.js";

const RunnrDocs = () => {
    return (
        <div className="docs-main-container">
            <Navbar/>
            <Sidebar List={docs_cli} Title="Runnr"/>
        </div>
    )
}

export default RunnrDocs