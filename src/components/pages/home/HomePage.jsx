import React, { Component } from 'react';

require('./HomePage.scss');

class HomePage extends Component {

  render() {
    return (
      <div className="hero">
        <img src="images/logo.jpg" alt="logo" />
        <h1>Adventure awaits you!</h1>
        <p>Welcome to Adventure Lookup, a search engine for Dungeons and Dragons Adventures</p>
      </div>
    );
  }
}

export default HomePage;
