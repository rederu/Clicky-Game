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

			// If id
			if (character.id == id) {

				//The character has been selected before
				isSelected = true;
			}
		})

		if (isSelected) {
			this.gameOver();
		}
		else {
			this.state.characters.forEach(character => {
				if (character.id == id) {
					this.setState(
						{
							selectedChar: [...this.state.selectedChar, character]
						}
					);
					// Update Score
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

	// Update current score
	updateScore = () => {
		this.setState(
			{
				score: this.state.score + 1
			}
		);
		this.props.updateCurrentScore(this.state.score);
	}

	//If character has been selected before
	gameOver = () => {
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
								gameOver = {this.gameOver}
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