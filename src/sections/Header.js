import React from "react";
import logo from '../assets/images/logo1.jpg'
import '../assets/styles/header.css';
import { Link } from "react-router-dom";

function Header() {

    return (
        <div className="header">
            <div className="logo-container">
                <h1 className="logo-header"></h1>
                <img className="logo-img" src={logo} alt="logo"></img>
            </div>
            <nav>
                <div class="nav-links--container">
                    <Link to="/">
                        <div>HOME</div>
                    </Link>
                    <Link to="/shop">
                        <div>SHOP</div>
                    </Link>
                    <Link>
                        <div>CONTACT</div>
                    </Link>
                </div>
            </nav>
            {/* <div className="shopping-cart--container">
                <div>SHOPPING CART</div>
            </div> */}
        </div>
    );
}

export default Header