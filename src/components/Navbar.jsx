import React from "react";
import styles from "../stylesheet/styles.scss";
import logoImg from "../assets/giphy.gif";
import profileImg from "../assets/profile.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logoContainer">
        <img src={logoImg} alt="logo" className="logo" />
      </div>
      <div className="title">Wonderpuss Photogenicus</div>
      <div className="profileContainer">
        <button className="login">Register</button>
        <button className="login">Login</button>
        <img src={profileImg} alt="profile" className="profileImg" />
      </div>
    </div>
  );
};

export default Navbar;
