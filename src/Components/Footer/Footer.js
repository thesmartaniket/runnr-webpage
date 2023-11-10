import React from "react";
import './Footer.css'
import Button from "../Button/Button";
import Icon from "../../Icons/runnr_icon.png"
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate()
    const list = [
        {title: 'Home', link: '/'},
        {title: 'Docs', link: '/docs'},
        {title: 'Install', link: '/docs/install'},
        {title: 'About', link: '/about'}
    ]

    return (
        <div className="footer-main-container">
            <img style={{width: '25px', height: '25px'}} src={Icon}/>
            {
                list.map((e, i) => {
                    return <Button 
                        Text={e.title} 
                        BColor={'transparent'} 
                        FColor={'white'} 
                        Cursor={'pointer'} 
                        HFColor={'#52a2da'} 
                        OnClick={() => navigate(e.link)}
                        Transition={'0.2s'}
                        Padding={'10px'}
                    />
                })
            }
        </div>
    )
}

export default Footer