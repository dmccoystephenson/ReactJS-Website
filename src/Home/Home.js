import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
	renderIntro() {
		return (
			<div>
				<h1>Home</h1>
				<p>Welcome to my website! I'm currently learning ReactJS concepts and wanted to experiment a little here.</p>
			</div>
		)
	}

	renderQuestions() {
		return (
			<div>
				<h2> Investigative Questions </h2>
				<p>Question: How do I show you a list of pages and only show you one page at a time?</p>
				<p>Answer: Showing one component at a time depending upon state.</p>
			</div>
		)
	}

	render() {
		return (
			<div className="centered">
				{this.renderIntro()}
				<br />
				{this.renderQuestions()}
			</div>
		);
	}
}

export default Home;
