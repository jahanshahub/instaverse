import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FiTwitter } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';

import "../styles/Footer.css";

const Footer = () => {

    return (
        <div id="footer">
            <h5 style={{"color": "rgba(255, 255, 255, 0.5)"}}>Decentralized Social<br/> Sharing Platform</h5>
            <img width="80px" style={{"margin": "0 90px"}} src={logo} alt="Footer" />
            <div className="social">
                <Link to="#" style={{"margin": "0"}}><FaTelegramPlane style={{"fontSize": "24px"}} /></Link>
                <Link to="#" style={{"margin": "0"}}><FiTwitter style={{"fontSize": "24px"}} /></Link>
            </div>
        </div>
    );
};

export default Footer;
