import React from 'react';
import "./Header.css";
import logo from './logo.jpg'


function Header() {

    return (
        <div className="header">
            <div className="header__left">
            <img src={logo} alt={"logo"}/> 
                <div className="header__input">
                    
                </div>
            </div>

            <div className="header__center">
                
            </div>

            <div className="header__right">
                <div className="header__info">
                    
                </div>

                
            </div>
        </div>
    )
}

export default Header