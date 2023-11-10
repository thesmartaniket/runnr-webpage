import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import './about.css'
import Icon from '../../Icons/runnr_icon_color.jpeg'
import BG from "../../Components/BG/BG";
import Footer from "../../Components/Footer/Footer.js"

const About = () => {
    return (
        <div>
            <BG/>
            <Navbar/>
            <div className="about-main-container">
                <img src={Icon}/>
                <div>
                    <p>Created by <a href="https://www.linkedin.com/in/thesmartaniket/">Aniket Biswas</a></p>
                    <p>Maintained by <a href="https://github.com/LuciferStix">Akarsit Singh</a></p>
                </div>
            </div>
        </div>
    )
}

export default About