import React from "react";
import './docs.css'

import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from "../../Components/Sidebar/Sidebar";
import {docs_config} from "../../Data/docs/docsTable.js";

const ConfigDocs = ({Page = 0}) => {
    return (
        <div className="docs-main-container">
            <Navbar/>
            <Sidebar List={docs_config} Title="Configurations" Page={Page}/>
        </div>
    )
}

export default ConfigDocs