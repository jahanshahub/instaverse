import react, { useState } from "react";
import PostCard from "./PostCard";
import {messages} from "../constants/Messages";

import "../styles/ChatRoom.css";

const ChatRoom = () => {
    const [button, setButton] = useState(0);

    return (
        <div className="chatroom col-lg-6 mt-3">
            <div className="button-group d-flex">
                <button className={`default-button me-5 ${button===0?'active':''}`} onClick={()=>setButton(0)}>My Posts</button>
                <button className={`default-button me-5 ${button===1?'active':''}`} onClick={()=>setButton(1)}>Public</button>
                <button className={`default-button ${button===2?'active':''}`} onClick={()=>setButton(2)}>Trending</button>
            </div>
            <div className="chatroom-content">
            {
                messages.map((msg, i) =>
                    <PostCard key={i} message={msg} />
                )
            }
            </div>
        </div>
    );
};

export default ChatRoom;
