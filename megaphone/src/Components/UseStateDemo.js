import { React, useState } from "react";

function UseStateDemo(props) {
  //   let curVal = 0;
  const [curVal, setCurVal] = useState(0);

  const increment = () => {
    setCurVal((curVal) => curVal + 1);
    curVal++;
  };
  return (
    <div className="button-demo">
      <span>{curVal}</span>
      <button onClick={increment}>Press Me!</button>
    </div>
  );
}

export default UseStateDemo;
