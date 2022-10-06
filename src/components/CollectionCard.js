import React, { useEffect, useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { ColorExtractor } from 'react-color-extractor'
import Card from "./base/Card";
import "../styles/CollectionCard.css";

const CollectionCard = ({ collectionInfo, rate, onClick }) => {

  const [isLike, setIsLike] = useState(false);
  const [colors, setColors] = useState([]);

  const like = () => setIsLike(!isLike);

  const getColors = colors => {
    setColors(c => [...c, ...colors]);
    //console.log(colors);
  }


  return (
    <Card
      blurColor={colors[0]}

      child={
        <div className="collection-card">
            <p className="collection-card-number m-0">{rate}</p>
            <div style={{"width": "90px"}}><ColorExtractor getColors={getColors}>
                <img width="50px" height="50px" className="collection-card-image" style={{"borderRadius": "8px"}} alt={collectionInfo.name} src={collectionInfo.src} />
            </ColorExtractor></div>
            <p className="collection-card-name m-0">{collectionInfo.name}</p>
            <p className="collection-card-floor m-0">{collectionInfo.floor}</p>
            <p className="collection-card-volume m-0">{collectionInfo.volume}</p>
        </div>
        }>

    </Card>
  );
};

export default CollectionCard;