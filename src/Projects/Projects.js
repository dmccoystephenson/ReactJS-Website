import React, { Component } from 'react';
import '../App.css';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'projects-intro'
        };
    }

    render() {
        return (
            <div className="centered">
                {this.renderHeader()}
                {this.decidePage()}
            </div>
        );
    }

    decidePage() {
        if (this.state.page === 'projects-intro') {
            return this.renderProjects();
        }
        else if (this.state.page === 'project-1') {
            return <p>test</p>;
        }
        else if (this.state.page === 'project-2') {
            return <p>test2</p>
        }
        else {
            return <p>Not Available Yet</p>;
        }
    }

    renderProjects() {
        return <p>This is where I will describe projects I have completed or projects I am working on.</p>
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
                <button onClick={() => this.setPage('projects-intro')}>Projects Intro</button>
                <button onClick={() => this.setPage('project-1')}>Project 1</button>
                <button onClick={() => this.setPage('project-2')}>Project 2</button>
            </div>
        )
    }

    setPage(passedPage) {
        this.setState({
            page: passedPage
        });
    }

}

export default Projects;