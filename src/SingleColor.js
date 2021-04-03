import React, { useState, useEffect } from 'react'


const SingleColor = ({ rgb, weight, index, hexColor }) => {
    const [alert, setAlert] = useState(false);
    const bgc = rgb.join(',');
    const hexValue = `#${hexColor}`;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false);
        }, 2000)
        return () => clearTimeout(timeout)
    }, [alert]);
    
    return (
    <article 
        className={`color ${index > 9 && 'color-light'}`} 
        style={{backgroundColor: `rgb(${bgc})`}}
        onClick={() => {
            setAlert(true);
            navigator.clipboard.writeText(hexValue);
        }}
    >
        <p className="percent-value">{weight}%</p>
        <p className="color-value">{hexValue}</p>
        {alert && <p className="alert">Copied to clipboard!</p>}
    </article>
    )
}

export default SingleColor