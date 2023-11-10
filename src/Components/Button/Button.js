import React, { useState } from "react";

const Button = ({   
        Text, 
        FColor, 
        BColor, 
        HFColor, 
        HBColor, 
        BRadius, 
        Border, 
        Transition,
        Cursor,
        Link,
        Height,
        Width,
        FontSize,
        Padding,
        OnClick,
    }) => {
    const [isHovering, setHovering] = useState(false)

    return (
        <a href={Link}>
            <button 
            onPointerEnter={() => setHovering(true)}
            onPointerLeave={() => setHovering(false)}
            onClick={OnClick}
            style={{
                transition: Transition,
                color: isHovering && HFColor? HFColor:FColor,
                background: isHovering && HBColor ? HBColor:BColor,
                border: Border?Border:'none',
                borderRadius: BRadius,
                width: Width?Width:'80px',
                height: Height?Height:'40px',
                cursor: Cursor,
                fontSize: FontSize,
                padding: Padding,
                fontFamily: 'Open Sans,ui-sans-serif,system-ui,sans-serif'
            }}>
                {Text}
            </button>   
        </a>
    )
}

export default Button