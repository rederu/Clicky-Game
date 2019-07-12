import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

class App extends Component {
  //State
  state = {
    count: 0,
    highScore: 0
  }



  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
     
      </div>
    );
  }
}

export default App;
