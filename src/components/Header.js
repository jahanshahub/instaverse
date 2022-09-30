import react, { useContext } from "react";
import { Link } from "react-router-dom";
import { useEthers, useEtherBalance } from "@usedapp/core";
import logo from "../assets/images/logo.png";
import Search from "./Search";

const Header = () => {

    const {activateBrowserWallet, account} = useEthers();
    const etherBalance = useEtherBalance(account);

    const handleWallet = () => {
      activateBrowserWallet();

    }

    return (
      <div id="header">
        <div className="logo-search">
          <Link to='/' id='logo'>
            <img width="77px" height="auto" src={logo} alt="INSTAVERSE Logo" />
          </Link>
          <Search />
          {/* <form className="form"><i className="fa fa-search"></i><input className="search" type="search" placeholder="Search..." /></form> */}
        </div>

        <div id="link-containers">
          <Link to='/home'>Home</Link>
          <Link to='/explore'>Explore</Link>
          <Link to='/notification'>Notification</Link>
          <Link to='/profile'>Profile</Link>

          <button id="connect-wallet" onClick={handleWallet} >{!account ? 'Connect' : account}</button>
        </div>
      </div>
    );
}

export default Header;