import React from "react";
import Image from "./Image";
import "../CSS/NavBar.css";

function NavBar(props) {
  return (
    <div className="nav-background">
      {/* What kind of components can go here? */}
      <Image className="icon" imageSource={require("../Images/Icon.png")}></Image>
      <Image className="name" imageSource={require("../Images/Name.png")}></Image>
      <label className="summary">Let our voices be heard!</label>
    </div>
  );
}

export default NavBar;
