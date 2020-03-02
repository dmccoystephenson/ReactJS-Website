import React, { Component } from 'react';
import './App.css';

import Home from './Home/Home.js';
import About from './About/About.js';
import Education from './Education/Education.js';
import WorkExperience from './Work Experience/WorkExperience.js';
import Languages from './Languages/Languages.js';

import Footer from './Footer/Footer.js'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 'home'
		};
	}

	render() {
		return (
			<div className="centered">
				{this.renderHeader()}
				{this.decidePage()}
				< Footer />
			</div>
		);
	}

	decidePage() {
		if (this.state.page == 'home') {
			return < Home />;
		}
		else if (this.state.page == 'about') {
			return 	< About />;
		}
		else if (this.state.page == 'education') {
			return < Education />;
		}
		else if (this.state.page == 'work-experience') {
			return < WorkExperience />;
		}
		else if (this.state.page == 'languages') {
			return < Languages />;
		}
		else {
			return <p>Not Available Yet</p>;
		}
	}

	renderHeader() {
		return (
			<div>
				<div className="header">
					<h1>Exploring the World of Programming</h1>
				</div>
				{this.renderPageList()}
			</div>
		)
	}

	renderPageList() {
		return (
			<div className="navigation">
				<button onClick={() => this.setPage('home')}>Home</button>
				<button onClick={() => this.setPage('about')}>About</button>
				<button onClick={() => this.setPage('education')}>Education</button>
				<button onClick={() => this.setPage('work-experience')}>Work Experience</button>
				<button onClick={() => this.setPage('languages')}>Languages</button>
			</div>
		)
	}

	setPage(passedPage) {
		this.setState({
			page: passedPage
		});
	}

}

export default App;
