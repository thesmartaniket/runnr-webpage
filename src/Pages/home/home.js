import React, { useEffect, useState } from "react";
import Navbar from '../../Components/Navbar/Navbar.js'
import RIcon from '../../Icons/runnr_icon_color.jpeg'
import './home.css'

import DataTile from "../../Components/DataTile/DataTile.js";
import DataForTile from '../../Data/Data.js'
import Footer from "../../Components/Footer/Footer.js";

const Home = () => {
    return (
        <div className="main-container">
            <Navbar/>

            <div className="tab-1">
                <p id="p1">Simple yet Powerful.</p>
                <p id="p2">A single tool to compile, interpret & build programs.</p>
                <img src={RIcon}/>
            </div>

            <div className="slant-empty"></div>

            <div className="tab-2">
                <p id="p1">Features</p>

                <div style={{width: '99vw'}}>
                    {
                        DataForTile.map((e, i) => {
                            return (
                                <div id={i}>
                                    <DataTile Icon={e.Icon} Title={e.Title} Paragraph={e.Paragraph}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Home