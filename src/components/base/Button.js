import React, { useState } from "react";
import "../../styles/base/Button.css";

const Button = ({
  width = "100%",
  height = "auto",
  color = "#ffffff",
  borderRadius = "10px",
  onClick,
  textColor = "black",
  textContent = 'Button',
  child
}) => {
  const [isHover, setHover] = useState(false);

  return (
    <button
      className="default-button"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      style={{
        width: `${width}`,
        height: `${height}`,
        color: `${isHover ? textColor : color}`,
        borderRadius: `${borderRadius}`,
        fontSize: '20px',
        padding: '8px 16px',
        // border: `1px solid ${color}`,
        transition: "background-color .5 ease-in-out",
        backgroundColor: isHover ? color : "#8821bb",
      }}
    >
      {child ? child : textContent}
    </button>
  );
};

export default Button;
