import React, { Component } from 'react';
import '../App.css';

import ContactInfo from "../Contact Info/ContactInfo";
import Education from "../Education/Education";
import WorkExperience from "../Work Experience/WorkExperience";
import Languages from "../Languages/Languages";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'about'
        }
    }
    render() {
        return (
            <div className="centered">
                {this.renderHeader()}
                {this.decidePage()}
            </div>
        );

    }

    renderHeader() {
        return (
            <div>
                {this.renderPageList()}
            </div>
        )
    }

    renderPageList() {
        return (
            <div className="navigation2">
                <button onClick={() => this.setPage('about')}>Short Bio</button>
                <button onClick={() => this.setPage('contact-info')}>Contact Info</button>
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

    decidePage() {
        if (this.state.page === 'about') {
            return this.renderDescription()
        }
        else if (this.state.page === 'contact-info') {
            return < ContactInfo />;
        }
        else if (this.state.page === 'education') {
            return < Education />;
        }
        else if (this.state.page === 'work-experience') {
            return < WorkExperience />;
        }
        else if (this.state.page === 'languages') {
            return < Languages />;
        }
        else {
            return <p>Not Available Yet</p>;
        }
    }

	renderDescription() {
		return (
		    <div className="App">
                <h1>Short Bio</h1>
                <p>My name is Daniel Stephenson.</p>
                <p>I consider computers to be one of mankind's greatest inventions</p>
                <p>I consider computer programming to be one of the purest forms of creation.</p>
                <p>I have made it my aspiration in life to study the computer system and all things related to it.</p>
                <p>I am currently working on a Computer Science degree at Colorado State University.</p>
		    </div>
        );
	}
}

export default About;
