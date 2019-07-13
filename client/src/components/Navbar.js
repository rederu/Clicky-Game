import React from "react";
import './Navbar.css';
//Navigation Bar Component

const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="navbar-brand mr-auto nier-text" ><h3>Nier | Drakengard Clicky Game</h3></div>
    <div className="navbar-nav text-white score-text">
      Your Score: {props.score} || High Score: {props.highScore}
    </div>
  </nav>
)

export default Navbar;