import React from "react";

function Image(props) {
    return (
        <div>
            <img className={props.className} src={props.imageSource}></img>
        </div>
    )
}

export default Image