import React from "react";
//import style from  "./Banner.css"
import './Banner.css';
//Navigation Bar Component

const Banner = props => (
  <div className="jumbotron bg-dark text-center text-white">
      <h1>Drakengard | Nier Automata</h1>
      <h5>How to play</h5>
      <p>Don't click on the same image twice to gain points!</p>
  </div>
)

export default Banner;