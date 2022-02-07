import React from "react";
import NavBar from "../Components/NavBar";
import Image from "../Components/Image";
import MessageBox from "../Components/MessageBox";
import "../CSS/Home.css";

function Home(props) {
  return (
    <div className="background">
      <NavBar />
      <div className="images">
        <div className="inline-block">
          <Image className="label" imageSource={require("../Images/Name.png")}></Image>
          <Image className="logo" imageSource={require("../Images/Icon.png")}></Image>
          <div className="messages">
            <MessageBox transform="rotate-up" text="Let me search for a protest!"></MessageBox>
            <MessageBox transform="translate-right" text="I want to start my own protest!"></MessageBox>
            <MessageBox transform="rotate-down" text="Help me find a protest that interests me!"></MessageBox>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
