import React from 'react';

import { Link } from "react-router-dom";

import logo from '../../img/logo.png';

function Header() {
    return (
        <header>
            <div className="header">
                <div className="container headerContainer">
                    <Link className="logo" to="/" exact="true">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;