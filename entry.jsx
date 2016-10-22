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
    this.state = { stringOne: "", stringTwo: "", result: []};
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
    const result = matchability(this.state.stringOne, this.state.stringTwo);
    this.setState({result: result});
  }

  renderResult() {
    const { result } = this.state;

    if (result.length !== 2) {
      return <span>Results: Not yet calculated.</span>;
    }
    return <span>Results: N1: {result[0]} N2: {result[1]}</span>;
  }

  render() {
    const buttonContainerStyle = {
      padding: "30px",
      display: "flex",
      justifyContent: "space-between",
    };
    const containerStyle = {
      fontFamily: "Roboto, sans-serif",
      color: "darkgray",
    };
    const centeredContentStyle = {
      display: "flex",
      justifyContent: "center",
    };

    return (
      <MuiThemeProvider>
    		<div style={containerStyle}>
          <AppBar
            title="String Matchability Calculator"
            showMenuIconButton={false}
            titleStyle={centeredContentStyle}
          />
          <Subheader>
            This program takes two strings as inputs and outputs two numbers, N1
             and N2. The output describes a degree of matching between the two
             strings:
            <ul>
              <li>
                N1 represents the number of letters in one string that
                each match in value and in position to a letter in the other
                string.
              </li>
              <li>
                N2 represents the number of letters in one string that each
                match in value, but not in position to a letter in the other
                string.
              </li>
            </ul>
          </Subheader>
          <div style={buttonContainerStyle}>
  					<TextField
  						name="string-one"
  						placeholder="String one"
  						value={this.state.value}
  						onChange={this.handleChangeStringOne} />
  	        <TextField
  						name="string-two"
  						placeholder="String two"
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
          <div style={centeredContentStyle}>
            {this.renderResult()}
          </div>
	      </div>
	    </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById('root'));
