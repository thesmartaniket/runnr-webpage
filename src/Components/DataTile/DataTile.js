import React, { useEffect, useState } from "react";
import './DataTile.css'

const DataTile = ({Icon, Title, Paragraph}) => {

    const [width, setWidth] = useState(window.innerWidth)

    const updateWidth = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', updateWidth)
        return () => window.removeEventListener('resize', updateWidth)
    }, [])

    return (
        <div style={{
            width: (width < 720)?`${(width - 100)}px`:'350px',
            height: (width < 720)?'200px':'250px'
        }} className="data-tile-main">
            <div style={{
                display: 'flex', 
                gap: '25px',
                alignItems: 'center',
            }}>
                <img src={Icon}/>
                <p id="dt-p1">{Title}</p>
            </div>

            <p id="dt-p2">{Paragraph}</p>
        </div>
    )
}

export default DataTile