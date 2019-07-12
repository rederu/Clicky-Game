import React from "react";

//Navigation Bar Component

const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand mr-auto" href="/">Nier | Drakengard Clicky Game</a>
    <div className="navbar-nav text-white">
      Your Score: {props.score} || High Score: {props.highScore}
    </div>
  </nav>
)

export default Navbar;