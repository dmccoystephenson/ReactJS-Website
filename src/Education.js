import React, { Component } from 'react';
import './App.css';

class About extends Component {
	render() {
		return (
		    <div className="App">
                <h1>Education</h1>

                <h2>Diploma & Degree</h2>
                <p>Computer Science Major at Colorado State University (third year)</p>
                <p>High School Diploma at Rocky Mountain High School (completed)</p>

                <h2>Relevant Coursework</h2>
                <p>CS253 - Software Development With C++</p>
                <p>CS370 - Operating Systems</p>
                <p>CS314 - Software Engineering</p>
                <p>CS356 - Systems Security</p>

                <h2>Certifications</h2>
                <p>CompTIA A+ Certification</p>
                <p>CompTIA Network+ Certification</p>
		    </div>
        );
	}
}

export default About;
