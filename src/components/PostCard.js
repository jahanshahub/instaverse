import react, { useState } from "react";
import SocialButton from "./SocialButton";

const PostCard = ({profileImage, message}) => {

    return (
        <div className="post-card">
            <div className="post-image">
                <img width="100%" className="profile-image" src={message.profile} alt="Profile" />
            </div>
            <p className="text-center">{message.message}</p>
            <SocialButton />
        </div>
    );
};

export default PostCard;
