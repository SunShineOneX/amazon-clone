import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom";
function Header() {
    return (
        <nav className="header">
            {/* logo on the left -> img */}
            <Link to="/">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>

            <input type="text" className="header__searchInput" />

            {/* search box */}
            {/* 3 links */}
            {/* basket icon with number */}
        </nav>
    )
}

export default Header;
