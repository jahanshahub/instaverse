import { useNavigate } from "react-router-dom";
import NFTCard from "./NFTCard";

import "../styles/ChatRoom.css";

const ShowRoom = ({ list,type="horizontal" }) => {
    let navigate = useNavigate();

    return (
        <div className="showroom col-lg-6">
            <h1 className="text-white text-center">My Showroom</h1>
            <div className="nfts">
                <div id="card-list" style={{flexDirection:type=="horizontal" ? "row" : "column"}}>
                    {list.map((item,index) => (
                        <NFTCard nftSrc={item.src} key={index} onClick={()=>navigate('/detail',{state:{item:item}})}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShowRoom;
