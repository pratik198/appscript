import React from "react";
import "./Header.css";
import LogoImg from "../../Assets/LogoImg.png";
import Search from "../../Assets/Search.png";
import Heart from "../../Assets/Heart.png";
import ShoppingBag from "../../Assets/ShoppingBag.png";
import User from "../../Assets/User.png";
import ENG from "../../Assets/ENG.png";
import DownArrow from "../../Assets/DownArrow.png";
const Header = () => {
  return (
    <div>
      <div className="upper_header">
        <div className="inner_upper_header">
          <div className="logo_img">
            <img src={LogoImg} alt=".." />
          </div>
          <div className="logo_text">
            <h1>
              <strong>LOGO</strong>
            </h1>
          </div>
        </div>
        <div className="icons">
          <img src={Search} alt=".." />
          <img src={Heart} alt=".." />
          <img src={ShoppingBag} alt=".." />
          <img src={User} alt=".." />
          <div className="lang">
            <img src={ENG} alt=".." />
            <img src={DownArrow} alt="" />
          </div>
        </div>
      </div>

      <div className="lower_header">
        <h5>SHOP</h5>
        <h5>SKILLS</h5>
        <h5>STORIES</h5>
        <h5>ABOUT</h5>
        <h5>CONTACT US</h5>
      </div>

      <div className="heading">
        <p style={{ fontSize: "35px", marginBottom: 0 }}>
          DISCOVER OUR PRODUCTS
        </p>
        <p style={{ textAlign: "center", fontSize: "16px", width: "46em" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque,
          delectus deleniti! Unde, sit omnis adipisci quos nam tempora molestiae
          commodi?
        </p>
      </div>
    </div>
  );
};

export default Header;
