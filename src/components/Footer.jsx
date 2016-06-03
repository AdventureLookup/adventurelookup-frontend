import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';

class Footer extends Component {

  static propTypes = {
    style: PropTypes.object,
  };

  render() {
    return (
      <Paper style={this.props.style}>
        <p>This is the footer</p>
        <p>&copy; 2016 Lookup Industries Inc.</p>
      </Paper>
    );
  }
}

export default Footer;
