import React from "react";
import NavBar from "../Components/NavBar";
import "../CSS/Home.css";

function Home(props) {
  return (
    <div className="background">
      <NavBar />
      <label>Hello there</label>
    </div>
  );
}

export default Home;
