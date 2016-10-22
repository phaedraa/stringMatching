import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert("Text field value is: '" + this.state.value + "'");
  }

  render() {
    return (
      <MuiThemeProvider>
    		<div>
	        <TextField
	          hintText="String one"
	      		errorText="This field is required"
	          value={this.state.value}
	          onChange={this.handleChange} />
	        <button onClick={this.handleSubmit}>Submit</button>
	      </div>
	    </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById('root'));