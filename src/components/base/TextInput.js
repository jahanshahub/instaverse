import React from "react";
import '../../styles/base/TextInput.css';

//Base Input Component
//Usage: <Input width='550px' height='30px' />

const TextInput = ({width,height, placeholder='default input', icon,type}) => {
  return (
    <div className="search-wrapper">
      <div
        className="search-container"
        style={{
          width:`${width}`,
          height:`${height}`,
          background: `#64646e`,
        }}
      >
        {icon}
        <input id="search" placeholder={placeholder} type={type}/>
      </div>
    </div>
  );
};

export default TextInput;
