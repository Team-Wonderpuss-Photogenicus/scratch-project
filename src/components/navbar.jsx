import React from "react";
import styles from "../stylesheet/styles.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logoContainer">
        <img src="../assets/giphy.gif" alt="logo" className="logo" />
      </div>
      <div className="title">Wonderpuss Photogenicus</div>
      <div className="profileContainer">
        <button className="login">Register</button>
        <button className="login">Login</button>
        <img src="../assets/profile.png" alt="profile" className="profileImg" />
      </div>
    </nav>
  );
};

export default Navbar;
