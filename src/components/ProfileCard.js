import { useEffect } from "react";
import { Link } from "react-router-dom";
import userProfile from "../assets/images/user.png";

import "../styles/ProfileCard.css";

const ProfileCard = () => {

  return (
    <>
        <div id="profile-info">
            <div className="profile-image">
                <img width="100%" height="auto" src={userProfile} alt="User Profile" />
            </div>
            <div className="user-info">
                <div className="user-content me-5">
                    <h2>Tom Myers, 34</h2>
                    <Link to="#">About</Link>
                    <p className="mb-3">Crypto and NFT enthusuiast, 2D and 3D graphic designer, Marketing Specialist, Developer</p>
                    <p>#wagmi #nfts #nftcollector #designer #art #blockchain</p>
                </div>
                <div>
                    <div className="d-flex justify-content-between">
                        <button className="follow-button">Follow</button>
                        <button className="send-button">Send DM</button>
                    </div>
                    <div className="d-flex">
                        <div className="p-3">
                            <h3 className="text-white" style={{"textDecoration": "underline"}}>Followers</h3>
                            <h2 className="text-white">1475</h2>
                        </div>
                        <div className="p-3">
                            <h3 className="text-white" style={{"textDecoration": "underline"}}>NFTS</h3>
                            <h2 className="text-white">87</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default ProfileCard;
