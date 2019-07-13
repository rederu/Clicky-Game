import React, { Component } from 'react';
import Card from './Card';
import Chars from "./../dranier.json"
import shuffle from "shuffle-array";
import './Container.css';


class Container extends Component {
	//Constructor
	constructor(props) {
		super(props);
		this.state = {
			score: 1,
			characters: Chars,
			selectedChar: [],
		};
	}


	// Click event
	clickHandler = (element) => {

		// Character ID
		let id = element.target.id;
		let isSelected = false;

		// To check match with selected image
		this.state.selectedChar.forEach(character => {

			// if id matches
			if (character.id == id) {

				// change isSelected to true
				isSelected = true;
			}
		})

		if (isSelected) {
			this.endGame();
		}
		else {
			this.state.characters.forEach(character => {
				if (character.id == id) {
					this.setState(
						{
							selectedChar: [...this.state.selectedChar, character]
						}
					);
					// Updates Scire
					this.updateScore();
				}
			})
		}

		this.setState(
			{
				characters: shuffle(this.state.characters)
			}
		);

	}

	// function to update the current game's score
	updateScore = () => {
		// set the new score
		this.setState(
			{
				score: this.state.score + 1
			}
		);
		this.props.updateCurrentScore(this.state.score);
		console.log("Testing Score: " + this.state.score);
	}


	endGame = () => {
		this.props.updateHighScore(this.state.score);
		this.setState({
			score: 1,
			selectedChar: []
		});
		this.props.updateCurrentScore(0);
	}

	render() {
		return (
			<div className="container mt-5" id="card-container">
				<div className="row row-align">
					{Chars.map(
						character =>
							<Card
								src = {character.img}
								key = {character.id}
								id = {character.id}
								alt = {character.name}
								endGame = {this.endGame}
								clickHandler = {this.clickHandler}
								score = {this.state.score}
							/>
					)
					}
				</div>
			</div>
		);
	}
}

export default Container;