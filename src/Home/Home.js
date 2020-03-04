import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
	renderIntro() {
		return (
			<div>
				<h1>Home</h1>
				<p>Welcome to my website! I'm currently learning ReactJS concepts and wanted to experiment a little here.</p>
				<p>I have successfully implemented a tab design here that allows me to show different page components and have different navigation panes.</p>
			</div>
		)
	}

	render() {
		return (
			<div className="centered">
				{this.renderIntro()}
			</div>
		);
	}
}

export default Home;
