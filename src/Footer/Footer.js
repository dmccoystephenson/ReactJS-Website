import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastEdited: '7/26/2020'
    }
  }
  render() {
    return <p className="footer">Last Edited: {this.getLastEditedDate()}</p>
  }

  getLastEditedDate() {
    return this.state.lastEdited;
  }
}

export default Footer;
