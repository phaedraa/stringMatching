import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import matchability from './matchability';
import AppBar from 'material-ui/AppBar';

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
    return (
      <MuiThemeProvider>
    		<div>
          <AppBar
            title="String Matchability Calculator"
            showMenuIconButton={false}
          />
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
          />
	      </div>
	    </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById('root'));