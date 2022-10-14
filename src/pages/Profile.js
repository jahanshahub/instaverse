import react, { useEffect } from "react";
import Header from "../components/Header";
import { useEthers, useEtherBalance } from "@usedapp/core";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import PostInput from "../components/PostInput";
import ChatRoom from "../components/ChatRoom";
import ShowRoom from "../components/ShowRoom";
import { exploreList } from "../constants/MockupData";

import "../styles/Profile.css";

const Profile = () => {
  const {activateBrowserWallet, account} = useEthers();

  useEffect(()=>{
    activateBrowserWallet();
  },[])

  return (
    <>
        <Header />

        <div id="profile">
            <ProfileCard />
            <PostInput />
            <div className="row my-3">
                <ChatRoom />
                <ShowRoom list={exploreList} />
            </div>
        </div>

        <Footer />
    </>
  );
};

export default Profile;
