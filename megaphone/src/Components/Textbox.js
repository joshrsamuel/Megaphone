import React from "react";

function Textbox(props) {
    return (
        <div>
            <label>{props.name}</label>
            <img src={props.imageSource}></img>
        </div>
    )
}

export default Textbox