import React from "react";
import Image from "./Image";
import "../CSS/MessageBox.css";

function MessageBox(props) {
    return (
        <div className={"message-box " + props.transform}>
          <Image imageSource={require("../Images/Message_Box.png")}></Image>
          <div className="centered-text">
            <p>{props.text}</p>
          </div>
        </div>
    )
}

export default MessageBox