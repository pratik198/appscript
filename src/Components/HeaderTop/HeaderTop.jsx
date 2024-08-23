import React from "react";
import "./HeaderTop.css";
import TopLogo from "../../Assets/TopLogo.png";

const HeaderTop = () => {
  return (
    <div className="header_top">
      <div className="frames">
        <img src={TopLogo} alt="" />
        <p>Lorem ipsum dolor</p>
      </div>
      <div className="frames">
        <img src={TopLogo} alt="" />
        <p>Lorem ipsum dolor</p>
      </div>
      <div className="frames">
        <img src={TopLogo} alt="" />
        <p>Lorem ipsum dolor</p>
      </div>
    </div>
  );
};

export default HeaderTop;
