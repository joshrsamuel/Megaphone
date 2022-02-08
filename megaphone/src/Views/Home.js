import React from "react";
import NavBar from "../Components/NavBar";
import UseStateDemo from "../Components/UseStateDemo";
import "../CSS/Home.css";

function Home(props) {
  return (
    <div className="background">
      <NavBar />
      <UseStateDemo />
      <span>Hello there</span>
    </div>
  );
}

export default Home;
