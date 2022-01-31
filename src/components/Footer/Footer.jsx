import React from 'react';
import icon from "../../image/icon.png"
import "./footer.css"

function Footer() {
    return <div className='footerContainer'>
        <div className='footerLeftContainer'>
            <img className='icon' src={icon} alt="" />
            
        </div>
        <div className='footerRightContainer'>
            {/* aca van a ir las redes sociales */}
        </div>
    </div>;
}

export default Footer;
