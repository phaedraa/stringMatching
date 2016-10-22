import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import matchability from './matchability';
import AppBar from 'material-ui/AppBar';
import Subheader from 'material-ui/Subheader';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stringOne: "", stringTwo: "" };
    this.handleChangeStringOne = this.handleChangeStringOne.bind(this);
    this.handleChangeStringTwo = this.handleChangeStringTwo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeStringOne(event) {
    this.setState({stringOne: event.target.value});
  }

  handleChangeStringTwo(event) {
    this.setState({stringTwo: event.target.value});
  }

  handleSubmit(event) {
    alert("Calculating the matchability...");
  }

  render() {
    const buttonContainerStyle = {
      padding: "30px",
      display: "flex",
      justifyContent: "space-between",
    };
    return (
      <MuiThemeProvider>
    		<div>
          <AppBar
            title="String Matchability Calculator"
            showMenuIconButton={false}
          />
          <Subheader>
            This program takes two strings as inputs and outputs two numbers, N1
             and N2. The output describes a degree of matching between the two
             strings: N1 represents the number of letters in one string that
             each match in value and in position to a letter in the other
             string. N2 represents the number of letters in one string that each
             match in value, but not in position to a letter in the other
             string.
          </Subheader>
          <div style={buttonContainerStyle}>
  					<TextField
  						name="string-one"
  						placeholder="String one"
  						errorText="String one is required"
  						value={this.state.value}
  						onChange={this.handleChangeStringOne} />
  	        <TextField
  						name="string-two"
  						placeholder="String two"
  						errorText="String two is required"
  						value={this.state.value}
  						onChange={this.handleChangeStringTwo} />
            <RaisedButton
              label="Go"
              labelPosition="before"
              primary={true}
  	          onClick={this.handleSubmit}
              style={{boxShadow: ''}}
            />
          </div>
	      </div>
	    </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById('root'));