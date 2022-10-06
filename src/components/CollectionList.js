import React from "react";
import { useNavigate } from "react-router-dom";
import CollectionCard from "./CollectionCard";
import "../styles/CollectionList.css";

const CollectionList = ({ list,type="horizontal" }) => {
  let navigate = useNavigate();

  return (
    <div className="collection-list row" style={{flexDirection:type==="horizontal" ? "row" : "column"}}>
      <div className="table-header col-lg-6 p-3 d-flex flex-row justify-content-between align-items-center">
        <p className="text-white">Rate</p>
        <p className="text-white">Collection</p>
        <p className="text-white">Name</p>
        <p className="text-white">Floor</p>
        <p className="text-white">Volume</p>
      </div>
      <div className="table-header col-lg-6 p-3 d-flex flex-row justify-content-between align-items-center">
        <p className="text-white">Rate</p>
        <p className="text-white">Collection</p>
        <p className="text-white">Name</p>
        <p className="text-white">Floor</p>
        <p className="text-white">Volume</p>
      </div>
      {list !== undefined ?
        list.map((item,index) => (
          <div className="col-lg-6 px-3 gx-5" key={index}>
            <CollectionCard collectionInfo={item} rate={index+1} key={index} onClick={()=>navigate('/detail',{state:{item:item}})}/>
          </div>
        )) : <>No Collection</>
      }
    </div>
  );
};

export default CollectionList;
