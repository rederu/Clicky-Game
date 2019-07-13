import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Container from "./components/Container";


class App extends Component {
  // setting the state
  state = {
    count: 0,
    highScore: 0
  }

 //Update Score in Navbar
  updateCurrentScore = (newCount) => {
    // set the new count as the count
    this.setState({count: newCount});
  }

 //Update High Score
  updateHighScore = (newHigh) => {
   //If high score > current high score
    if (newHigh > this.state.highScore) {
      // then set the state but you have to subtract 1
      this.setState({highScore: newHigh - 1})
    }
  }

  render() {
    return (
      <div>
        <Navbar score={this.state.count} highScore={this.state.highScore}/>
        <Banner/>
        <Container updateCurrentScore={this.updateCurrentScore} updateHighScore={this.updateHighScore}/>
      </div>
    );
  }
}

export default App;