import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Navbar.css'
import Button from "../Button/Button.js";
import NavIcon from '../../Icons/runnr_icon.png'
import NavText from '../../Icons/runnr_text.png'
import HamMenu from '../../Icons/menu.png'
import Cross from '../../Icons/close.png'

const Navbar = () => {
    const navButtons = [
        {title: 'Home', link: '/'},
        {title: 'Documentation', link: '/docs'},
        {title: 'Install', link: '/docs/install'},
        {title: 'Source Code', link: "https://github.com/thesmartaniket/runnr.git"},
        {title: 'About', link: '#'}
    ]

    const navigate = useNavigate()

    const [width, setWidth] = useState(window.innerWidth)
    const [isMenu, setMenu] = useState(false)

    const updateDimension = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', updateDimension)
        return () => window.removeEventListener('resize', updateDimension)
    }, [])

    return (
        <div className="navbar-main">
            <div onClick={() => navigate('/')} className="left-logo">
                <img src={NavIcon}/>
                <img id="logo-text" style={{width: '48px'}} src={NavText}/>
            </div>

            <div style={{
                display: (isMenu && width < 720 || width > 720) ?"flex":"none",
                flexDirection: width < 720 ? 'column' : 'row'
            }} className="mobile-menu">
                {
                    navButtons.map((element, index) => {
                        return (
                            <div key={index}>
                                <Button 
                                    Text={element.title} 
                                    Link={element.link} 
                                    BColor={'transparent'} 
                                    HBColor={'#437fc0'}
                                    FColor={'white'}
                                    Width={'fit-content'}
                                    BRadius={'10px'}
                                    Padding={'10px'}
                                    Transition={'0.35s'}
                                    Cursor={'Pointer'}
                                    FontSize={'14px'}
                                    OnClick={() => {
                                        if(element.link.indexOf('https') == -1){
                                            navigate(element.link)
                                        }
                                    }}
                                />
                            </div>
                        )
                    })
                }
            </div>

            <img className="ham-menu" onClick={() => setMenu(!isMenu)} src={isMenu?Cross:HamMenu}/>
        </div>
    )
}

export default Navbar