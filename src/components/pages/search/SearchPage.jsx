import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  paper: {
    margin: '10vh 5vw',
    padding: '40px',
    minHeight: '200px',
  },
  buttonContainer: {
    margin: '10px',
    float: 'right',
  },
  button: {
    margin: '10px',
  },
};

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      query: '',
    };
  }

  componentDidMount() {
    this.getTags();
  }

  getTags() {
    // do ajax call to use tags.json in this.state.tags
    fetch('/tags.json')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState({ tags: res.tags }).bind(SearchPage);
      });
  }

  handleSearchInput = (searchText) => {
    this.setState({
      query: searchText,
    });
  }

  render() {
    return (
      <Paper style={styles.paper}>
        <AutoComplete
          floatingLabelText="Search..."
          filter={AutoComplete.fuzzyFilter}
          dataSource={this.state.tags}
          maxSearchResults={5}
          fullWidth={true}
          onUpdateInput={this.handleSearchInput}
          onNewRequest={this.handleSearchInput}
        />
        <div style={styles.buttonContainer}>
          <RaisedButton label="Search" secondary={true} style={styles.button} />
          <FlatButton label="[Advanced]" primary={true} style={styles.button} />
        </div>
      </Paper>
    );
  }
}

export default SearchPage;
